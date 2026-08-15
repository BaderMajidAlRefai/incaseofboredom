from rest_framework import serializers

from .models import SlotMachine, Activity

class SlotMachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = SlotMachine
        fields = [
            "id",
            "name",
            "bio",
            "spins",
            "creator",
        ]
        read_only_fields = [
            "id",
            "creator"
        ]

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = [
            "id",
            "name",
            "acceptance",
            "rejection",
            "slot_machine",
        ]
        read_only_fields = [
            "id",
        ]


        