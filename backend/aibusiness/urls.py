from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import (
    ServiceViewSet, ContactRequestViewSet, 
    ReviewViewSet, TrainingProgramViewSet,
    AboutAiBusinessViewSet, PackagePlanViewSet,
    PackageOrderViewSet,
    )


router = DefaultRouter()


router.register("services", ServiceViewSet, basename="service")
router.register("contact-request", ContactRequestViewSet, basename="contact-request")
router.register("reviews", ReviewViewSet, basename="review")
router.register("training", TrainingProgramViewSet, basename="training")
router.register("about-aibusiness", AboutAiBusinessViewSet, basename="about-aibusiness")
router.register("package-plans", PackagePlanViewSet, basename="package-plan")
router.register("package-orders", PackageOrderViewSet, basename="package-order")

urlpatterns = [
    path("", include(router.urls))
]
