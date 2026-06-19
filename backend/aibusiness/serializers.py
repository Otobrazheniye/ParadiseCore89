from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import(
    Service, ContactRequest, 
    Review, TrainingProgram, 
    AboutAiBusiness, PackagePlan,
    PackageOrder, User,
) 

#User
class RegistrationUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)
    
    class Meta: 
        model = User
        fields = (
            "id", "email", 
            "password", "full_name",
            "company", "created_at",  
        )

        read_only_fields = ("id", "created_at")

    def create(self, validated_data):
        password = validated_data.pop("password")
        
        user = User(**validated_data)
        user.set_password(password)
        user.save()

        return user
    

class LoginUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    password =  serializers.CharField(write_only=True, min_length=6)

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        # user = authenticate(
        #     username=email,
        #     password=password
        # )

        # if not user:
        #     raise serializers.ValidationError("Invalid email or password")

        # attrs["user"] = user
        # return attrs


class MeUserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id", "email", 
            "full_name", "company", 
            "created_at",  
        )
        
        read_only_fields = ("id", "email", "created_at")


#Other Serializers
class ServiceListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = (
            'id', 'title',
            'slug', 'short_description',
            'icon_name', 'order',
        )


class ServiceDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = (
            'id', 'title',
            'slug', 'short_description',
            'full_description', 'icon_name', 
            'order', 'created_at',
            'updated_at'
        )


class ContactRequestCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactRequest
        fields = (
        "id",
        'name', 'email',
        'company', 'service_interest',
        'message', 'created_at',    
        )

        read_only_fields = (
            'id', 'created_at',
        )
        
    def validate_name(self, value):
        if len(value.strip()) < 2:
            raise serializers.ValidationError("Name must be at least 3 symbols")
        return value 
        
    def validate_message(self, value):
        if len(value.strip()) < 10:
            raise serializers.ValidationError("message must be at least 11 symbol")
        return value
        

class ReviewListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = (
            "id", "client_name",
            "company", "position",  
            "text", "rating", 
            "created_at",
        )
        read_only_fields = (
            "id", "created_at",
        )

class ReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = (
            "id", "client_name", 
            "company", "position", 
            "text", "rating", 
            "created_at",
        )
        read_only_fields = (
            "id", "created_at",
        )

    def validate_client_name(self, value):
            if len(value.strip()) < 2:
                raise serializers.ValidationError("Name must be at least 2 symbols") 
            return value
        
    def validate_text(self, value):
            if len(value.strip()) < 10:
                raise serializers.ValidationError("Message must be at least 10 symbol")
            return value
        
    def validate_rating(self, value):
        if value < 1 or value > 5:
            raise serializers.ValidationError("Rating must be between 1 and 5.")
        return value

class TrainingProgramListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainingProgram
        fields = (
            "id", "title",
            "slug", "short_description",
            "level", "duration",
            "target_audience", "order",
        )

class TrainingProgramDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainingProgram
        fields = (
            "id", "title",
            "slug", "short_description",
            "full_description", "level", 
            "duration", "target_audience", 
            "order", "created_at", 
            "updated_at",
        )
    
class AboutAiBusinessSerializer(serializers.ModelSerializer):
    paragraphs = serializers.SerializerMethodField()
    class Meta:
        model = AboutAiBusiness
        fields = (
            "id", "key", 
            "eyebrow", "title", 
            "body", "paragraphs", 
            "order",
        )

    
    def validate_title(self,value):
        if len(value.strip()) < 2:
            raise serializers.ValidationError("Title must be at least 2 symbols")
        return value
    
    
    def validate_body(self,value):
        if len(value.strip()) < 4:
            raise serializers.ValidationError("Body must be at least 4 symbols")
        return value

    def get_paragraphs(self, obj):
        return [
            paragraph.strip()
            for paragraph in obj.body.split("\n\n")
            if paragraph.strip()
        ]
    
    # def get_paragraphs(self, obj):
    #     paragraphs = []

    #     body_parts = obj.body.split("\n\n")

    #     for paragraph in body_parts:
    #         clean_paragraph = paragraph.strip()

    #         if clean_paragraph:
    #             paragraphs.append(clean_paragraph)

    #     return paragraphs
    

class PackagePlanSerializer(serializers.ModelSerializer):
    included_trainings = TrainingProgramDetailSerializer(many=True, read_only=True)
    
    description_paragraphs = serializers.SerializerMethodField()
    includes_list = serializers.SerializerMethodField()
    best_for_list = serializers.SerializerMethodField()
    
    class Meta:
        model = PackagePlan
        fields = (
            "id", "name",
            "slug", "title",
            "summary", "description",
            "description_paragraphs",
            "badge", "includes_title",
            "includes_text", "includes_list",
            "best_for_title", "best_for_text", 
            "best_for_list", "button_label",
            "max_services", "included_trainings",
            "order", "created_at",
        )

    def get_description_paragraphs(self, obj):
        return [
            paragraph.strip()
            for paragraph in obj.description.split("\n\n")
            if paragraph.strip()
        ]

    def get_includes_list(self, obj):
        return [
            item.strip()
            for item in obj.includes_text.splitlines()
            if item.strip()
        ]
    
    def get_best_for_list(self, obj):
        return [
            paragraph.strip()
            for paragraph in obj.best_for_text.split("\n\n")
            if paragraph.strip()
        ]
    

class PackageOrderCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageOrder
        fields = (
        "id", "customer_name",
        "customer_email", "company", 
        "message", "package_plan",
        "selected_services", "status",
        "created_at", 
        )
        read_only_fields = (
            "id", "status",
            "created_at",
        )
        
    def validate(self, attrs):
        package_plan = attrs.get("package_plan")
        selected_services = attrs.get("selected_services",[])
        if not selected_services:
            raise serializers.ValidationError({
            "selected_services": "Choose at least one service."
        })
        
        if package_plan and len(selected_services) > package_plan.max_services:
            raise serializers.ValidationError({
            "selected_services": f"This package allows maximum {package_plan.max_services} services."
        })

        return attrs
    