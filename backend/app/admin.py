from django.contrib import admin
from .models import (
    TagCategory, Tag, Project, ProjectTag,
    About, SocialMedia, Experience, ExperienceTag,
    ContactMessage
)

@admin.register(TagCategory)
class TagCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'created_at')
    search_fields = ('name',)

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'color', 'created_at')
    list_filter = ('category',)
    search_fields = ('name',)

class ProjectTagInline(admin.TabularInline):
    model = ProjectTag
    extra = 1

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'project_url', 'created_at')
    search_fields = ('title',)
    inlines = [ProjectTagInline]

@admin.register(ProjectTag)
class ProjectTagAdmin(admin.ModelAdmin):
    list_display = ('project', 'tag')

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('name', 'surname', 'email', 'birth_country', 'residence_country')

@admin.register(SocialMedia)
class SocialMediaAdmin(admin.ModelAdmin):
    list_display = ('name', 'profile_url', 'icon', 'created_at')

class ExperienceTagInline(admin.TabularInline):
    model = ExperienceTag
    extra = 1

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'position', 'start_date', 'end_date', 'is_current', 'location')
    search_fields = ('company_name', 'position')
    inlines = [ExperienceTagInline]

@admin.register(ExperienceTag)
class ExperienceTagAdmin(admin.ModelAdmin):
    list_display = ('experience', 'tag')

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')
    search_fields = ('name', 'email')
    readonly_fields = ('created_at',)