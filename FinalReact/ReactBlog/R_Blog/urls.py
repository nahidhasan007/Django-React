from django.urls import path,include
from .views import PostView
from rest_framework import routers

route = routers.DefaultRouter()
route.register("",PostView,basename="postview")

urlpatterns = [
    path('api/',include(route.urls)),
]



