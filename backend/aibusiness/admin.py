from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from .models import( 
    User,
    Service, ContactRequest, 
    Review, TrainingProgram, 
    AboutAiBusiness, PackagePlan,
    PackageOrder, UserPackageAccess,
    UserTrainingAccess, UserServiceAccess,
    )

# User
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


# AI Business Classic
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


# AI Business Logical Chain
@admin.register(PackageOrder)
class PackageOrderAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "customer_name", "customer_email",
        "company", "package_plan", 
        "status", "created_at",
    )
    list_filter = ("status", "package_plan")
    search_fields = ( 
        "user__email", "user__full_name",
        "customer_name", "customer_email",
        "company", "message",
        "package_plan__name", "package_plan__title",
        "package_plan__slug", "selected_services__title",
        "selected_services__slug", 
    )
    filter_horizontal = ("selected_services",)
    readonly_fields = ("created_at", "updated_at",)
    ordering = ("-created_at",)

    actions = ("approve_orders",)

    @admin.action(description="Approve selected package orders")
    def approve_orders(self, request, queryset):
        for order in queryset:
            order.approve(request.user)


@admin.register(UserPackageAccess)
class UserPackageAccessAdmin(admin.ModelAdmin):
    list_display = (
        "user", "package_plan", 
        "source_order", "is_active", 
        "created_at", "expires_at",
    )
    list_filter = ("package_plan", "is_active", "created_at",)
    search_fields = (
        "user__email", "user__full_name", 
        "package_plan__name", "package_plan__title",
        "package_plan__slug", 
        "source_order__customer_name",
        "source_order__customer_email",
        "source_order__company",
        "source_order__status",
        "source_order__approved_by__email",
        "source_order__approved_by__full_name", 
    )
    readonly_fields = ("user", "created_at",)
    ordering = ("-created_at",)


@admin.register(UserTrainingAccess)
class UserTrainingAccessAdmin(admin.ModelAdmin):
    list_display = (
        "user", "training_program", 
        "source_order", "access_type", 
        "source_package_access", "is_active", 
        "created_at", "expires_at", 
    )
    list_filter = ("training_program", "access_type", "is_active", "created_at")
    search_fields = (
        "user__email", "user__full_name", 
        "training_program__title", "training_program__slug",
        "training_program__level", 
        "source_order__customer_name",
        "source_order__customer_email",
        "source_order__company",
        "source_order__status",

        "source_order__approved_by__email",
        "source_order__approved_by__full_name",

        "source_package_access__package_plan__name",
        "source_package_access__package_plan__title",
        "source_package_access__package_plan__slug",

        "source_package_access__source_order__customer_name",
        "source_package_access__source_order__customer_email",
    )
    readonly_fields = ("user", "created_at",)
    ordering = ("-created_at",)


@admin.register(UserServiceAccess)
class UserServiceAccessAdmin(admin.ModelAdmin):
    list_display = (
        "user", "service", 
        "source_order", "source_package_access", 
        "is_active", "created_at", 
        "expires_at",
    )
    list_filter = ( "service", "is_active", "created_at",)
    search_fields = (
        "user__email", "user__full_name",
        "service__title", "service__slug",
        "source_order__customer_name",
        "source_order__customer_email",
        "source_order__company",
        "source_order__status",
        "source_order__approved_by__email",
        "source_order__approved_by__full_name",
        "source_package_access__package_plan__name",
        "source_package_access__package_plan__title",
        "source_package_access__package_plan__slug",
        "source_package_access__source_order__customer_name",
        "source_package_access__source_order__customer_email",
    )
    readonly_fields = ("user", "created_at",)
    ordering = ("-created_at",)
    