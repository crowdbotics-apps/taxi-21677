from django.contrib import admin
from .models import Category, Country, Item, ItemVariant, Review

admin.site.register(Category)
admin.site.register(Review)
admin.site.register(Country)
admin.site.register(Item)
admin.site.register(ItemVariant)

# Register your models here.
