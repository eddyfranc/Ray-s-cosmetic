# from django.shortcuts import render
# from rest_framework import generics
# from .serializers import RegisterSerializer
# from rest_framework.permissions import AllowAny

# # JWT Login
# from rest_framework_simplejwt.views import TokenObtainPairView

# class RegisterView(generics.CreateAPIView):
#     serializer_class = RegisterSerializer
#     permission_classes = [AllowAny]

# # Login uses built-in TokenObtainPairView from SimpleJWT


# from rest_framework import generics
# from rest_framework.permissions import AllowAny, IsAuthenticated
# from rest_framework.response import Response

# from django.contrib.auth import get_user_model

# from .serializers import RegisterSerializer
# from .permissions import IsAdmin, IsStaff, IsCustomer

# # JWT Login
# from rest_framework_simplejwt.views import TokenObtainPairView

# User = get_user_model()


# class RegisterView(generics.CreateAPIView):
#     serializer_class = RegisterSerializer
#     permission_classes = [AllowAny]


# class CustomerProfileView(generics.RetrieveAPIView):
#     """
#     Logged-in customer can view their own profile
#     """
#     permission_classes = [IsAuthenticated, IsCustomer]

#     def get_object(self):
#         return self.request.user


# class StaffDashboardView(generics.GenericAPIView):
#     """
#     Staff-only endpoint
#     """
#     permission_classes = [IsAuthenticated, IsStaff]

#     def get(self, request):
#         return Response({"message": "Welcome Staff"})


# class AdminDashboardView(generics.GenericAPIView):
#     """
#     Admin-only endpoint
#     """
#     permission_classes = [IsAuthenticated, IsAdmin]

#     def get(self, request):
#         return Response({"message": "Welcome Admin"})


from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .serializers import RegisterSerializer
from .permissions import (
    IsAdmin,
    IsStaff,
    IsCustomer,
    IsOwner,
)


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]


class CustomerProfileView(generics.RetrieveAPIView):
    """
    Logged-in customer can view their own profile
    """
    permission_classes = [IsAuthenticated, IsCustomer, IsOwner]

    def get_object(self):
        return self.request.user


class StaffDashboardView(generics.GenericAPIView):
    """
    Staff-only endpoint
    """
    permission_classes = [IsAuthenticated, IsStaff]

    def get(self, request):
        return Response({"message": "Welcome Staff"})


class AdminDashboardView(generics.GenericAPIView):
    """
    Admin-only endpoint
    """
    permission_classes = [IsAuthenticated, IsAdmin]

    def get(self, request):
        return Response({"message": "Welcome Admin"})
