from django.db import models
import datetime

class TodoList(models.Model):
    text = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text