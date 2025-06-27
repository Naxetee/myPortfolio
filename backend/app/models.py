from django.db import models
from django.contrib.postgres.fields import ArrayField


class TagCategory(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Tag Categories"

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    url = models.URLField(max_length=255, blank=True, null=True)
    category = models.ForeignKey(TagCategory, on_delete=models.CASCADE, related_name='tags')
    color = models.CharField(max_length=7, blank=True, null=True, help_text="Hex color code (e.g., #FF5733)")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image_urls = ArrayField(
        models.URLField(max_length=255),
        blank=True,
        default=list,
        help_text="Array of image URLs"
    )
    project_url = models.URLField(max_length=255, blank=True, null=True)
    tags = models.ManyToManyField(Tag, through='ProjectTag', related_name='projects')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class ProjectTag(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('project', 'tag')

    def __str__(self):
        return f"{self.project.title} - {self.tag.name}"


class About(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    main_skills = models.CharField(max_length=255, blank=True, null=True)
    profile_img = models.URLField(max_length=255, blank=True, null=True)
    about_me = models.TextField(blank=True, null=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    birth_country = models.CharField(max_length=100, blank=True, null=True)
    residence_country = models.CharField(max_length=100, blank=True, null=True)
    cv_file_url = models.URLField(max_length=255, blank=True, null=True)

    class Meta:
        verbose_name_plural = "About"

    def __str__(self):
        return f"{self.name} {self.surname}"


class SocialMedia(models.Model):
    name = models.CharField(max_length=50)
    profile_url = models.URLField(max_length=255)
    icon = models.CharField(max_length=255, blank=True, null=True, help_text="Icon URL or icon name")
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Social Media"

    def __str__(self):
        return self.name


class Experience(models.Model):
    company_name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True, help_text="Leave blank if current job")
    location = models.CharField(max_length=255, blank=True, null=True)
    is_current = models.BooleanField(default=False)
    tags = models.ManyToManyField(Tag, through='ExperienceTag', related_name='experiences')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-start_date']  # Most recent first

    def __str__(self):
        return f"{self.position} at {self.company_name}"


class ExperienceTag(models.Model):
    experience = models.ForeignKey(Experience, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('experience', 'tag')

    def __str__(self):
        return f"{self.experience.position} - {self.tag.name}"


class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']  # Most recent first

    def __str__(self):
        return f"Message from {self.name} ({self.email})"
