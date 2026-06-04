from rest_framework import mixins, viewsets

from .models import Service, ContactRequest
from .serializers import (
    ServiceListSerializer, ServiceDetailSerializer, 
    ContactRequestCreateSerializer)


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