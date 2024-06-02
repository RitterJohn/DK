from django.urls import path
from . import views
# from django.contrib.auth import logout
# from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('', views.home, name = "home"),
    path("signup/", views.SignUp.as_view(), name="signup"),
    # path("logout/", views.logout, name="login"),
]