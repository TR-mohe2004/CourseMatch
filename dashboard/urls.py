from django.urls import path
from . import views

app_name = 'dashboard'

urlpatterns = [
    path('', views.dashboard_view, name='dashboard'),
    path("equations/", views.equations_view, name="equations"),
    path('students/', views.students_view, name='students'),
    path('settings/', views.settings_view, name='settings'),               # ملف settings.html غير موجود حالياً
    path("specializations/", views.specializations_view, name="specializations"),
    path("import_data/", views.import_data_view, name="import_data"),
    path("equation_statistics/", views.equation_statistics_view, name="equation_statistics"),
    path('help/', views.help_view, name='help'),                           # ملف help.html غير موجود حالياً
    path('profile/', views.profile_view, name='profile'),                  # ملف profile.html غير موجود حالياً
    path("administration/", views.administration_view, name="administration"),
    path('logout/', views.logout_view, name='logout'),
    path('users/', views.users_view, name='users'),                        
    path('reports/', views.reports_view, name='reports'),
    path('messages/', views.messages_view, name='messages'),
    path('documents/', views.documents_view, name='documents'),
    path('transactions/', views.transactions_view, name='transactions'),
    path('manage_equations/', views.manage_equations_view, name='manage_equations'),
] 


