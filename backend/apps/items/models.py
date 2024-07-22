from django.db import models
from config.constants import *
from cloudinary.models import CloudinaryField

# Create your models here.

class Item(models.Model):
    class Meta(object):
        db_table = 'Item'

    
    name = models.CharField(
        'Name', blank=False, null=False, max_length=120
    )

    category = models.CharField(
        'Category', blank=False, null=False, default='others', choices=CATEGORIES, max_length=50
    )

    price = models.DecimalField(
        'Price', blank=False, null=False, max_digits=11, decimal_places=2
    )
    image= CloudinaryField( 
        'Image', blank=True, null=True, 
    )
    created_at=models.DateTimeField(
        'Creation Date', blank=True, auto_now_add=True
    )
    updated_at=models.DateTimeField(
        'Updated Date', blank=True, auto_now_add=True
    )