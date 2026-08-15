from django.urls import path
from .views import SlotMachineListCreateView, ActivityListCreateView

urlpatterns = [
    path("", SlotMachineListCreateView.as_view()),
    path("<int:slot_machine>/activities/", ActivityListCreateView.as_view())
]
