from django.shortcuts import render
from .models import TodoList
from .serializers import TodoSerializer
from rest_framework.viewsets import ModelViewSet

class TodoView(ModelViewSet):
    queryset = TodoList.objects.all().order_by('-id')
    serializer_class = TodoSerializer