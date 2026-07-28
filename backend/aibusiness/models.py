from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

from django.utils.text import slugify
from django.utils import timezone

from django.db import transaction
from django.db.models import Q


# User
class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True")

        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True")

        return self.create_user(email, password, **extra_fields)
    

class User(AbstractUser):
    username = None

    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=150, blank=True)
    company = models.CharField(max_length=150, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email


# AI Business Models classic
class Service(models.Model):
    title = models.CharField(max_length=120)
    slug = models.SlugField(max_length=140, unique=True, blank=True)

    short_description = models.CharField(max_length=255)
    full_description = models.TextField()

    icon_name = models.CharField(max_length=80, blank=True)
    order = models.PositiveIntegerField(default=0)

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        ordering = ['order', 'title']


    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)

        super().save(*args, **kwargs)


    def __str__(self):
        return self.title


class ContactRequest(models.Model):
    STATUS_NEW = 'new'
    STATUS_IN_PROGRESS = 'in_progress'
    STATUS_DONE = 'done'
    STATUS_SPAM = 'spam'


    STATUS_CHOICES = [
        (STATUS_NEW, 'New'), (STATUS_IN_PROGRESS, 'In progress'),
        (STATUS_DONE, 'Done'), (STATUS_SPAM, 'Spam'),
    ]
    

    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=255)
    company = models.CharField(max_length=255, blank=True)
    service_interest = models.CharField(max_length=100, blank=True)
    message = models.TextField()

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=STATUS_NEW)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    admin_note = models.TextField(blank=True)


    class Meta:
        ordering = ['-created_at']


    def __str__(self):  
        return f'{self.name} - {self.email}'


class Review(models.Model):
    client_name = models.CharField(max_length=100)
    company = models.CharField(max_length=255, blank=True)
    position = models.CharField(max_length=255, blank=True)
    text = models.TextField()
    rating = models.PositiveSmallIntegerField(default=5)

    is_published = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    admin_note = models.TextField(blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.client_name} - {self.rating}/5'


class TrainingProgram(models.Model):
    LEVEL_INITIAL = "initial"
    LEVEL_ROLE_BASED = "role_based"
    LEVEL_ACADEMY = "academy"
    LEVEL_CHAMPIONS = "champions"

    LEVEL_CHOICES = [
        (LEVEL_INITIAL, "Initial team training"), (LEVEL_ROLE_BASED, "Role-based training"), 
        (LEVEL_ACADEMY, "AI Academy"), (LEVEL_CHAMPIONS, "Internal champions"),
    ]


    title = models.CharField(max_length=120)
    slug = models.SlugField(max_length=130, unique=True, blank=True)
    short_description = models.CharField(max_length=255)
    full_description = models.TextField()

    level = models.CharField(max_length=30, choices=LEVEL_CHOICES, default=LEVEL_INITIAL)

    duration = models.CharField(max_length=120, blank=True)
    target_audience = models.CharField(max_length=120, blank=True)
    order = models.PositiveIntegerField(default=0)

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True) 

    class Meta:
        ordering = ["order","title"]

    def save (self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args,**kwargs)

    def __str__(self):
        return self.title
    

class AboutAiBusiness(models.Model):

    key = models.SlugField(max_length=100, unique=True)
    eyebrow = models.CharField(max_length=120, blank=True)
    title = models.CharField(max_length=180)
    body = models.TextField()
    order = models.PositiveIntegerField(default=0)
    
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ("order", "key")

    def __str__(self):
        return f"{self.key} - {self.title}"
    

class PackagePlan(models.Model):
    SERVICES_LEVEL_ONE = 1
    SERVICES_LEVEL_TWO = 3
    SERVICES_LEVEL_THREE = 5

    MAX_SERVICES = [
        (SERVICES_LEVEL_ONE, "Choose 1 service"),
        (SERVICES_LEVEL_TWO, "Choose 1-3 services"),
        (SERVICES_LEVEL_THREE, "All services open for you")
    ]

    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=110, unique=True, blank=True)
    title = models.CharField(max_length=100)
    summary = models.CharField(max_length=255)
    description = models.TextField()
    
    badge = models.CharField(max_length=50, blank= True, default="")
    includes_title = models.CharField(max_length=100, default="What is included")
    includes_text = models.TextField(blank=True, default="")
    best_for_title = models.CharField(max_length=100, default="Best suited for")
    best_for_text = models.TextField(blank=True, default="")
    button_label = models.CharField(max_length=50, blank=True,  default="")

    max_services = models.PositiveSmallIntegerField(choices=MAX_SERVICES, default=SERVICES_LEVEL_ONE)
    included_trainings = models.ManyToManyField("TrainingProgram", blank=True, related_name="package_plans",)
    
    is_active = models.BooleanField(default=True)

    order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["order", "name"]

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


# AI Business Models Logical chain  
class PackageOrder(models.Model):
    STATUS_NEW = "new"
    STATUS_IN_REVIEW = "in_review"
    STATUS_APPROVED = "approved"
    STATUS_REJECTED = "rejected"

    STATUS_CHOICES = [
        (STATUS_NEW, "NEW"),
        (STATUS_IN_REVIEW, "IN REVIEW"),
        (STATUS_APPROVED, "APPROVED"),
        (STATUS_REJECTED, "REJECTED"),
    ]

    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="package_orders")
    customer_name = models.CharField(max_length=100)
    customer_email = models.EmailField(max_length=255)
    company = models.CharField(max_length=255, blank=True)
    message = models.TextField(blank=True)

    package_plan = models.ForeignKey("PackagePlan", on_delete=models.PROTECT, related_name="orders")
    selected_services = models.ManyToManyField("Service", blank=True, related_name="package_orders")

    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default=STATUS_NEW)
    approved_by = models.ForeignKey("User", on_delete=models.SET_NULL, null=True, blank=True, related_name="approved_package_orders")
    approved_at = models.DateTimeField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.customer_name} - {self.package_plan.title}"

    def approve(self, admin_user):
        with transaction.atomic():
            self.status = self.STATUS_APPROVED
            self.approved_by = admin_user
            self.approved_at = timezone.now()
            self.save()

            package_access, created = UserPackageAccess.objects.get_or_create(
                user = self.user, package_plan = self.package_plan,
                source_order = self, defaults = {"is_active": True, }
            )
            
            for service in self.selected_services.all():
                UserServiceAccess.objects.get_or_create(
                    user = self.user, service = service,
                    source_order = self, source_package_access = package_access,
                    defaults = {"is_active": True}
                )

            for training in self.package_plan.included_trainings.all():
                UserTrainingAccess.objects.get_or_create(
                    user=self.user, training_program=training,
                    source_order=self, source_package_access=package_access,
                    defaults={
                        "access_type": UserTrainingAccess.ACCESS_TYPE_PACKAGE,
                        "is_active": True,
                    }
                )

class UserPackageAccess(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="package_accesses")
    package_plan = models.ForeignKey("PackagePlan", on_delete=models.PROTECT, related_name="user_accesses")
    source_order = models.OneToOneField("PackageOrder", on_delete=models.CASCADE, related_name="package_access")
        
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ["-created_at"]
        constraints = [
            models.UniqueConstraint(
                fields = ["user", "package_plan"],
                condition = Q(is_active=True),
                name = "unique_user_package_access",
            )
        ]

    def __str__(self):
        return f"{self.user} - {self.package_plan}"
    

class UserTrainingAccess(models.Model):
    ACCESS_TYPE_PACKAGE = "package"
    ACCESS_TYPE_DIRECT = "direct"
    ACCESS_TYPE_ADMIN = "admin"

    ACCESS_TYPE_CHOICES = [
        (ACCESS_TYPE_PACKAGE, "From package"),
        (ACCESS_TYPE_DIRECT, "Direct purchase"),
        (ACCESS_TYPE_ADMIN, "Admin grant"),
    ]

    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="training_accesses")
    training_program = models.ForeignKey("TrainingProgram", on_delete=models.PROTECT, related_name="granted_accesses")
    source_order = models.ForeignKey("PackageOrder", on_delete=models.SET_NULL, null=True, blank=True, related_name="training_accesses_from_order")
    access_type = models.CharField(max_length=50, choices=ACCESS_TYPE_CHOICES, default=ACCESS_TYPE_DIRECT)
    source_package_access = models.ForeignKey("UserPackageAccess", on_delete=models.SET_NULL, null=True, blank=True, related_name="training_accesses_from_package")

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ["-created_at"]
        constraints = [
            models.UniqueConstraint(
                fields = ["user", "training_program"],
                condition = Q(is_active=True),
                name = "unique_user_training",
            )
        ]
    
    def __str__(self):
        return f"{self.user} - {self.training_program}"
    
    
class UserServiceAccess(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="service_accesses")
    service = models.ForeignKey("Service", models.PROTECT, related_name="user_accesses")
    source_order = models.ForeignKey("PackageOrder", on_delete=models.CASCADE, related_name="service_accesses")
    source_package_access = models.ForeignKey("UserPackageAccess", on_delete=models.CASCADE, related_name="service_accesses_from_package")

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ["-created_at"]
        constraints = [
            models.UniqueConstraint(
                fields = ["user", "service"],
                condition = Q(is_active=True),
                name = "unique_active_user_service_access",
            )
        ]

    def __str__(self):
        return f"{self.user} - {self.service}"
    

# UPGRADE
class AutomationScenario(models.Model):
    service = models.ForeignKey("Service", on_delete=models.PROTECT, related_name="automation_scenarios")
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=110, unique=True)
    problem = models.TextField()
    solution = models.TextField()
    expected_result = models.TextField()
    estimated_hours = models.PositiveSmallIntegerField()
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str: 
        return self.title
    