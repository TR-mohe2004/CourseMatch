from django.contrib import admin
from django.urls import path, include  # تم إضافة include هنا

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('dashboard.urls')),  # تم إضافة هذا السطر
]
