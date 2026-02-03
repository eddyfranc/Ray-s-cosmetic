from rest_framework import serializers
from .models import Product, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'price',
            'old_price',
            'category',
            'image',
            'description',
            'is_sold_out',
            'is_featured',
        ]
