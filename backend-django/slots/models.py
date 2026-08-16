from django.db import models
from django.conf import settings

class SlotMachine(models.Model):
    name = models.CharField(max_length=50)
    bio = models.TextField(max_length=200)
    spins = models.IntegerField()
    creator = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Activity(models.Model):
    name = models.CharField(max_length=50)
    acceptance = models.PositiveIntegerField()
    rejection = models.PositiveIntegerField()
    slot_machine = models.ForeignKey(SlotMachine, on_delete=models.CASCADE)

    def __str__(self):
        return self.name