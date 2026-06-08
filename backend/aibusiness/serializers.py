from rest_framework import serializers
from .models import Service, ContactRequest, Review, TrainingProgram


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