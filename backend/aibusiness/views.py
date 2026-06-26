from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model


# Rest
from rest_framework import viewsets, serializers, status, mixins
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError


# Models
from .models import (
    User,
    Service, ContactRequest, 
    Review, TrainingProgram, 
    AboutAiBusiness, PackagePlan,
    PackageOrder, UserPackageAccess,
    UserTrainingAccess, UserServiceAccess,
)
from .serializers import (    
    RegistrationUserSerializer, LoginUserSerializer,
    MeUserSerializer, LogoutSerializer,
    ServiceListSerializer, ServiceDetailSerializer, 
    ContactRequestCreateSerializer,
    ReviewListSerializer, ReviewCreateSerializer,
    TrainingProgramListSerializer, TrainingProgramDetailSerializer,
    AboutAiBusinessSerializer, PackagePlanSerializer,
    PackageOrderCreateSerializer, 
    UserPackageAccessSerializer, UserPackageAccessReadSerializer,
    UserTrainingAccessSerializer, UserTrainingAccessReadSerializer,
    UserServiceAccessSerializer, UserServiceAccessReadSerializer,
    )


# User
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()

    def get_serializer_class(self):
        if self.action == "create":
            return RegistrationUserSerializer
        elif self.action == "login":
            return LoginUserSerializer
        elif self.action == "me":
            return MeUserSerializer
        elif self.action =="logout":
            return LogoutSerializer
        return MeUserSerializer
    
    def get_permissions(self):
        if self.action in ("create", "login"):
            return [AllowAny()]
    
        if self.action in ("me", "logout"):
            return [IsAuthenticated()]
    
        return [IsAdminUser()]
    

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.save()

        refresh = RefreshToken.for_user(user)

        return Response({
            "message": "Registration successful",
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "user": MeUserSerializer(user).data,
        },
        status=status.HTTP_201_CREATED,
    )

    @action(detail=False, methods=["post"])
    def login(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data.get("email")
        password = serializer.validated_data.get("password")

        user = authenticate(
            request = request,
            username = email,
            password = password
        )

        if not user:
            raise serializers.ValidationError("Invalid email or password")
        
        if not user.is_active:
            raise serializers.ValidationError("User account is disabled")
        
        refresh = RefreshToken.for_user(user)
        
        return Response({
            "message": "Login successful",
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "user": MeUserSerializer(user).data,
        },
        status=status.HTTP_200_OK,
    )

    @action(detail=False, methods=["get","patch"])
    def me(self, request):
        if request.method == "GET":
            serializer = self.get_serializer(request.user)
            return Response(serializer.data)
        
        serializer = self.get_serializer(request.user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)
        
    @action(detail=False, methods=["post"])
    def logout(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        refresh_token = serializer.validated_data["refresh"]

        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
        except TokenError:
            raise serializers.ValidationError("Invalid or expired refresh token")
        return Response(
            {"message": "Logout successful"},
            status=status.HTTP_200_OK,
        )
       

# AI Business Classic
class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = Service.objects.filter(is_active=True)
    lookup_field = "slug"


    def get_serializer_class(self):
        if self.action == "retrieve":
            return ServiceDetailSerializer

        return ServiceListSerializer


class ContactRequestViewSet(mixins.CreateModelMixin,viewsets.GenericViewSet):
    permission_classes = [AllowAny]
    queryset = ContactRequest.objects.all()


    def get_serializer_class(self):
        return ContactRequestCreateSerializer
    

class ReviewViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet):
    permission_classes = [AllowAny]
    queryset = Review.objects.filter(is_published=True)

    def get_serializer_class(self):
        if self.action == "create":
            return ReviewCreateSerializer
        return ReviewListSerializer
        

class TrainingProgramViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = TrainingProgram.objects.filter(is_active=True)
    lookup_field = "slug"


    def get_serializer_class(self): 
        if self.action == "retrieve":
            return TrainingProgramDetailSerializer
        return TrainingProgramListSerializer


class AboutAiBusinessViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = AboutAiBusiness.objects.filter(is_active=True)
    lookup_field = "key"

    def get_serializer_class(self):
        return AboutAiBusinessSerializer

    http_method_names = ["get", "head", "options"]


class PackagePlanViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny]
    queryset = PackagePlan.objects.filter(is_active=True)
    lookup_field = "slug"

    # serializer_class = PackagePlanSerializer
    def get_serializer_class(self, ):
        return PackagePlanSerializer
        
    http_method_names = ["get", "head", "options"]


# AI Business Logical chain
class PackageOrderViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    permission_classes = [IsAuthenticated]
    lookup_field = "id"

    def get_serializer_class(self):
        return PackageOrderCreateSerializer
    
    def get_queryset(self):
        current_user = self.request.user
        if current_user.is_staff:
            return PackageOrder.objects.all()
        return PackageOrder.objects.filter(user=current_user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class UserPackageAccessViewSet(mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    # permission_classes = [IsAuthenticated]
    lookup_field = "id"

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return UserPackageAccessReadSerializer
        return  UserPackageAccessSerializer
    
    def get_permissions(self):
        if self.action in ("update", "partial_update"):
            return [IsAdminUser()]
        return [IsAuthenticated()]
    
    def get_queryset(self):
        current_user = self.request.user
        if current_user.is_staff:
            return UserPackageAccess.objects.all()
        return UserPackageAccess.objects.filter(user=current_user)
        

class UserTrainingAccessViewSet(mixins.ListModelMixin, mixins.UpdateModelMixin,mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    # permission_classes = [IsAuthenticated]
    lookup_field = "id"

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return UserTrainingAccessReadSerializer
        return UserTrainingAccessSerializer
    
    def get_permissions(self):
        if self.action in ("update", "partial_update"):
            return [IsAdminUser()]
        return [IsAuthenticated()]

    def get_queryset(self):
        current_user = self.request.user
        if current_user.is_staff:
            return UserTrainingAccess.objects.all()
        return UserTrainingAccess.objects.filter(user=current_user)
    

class UserServiceAccessViewSet(mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    # permission_classes = [IsAuthenticated]
    lookup_field = "id"

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return UserServiceAccessReadSerializer
        return UserServiceAccessSerializer

    def get_permissions(self):
        if self.action in ("update", "partial_update"):
            return [IsAdminUser()]
        return [IsAuthenticated()]

    def get_queryset(self):
        current_user = self.request.user
        if current_user.is_staff:
            return UserServiceAccess.objects.all()
        return UserServiceAccess.objects.filter(user =current_user)
    
