from django.urls import path,include
from .views import TodoView
from rest_framework import routers

route = routers.DefaultRouter()
route.register('',TodoView,basename="todoview")

urlpatterns = [
    path('',include(route.urls)),
]
