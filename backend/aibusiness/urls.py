from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet, ContactRequestViewSet, ReviewViewSet


router = DefaultRouter()


router.register("services", ServiceViewSet, basename="service")
router.register("contact-request", ContactRequestViewSet, basename="contact-request")
router.register("reviews", ReviewViewSet, basename="review")


urlpatterns = [
    path("", include(router.urls))
]
