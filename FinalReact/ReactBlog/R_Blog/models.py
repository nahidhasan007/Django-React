from django.db import models
from django.contrib.auth.models import User
import datetime

class Post(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to="pics/",blank=True,null=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    image = models.ImageField(upload_to="profile/",blank=True,null=True)
    def __str__(self):
        self.user.username



