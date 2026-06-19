from django.contrib.auth import authenticate
from rest_framework import viewsets, serializers, status, mixins
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.response import Response


from .models import (
    User,
    Service, ContactRequest, 
    Review, TrainingProgram, 
    AboutAiBusiness, PackagePlan,
    PackageOrder,
)
from .serializers import (    
    RegistrationUserSerializer, LoginUserSerializer,
    MeUserSerializer,
    ServiceListSerializer, ServiceDetailSerializer, 
    ContactRequestCreateSerializer,
    ReviewListSerializer, ReviewCreateSerializer,
    TrainingProgramListSerializer, TrainingProgramDetailSerializer,
    AboutAiBusinessSerializer, PackagePlanSerializer,
    PackageOrderCreateSerializer,
    )

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()

    def get_serializer_class(self):
        if self.action == "create":
            return RegistrationUserSerializer
        elif self.action == "login":
            return LoginUserSerializer
        elif self.action == "retrieve":
            return MeUserSerializer
        return MeUserSerializer
    
    def get_permissions(self):
        if self.action in ("create", "login"):
            return [AllowAny]
        if self.action == "me":
            return [IsAuthenticated]
        return [IsAdminUser()]
        


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.filter(is_active=True)
    lookup_field = "slug"


    def get_serializer_class(self):
        if self.action == "retrieve":
            return ServiceDetailSerializer

        return ServiceListSerializer


class ContactRequestViewSet(mixins.CreateModelMixin,viewsets.GenericViewSet):
    queryset = ContactRequest.objects.all()


    def get_serializer_class(self):
        return ContactRequestCreateSerializer
    

class ReviewViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Review.objects.filter(is_published=True)

    def get_serializer_class(self):
        if self.action == "create":
            return ReviewCreateSerializer
        return ReviewListSerializer
        

class TrainingProgramViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TrainingProgram.objects.filter(is_active=True)
    lookup_field = "slug"


    def get_serializer_class(self):
        if self.action == "retrieve":
            return TrainingProgramDetailSerializer
        return TrainingProgramListSerializer
                
class AboutAiBusinessViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AboutAiBusiness.objects.filter(is_active=True)
    lookup_field = "key"

    def get_serializer_class(self):
        return AboutAiBusinessSerializer

    http_method_names = ["get", "head", "options"]

class PackagePlanViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PackagePlan.objects.filter(is_active=True)
    lookup_field = "slug"

    # serializer_class = PackagePlanSerializer
    def get_serializer_class(self, ):
        return PackagePlanSerializer
        
    http_method_names = ["get", "head", "options"]

class PackageOrderViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = PackageOrder.objects.all()
    lookup_field = "id"

    def get_serializer_class(self):
        return PackageOrderCreateSerializer