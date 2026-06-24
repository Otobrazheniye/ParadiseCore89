from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

from .views import (
    UserViewSet,
    ServiceViewSet, ContactRequestViewSet, 
    ReviewViewSet, TrainingProgramViewSet,
    AboutAiBusinessViewSet, PackagePlanViewSet,
    PackageOrderViewSet, UserPackageAccessViewSet,
    UserTrainingAccessViewSet, UserServiceAccessViewSet,
    )


router = DefaultRouter()


# Users
router.register("users", UserViewSet, basename="user")


# AI Business Classic
router.register("services", ServiceViewSet, basename="service")
router.register("contact-request", ContactRequestViewSet, basename="contact-request")
router.register("reviews", ReviewViewSet, basename="review")
router.register("training", TrainingProgramViewSet, basename="training")
router.register("about-aibusiness", AboutAiBusinessViewSet, basename="about-aibusiness")
router.register("package-plans", PackagePlanViewSet, basename="package-plan")


# AI Business Logical Chain
router.register("package-orders", PackageOrderViewSet, basename="package-order")
router.register("user-package-accesses", UserPackageAccessViewSet, basename="user-package-access")
router.register("user-training-accesses", UserTrainingAccessViewSet, basename="user-training-access")
router.register("user-service-accesses", UserServiceAccessViewSet, basename="user-service-access")

urlpatterns = [
    path("", include(router.urls)),
    path("users/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
