# myPortfolio

This project is a modern, full-stack personal portfolio web application designed to showcase my skills, projects, and professional background. The application features a Node.js and TypeScript frontend, a Python backend, and a SQL database for robust data management.

## Backend Notes

### PostgreSQL Connection

The backend uses PostgreSQL as its database management system. Ensure PostgreSQL is installed and running on your machine.

> **Note:** You need to manually start PostgreSQL before running the application. Use the following command:
>
> ```bash
> pg_ctl start -D "C:\Program Files\PostgreSQL\17\data"
> ```

Next, connect to the PostgreSQL database in your backend code. Replace the connection details with your own.

```bash
psql -h <host> -p <port> -U postgres
```

### PostgreSQL Setup

1. **Create a Database:**  
    Run the following command to create a new database:

    ```sql
    CREATE DATABASE myportfolio_db;
    ```

2. **Create the Database Schema:**  
    Create a file named `schema.sql` in your backend directory to define your database tables. For example:

    To apply the schema, run:

    ```bash
    psql -U postgres -d myportfolio_db -f schema.sql
    ```

3. **Create a User for Django:**  
    Create a PostgreSQL user for Django to connect to the database. Run the following commands in the PostgreSQL terminal:

    ```sql
    CREATE USER django WITH PASSWORD 'django';

    -- Grant all privileges on the myportfolio_db database
    GRANT ALL PRIVILEGES ON DATABASE myportfolio_db TO django;

    -- Connect to the myportfolio_db database
    \c myportfolio_db

    -- Grant privileges on all existing tables
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO django;

    -- Grant privileges on all sequences (for SERIAL/AUTO_INCREMENT)
    GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO django;

    -- Allow creating tables in the public schema
    GRANT CREATE ON SCHEMA public TO django;

    -- Set default privileges for future tables and sequences
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO django;
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO django;
    ```

### Django Setup

1. **Create a Virtual Environment:**  
    Navigate to the backend directory and create a virtual environment:

    ```bash
    python3 -m venv venv
    ```

2. **Activate the Virtual Environment:**  
    Activate the virtual environment:

    ```bash
    venv\Scripts\activate
    ```

3. **Install Dependencies:**  
    Install the required Python packages:

    ```bash
    pip install django psycopg2-binary
    ```

    - `django`: A high-level Python web framework.
    - `psycopg2-binary`: PostgreSQL adapter for Python.

4. **Create a Django Project:**  
    Start a new Django project:

    ```bash
    django-admin startproject myportfolio_backend .
    ```

5. **Run Migrations:**  
    Apply migrations to create the necessary database tables:

    ```bash
    python manage.py migrate
    ```

    Then, create your app:

    ```bash
    python manage.py startapp app
    ```

6. **Add the Application to the Project:**  
    Open your Django project's `settings.py` and add `'app'` to the `INSTALLED_APPS` list:

    ```python
    INSTALLED_APPS = [
         # other default Django apps,
         'app',
    ]
    ```

7. **Modify `models.py` and `admin.py`:**  
    In your app folder (`app`), edit `models.py` to define your database models. For example:

    ```python
    from django.db import models

    class Project(models.Model):
         name = models.CharField(max_length=100)
         description = models.TextField()
         url = models.URLField(blank=True)

         def __str__(self):
              return self.name
    ```

    Then, register the model in `admin.py`:

    ```python
    from django.contrib import admin
    from .models import Project

    admin.site.register(Project)
    ```

8. **Create a Superuser:**  
    Run the following command to create an admin user:

    ```bash
    python manage.py createsuperuser
    ```

    Follow the prompts to set a username, email, and password.

9. **Start the Development Server:**  
    Start Django's local development server:

    ```bash
    python manage.py runserver
    ```

    Access the admin panel at [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/) and log in with the superuser credentials.

### Django Rest Framework (DRF)

To create a RESTful API for your Django application, you can use Django Rest Framework (DRF). Follow these steps:

1. **Install DRF:**  
   Install Django Rest Framework using pip:

   ```bash
   pip install djangorestframework
   ```

2. **Add DRF to Installed Apps:**  
   Open your `settings.py` file and add `'rest_framework'` to the `INSTALLED_APPS` list:

   ```python
    INSTALLED_APPS = [
          # other default Django apps,
          'rest_framework',
          'app',  # your app
    ]
    ```

3. **Create Serializers:**  
   Create a new file named `serializers.py` in your app directory (`app`) and define serializers for your models. For example:

   ```python
    from rest_framework import serializers
    from .models import Project
    class ProjectSerializer(serializers.ModelSerializer):
        class Meta:
            model = Project
            fields = '__all___'
    ```

4. **Create API Views:**
    In your app directory, create a new file named `views.py` and define API views using DRF's generic views or viewsets. For example:

    ```python
     from rest_framework import viewsets
     from .models import Project
     from .serializers import ProjectSerializer
    
     class ProjectViewSet(viewsets.ModelViewSet):
          queryset = Project.objects.all()
          serializer_class = ProjectSerializer
     ```

5. **Configure URLs:**
   In your app directory, create a new file named `urls.py` and define the URL
    patterns for your API views. For example:

    ```python
     from django.urls import path, include
     from rest_framework.routers import DefaultRouter
     from .views import ProjectViewSet
    
     router = DefaultRouter()
     router.register(r'projects', ProjectViewSet)
    
     urlpatterns = [
          path('', include(router.urls)),
     ]
     ```

6. **Include App URLs in Project URLs:**
   Open your project's `urls.py` file and include the app's URLs:

   ```python
    from django.contrib import admin
    from django.urls import path, include
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('api/', include('app.urls')),  # Include your app's URLs
    ]
    ```

7. **Test the API:**
   Start the Django development server and test your API. For example, you can access the projects API at
   [http://localhost:8000/api/projects/](http://localhost:8000/api/projects/).

### Django CORS

To allow cross-origin requests to your Django API, you can use the `django-cors-headers` package. Follow these steps:

1. **Install django-cors-headers:**
   Install the package using pip:

   ```bash
   pip install django-cors-headers
   ```

2. **Add to Installed Apps:**
   Open your `settings.py` file and add `'corsheaders'` to the `INSTALLED_APPS` list:

   ```python
    INSTALLED_APPS = [
        # other default Django apps,
        'corsheaders',
        'rest_framework',
        'app', 
    ]
    ```

3. **Add Middleware:**
    Add `CorsMiddleware` to the `MIDDLEWARE` list in your `settings.py` file, ensuring it is placed before `CommonMiddleware`:

    ```python
     MIDDLEWARE = [
          'corsheaders.middleware.CorsMiddleware',
          'django.middleware.common.CommonMiddleware',
          # other middleware,
     ]
     ```

4. **Configure CORS Settings:**
    Add the following settings to your `settings.py` file to allow requests from specific origins:

    ```python
     CORS_ALLOWED_ORIGINS = [
          "http://localhost:3000",  # React app running on localhost
     ]
     ```

     If you want to allow all origins (not recommended for production), you can use:

    ```python
        CORS_ALLOW_ALL_ORIGINS = True
    ```

## Frontend Notes
