from rest_framework import viewsets
from .models import Service
from .serializers import ServiceListSerializer, ServiceDetailSerializer


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.filter(is_active=True)
    lookup_field = "slug"


    def get_serializer_class(self):
        if self.action == "retrieve":
            return ServiceDetailSerializer

        return ServiceListSerializer
