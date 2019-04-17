from django.urls import path
from cos_movie import views

urlpatterns = [
    path('mobile/', views.MobileHomeView.as_view(), name='mobile_home'),
    path('desktop/', views.DesktopHomeView.as_view(), name='desktop_home'),
]
