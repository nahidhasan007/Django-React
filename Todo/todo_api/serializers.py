from .models import TodoList
from rest_framework import serializers

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoList
        fields = "__all__"