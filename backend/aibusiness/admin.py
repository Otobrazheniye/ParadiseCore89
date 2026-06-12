from django.contrib import admin
from .models import( 
    Service, ContactRequest, 
    Review, TrainingProgram, 
    AboutAiBusiness, PackagePlan
    )

# Register your models here.
@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = (
        "title", "slug",
        "order", "is_active", 
        "created_at",)
    list_filter = ("is_active", "created_at",)
    search_fields = (
        "title", "short_description",
        "full_description",)
    prepopulated_fields = {"slug": ("title",)}
    ordering = ("order", "title")


@admin.register(ContactRequest)
class ContactRequestAdmin(admin.ModelAdmin):
    list_display = (
        "name", "email",
        "company", "service_interest",
        "status", "created_at"
    )
    list_filter= ("status", "created_at",)
    search_fields = (
        "name", "email",
        "company", "service_interest",
        "message",
    )
    readonly_fields = (
        "name", "email",
        "company", "message", 
        "created_at", "updated_at",
        # 'service_interest',
    )
    ordering = ("-created_at",)

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = (
        "client_name", "company",
        "position", "rating", 
        "is_published", "created_at", 
    )
    list_filter = ("is_published", "rating", "created_at")
    search_fields = (
        "client_name", "company",
        "text", "position",
    )
    readonly_fields = (
        # "client_name", "company",
        # "position", "rating",
        "created_at", "updated_at",
    )
    ordering = ("-created_at",)

@admin.register(TrainingProgram)
class TrainingProgramAdmin(admin.ModelAdmin):
    list_display = (
        "title", "slug",
        "level", "duration",
        "order", "is_active",
        "created_at",
    )
    list_filter = (
        "level", "is_active",
        "created_at"
        )
    search_fields = (
        "title", "short_description",
        "full_description", "target_audience",
    )
    prepopulated_fields = {"slug":("title",),}
    ordering = ("order", "title")


@admin.register(AboutAiBusiness)
class AboutAiBusinessAdmin(admin.ModelAdmin):
    list_display = (
        "key", "eyebrow",
        "title", "order",
        "is_active", "created_at",
    )
    list_filter = ("is_active", "created_at")
    search_fields = (
        "key", "eyebrow", 
        "title", "body",
    )
    readonly_fields = ("created_at", "updated_at",)
    ordering = ("order", "key")
    
@admin.register(PackagePlan)
class PackagePlanAdmin(admin.ModelAdmin):
    list_display = (
        "name", "title", 
        "max_services", "is_active",
        "order", "created_at"
    )
    list_filter=("is_active", "created_at",)
    search_fields= (
        "name", "title",
        "summary", "description",
        "included_trainings__title", 
        "included_trainings__level",
    )
    filter_horizontal = (
    "included_trainings",
    )
    ordering = ("order", "max_services")