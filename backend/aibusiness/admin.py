from django.contrib import admin
from .models import Service, ContactRequest

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
        'name', 'email',
        'company', 'message', 
        'created_at', 'updated_at',
        # 'service_interest',
    )
    ordering = ("-created_at",)
