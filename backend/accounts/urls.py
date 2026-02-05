# accounts/urls.py
# from django.urls import path
# from .views import RegisterView
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# urlpatterns = [
#     path('register/', RegisterView.as_view(), name='register'),
#     path('login/', TokenObtainPairView.as_view(), name='login'),
#     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

# ]



from django.urls import path
from .views import (
    RegisterView,
    CustomerProfileView,
    StaffDashboardView,
    AdminDashboardView,
    LoginView
)


urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"), 
    path("me/", CustomerProfileView.as_view(), name="me"),
    path("staff/dashboard/", StaffDashboardView.as_view(), name="staff-dashboard"),
    path("admin/dashboard/", AdminDashboardView.as_view(), name="admin-dashboard"),
]





    


