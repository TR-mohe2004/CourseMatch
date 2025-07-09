from django.shortcuts import render

def dashboard_view(request):
    # هنا يمكنك جلب البيانات من قاعدة البيانات أو إعدادها
    context = {
        'page_title': 'لوحة التحكم الرئيسية',
        'welcome_message': 'مرحباً بك في لوحة التحكم',
        'description': 'تحكم في جميع العمليات من مكان واحد'
    }
    return render(request, 'dashboard/dashboard.html', context)
