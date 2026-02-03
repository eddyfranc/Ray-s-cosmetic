from django.urls import path
from .views import (
    ProductListAPIView,
    FeaturedProductsAPIView,
    ProductsByCategoryAPIView,
    CategoryListAPIView,
)

urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/featured/', FeaturedProductsAPIView.as_view()),
    path('products/category/<slug:slug>/', ProductsByCategoryAPIView.as_view()),
    path('categories/', CategoryListAPIView.as_view()),
]
