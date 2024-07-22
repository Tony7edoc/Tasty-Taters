from django.shortcuts import render
from rest_framework import generics, filters
from .serializers import ItemSerializer
from django_filters.rest_framework import DjangoFilterBackend
from .models import Item

# Create your views here.

class ItemList(generics.ListAPIView):
    queryset = Item.objects.order_by('-created_at')
    serializer_class = ItemSerializer
    filter_backends = [DjangoFilterBackend,filters.SearchFilter]
    filterset_fields = ['category']
