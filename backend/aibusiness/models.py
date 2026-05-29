from django.db import models
from django.utils.text import slugify


class Service(models.Model):
    title = models.CharField(max_length=120, blank=False)
    slug = models.SlugField(max_length=140, unique=True, blank=True)
    short_description = models.CharField(max_length=255, blank = False)
    full_description = models.TextField(blank=False)
    icon_name = models.CharField(max_length=80,blank=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    class Meta:
        ordering = ['order','title']


    def save(self,*args,**kwargs):
        if not self.slug:
           self.slug = slugify(self.title)
        super().save(*args,**kwargs)


    def __str__(self):
        return self.title

