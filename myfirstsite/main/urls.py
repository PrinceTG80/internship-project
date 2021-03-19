"""myfirstsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('reg/', views.reg, name='reg'), #http://127.0.0.1:8000/data/reg

    path('log_in/', views.log_in, name='login'),
    path('cart_add/', views.cart_add, name='cartadd'),
    path('cart_read/', views.cart_read, name='cartread'),
    path('read_profile/', views.read_profile, name='cart'),


]
