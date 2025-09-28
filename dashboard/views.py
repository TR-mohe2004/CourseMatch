from django.shortcuts import render, redirect
from django.contrib.auth import logout

def dashboard_view(request):
    return render(request, 'dashboard/dashboard.html')

def equations_view(request):
    return render(request, 'dashboard/equations.html')

def students_view(request):
    return render(request, 'dashboard/students.html')

def settings_view(request):
    # ملف settings.html غير موجود حالياً — إذا احتجته أنشئه أو احذف هذا المسار من urls
    return render(request, 'dashboard/settings.html')

def specializations_view(request):
    return render(request, 'dashboard/specializations.html')

def import_data_view(request):
    return render(request, 'dashboard/import_data.html')

def equation_statistics_view(request):
    return render(request, 'dashboard/equation_statistics.html')

def help_view(request):
    # ملف help.html غير موجود حالياً — إذا احتجته أنشئه أو احذف هذا المسار من urls
    return render(request, 'dashboard/help.html')

def profile_view(request):
    # ملف profile.html غير موجود حالياً — إذا احتجته أنشئه أو احذف هذا المسار من urls
    return render(request, 'dashboard/profile.html')

def administration_view(request):
    return render(request, 'dashboard/administration.html')

def reports_view(request):
    return render(request, 'dashboard/reports.html')

def users_view(request):
    return render(request, 'dashboard/users.html')

def logout_view(request):
    logout(request)
    return redirect('login')  # غير اسم 'login' حسب اسم صفحة تسجيل الدخول عندك

def messages_view(request):
    return render(request, 'dashboard/messages.html')

def documents_view(request):
    return render(request, 'dashboard/documents.html')  # ملف documents.html يجب أن يكون موجوداً
 
def transactions_view(request):
    return render(request, 'dashboard/transactions.html')

def manage_equations_view(request):
    return render(request, 'dashboard/manage_equations.html')
