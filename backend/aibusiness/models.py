from django.db import models
from django.utils.text import slugify


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
