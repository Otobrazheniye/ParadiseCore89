from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.text import slugify


class User(AbstractUser):
    username = None

    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=150, blank=True)
    company = models.CharField(max_length=150, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email




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
    

# Logical chain 
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

    customer_name = models.CharField(max_length=100)
    customer_email = models.EmailField(max_length=255)
    company = models.CharField(max_length=255, blank=True)
    message = models.TextField(blank=True)

    package_plan = models.ForeignKey("PackagePlan", on_delete=models.PROTECT, related_name="orders")
    selected_services = models.ManyToManyField("Service", blank=True, related_name="package_orders")

    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default=STATUS_NEW)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.customer_name} - {self.package_plan.title}"

