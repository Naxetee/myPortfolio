
from rest_framework import viewsets
from .models import (
    TagCategory, Tag, Project, About, SocialMedia, Experience, ContactMessage
)
from .serializers import (
    TagCategorySerializer, TagSerializer, ProjectSerializer,
    AboutSerializer, SocialMediaSerializer, ExperienceSerializer,
    ContactMessageSerializer
)

class TagCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TagCategory.objects.all()
    serializer_class = TagCategorySerializer

class TagViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class AboutViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class SocialMediaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SocialMedia.objects.all()
    serializer_class = SocialMediaSerializer

class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    http_method_names = ['get', 'post', 'head', 'options']