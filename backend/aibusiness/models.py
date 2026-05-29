from django.db import models
from django.utils.text import slugify


class Service(models.Model):
    title = models.CharField(max_length=120, blank=False)
    slug = models.SlugField("aibusiness", max_length=140, unique=True, blank=True)
    short_description = models.CharField(max_lenght=255, blank = False)
    full_description = models.TextField(blank=False)
    icon_name = models.CharField(max_length=80,blank=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DataTimeField(auto_now_add=True)
    



