from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

# All products
class ProductListAPIView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


# Featured products (Home page)
class FeaturedProductsAPIView(ListAPIView):
    queryset = Product.objects.filter(is_featured=True)
    serializer_class = ProductSerializer


# Products by category
class ProductsByCategoryAPIView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        slug = self.kwargs['slug']
        return Product.objects.filter(category__slug=slug)


# Categories
class CategoryListAPIView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
