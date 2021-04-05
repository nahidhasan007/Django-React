from django.shortcuts import render
from rest_framework import viewsets
from .models import Post, Profile
from .serializers import PostSerializer


class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by("-id")
    serializer_class = PostSerializer
