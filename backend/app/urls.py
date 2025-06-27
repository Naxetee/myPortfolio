from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    TagCategoryViewSet, TagViewSet, ProjectViewSet, AboutViewSet,
    SocialMediaViewSet, ExperienceViewSet, ContactMessageViewSet
)

router = DefaultRouter()
router.register(r'tag-categories', TagCategoryViewSet)
router.register(r'tags', TagViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'about', AboutViewSet)
router.register(r'social-media', SocialMediaViewSet)
router.register(r'experience', ExperienceViewSet)
router.register(r'contact-messages', ContactMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]