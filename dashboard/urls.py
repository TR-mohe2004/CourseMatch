from django.urls import path
from . import views

app_name = 'dashboard' # هذا السطر مهم لتحديد اسم التطبيق لـ URLs

urlpatterns = [
    path('', views.dashboard_view, name='dashboard'),
    # يمكنك إضافة المزيد من المسارات هنا لاحقًا
]
