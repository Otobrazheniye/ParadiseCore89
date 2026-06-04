from rest_framework import serializers
from .models import Service, ContactRequest


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
        'id',
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
        