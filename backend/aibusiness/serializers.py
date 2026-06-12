from rest_framework import serializers
from .models import(
    Service, ContactRequest, 
    Review, TrainingProgram, 
    AboutAiBusiness, PackagePlan,
) 


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
            "level", "duration",
            "target_audience", "order",
            "created_at", "updated_at",
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
    

class PackageTrainingSerializer(serializers.ModelSerializer):
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

class PackagePlanSerializer(serializers.ModelSerializer):
    included_trainings = PackageTrainingSerializer(many=True, read_only=True)
    class Meta:
        model = PackagePlan
        fields = (
            "id", "name",
            "slug", "title",
            "summary", "description",
            "max_services", "included_trainings",
            "order", "created_at",
        )

