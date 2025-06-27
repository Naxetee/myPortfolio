from rest_framework import serializers
from .models import (
    TagCategory, Tag, Project, ProjectTag,
    About, SocialMedia, Experience, ExperienceTag,
    ContactMessage
)

class TagCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TagCategory
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    category = TagCategorySerializer(read_only=True)
    class Meta:
        model = Tag
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    class Meta:
        model = Project
        fields = '__all__'

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'

class SocialMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMedia
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    class Meta:
        model = Experience
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'