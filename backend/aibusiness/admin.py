from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from .models import( 
    Service, ContactRequest, 
    Review, TrainingProgram, 
    AboutAiBusiness, PackagePlan,
    PackageOrder, User,
    )


@admin.register(User)
class UserAdmin(DjangoUserAdmin):
    list_display = (
        "email", "full_name",
        "company", "created_at",
    ) 
    list_filter = ("company", "created_at",)
    search_fields = (
        "email", "full_name",
        "company",
    )
    ordering = ("full_name", "-created_at")

    fieldsets = (
        (None, { 
            "fields": ("email", "password")}),
        ("Personal info", {
            "fields": ("full_name", "company")
        }),
        ("Permission", {
            "fields": ( 
                "is_active", "is_staff",
                "is_superuser", "groups",
                "user_permissions",)
        }),
        ("Important dates", {
            "fields": ("last_login", "created_at")
        })
    )
    readonly_fields = ("created_at", "date_joined", "last_login")

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": (
                "email", "full_name",
                "company",
                "password1", "password2",
                "is_staff", "is_active",
            ),
        }),
    )



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


@admin.register(PackageOrder)
class PackageOrderAdmin(admin.ModelAdmin):
    list_display = (
        "customer_name", "customer_email",
        "company", "package_plan", 
        "status", "created_at",
    )
    list_filter = ("status", "package_plan")
    search_fields = ( 
        "customer_name", "customer_email",
        "company", "message",
        "package_plan__name", "package_plan__title",
        "package_plan__slug", "selected_services__title",
        "selected_services__slug", 
    )
    filter_horizontal = ("selected_services",)
    readonly_fields = ("created_at", "updated_at",)
    ordering = ("-created_at",)

