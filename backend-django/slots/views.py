from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import SlotMachine, Activity
from .serializers import SlotMachineSerializer, ActivitySerializer

#SLOT MACHINE VIEWS
class SlotMachineListCreateView(ListCreateAPIView):
    serializer_class = SlotMachineSerializer
    queryset = SlotMachine.objects.all()

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsAuthenticated()]
        else:
            return [AllowAny()]

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)

#ACTIVITY VIEWS
class ActivityListCreateView(ListCreateAPIView):
    serializer_class = ActivitySerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsAuthenticated()]
        else:
            return [AllowAny()]
        
    def get_queryset(self):
        slot_machine_id = self.kwargs["slot_machine_id"]

        return Activity.objects.filter(
            slot_machine_id=slot_machine_id
        )

    def perform_create(self, serializer):
        serializer.save(
            slot_machine_id=self.kwargs["slot_machine_id"]
        )

    