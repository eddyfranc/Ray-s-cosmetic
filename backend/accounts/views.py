from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import LoginSerializer, ForgotPasswordSerializer, ResetPasswordSerializer
from rest_framework.authtoken.models import Token  # optional token auth
from django.core.mail import send_mail
from django.conf import settings
import random
import string


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



class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            
            # Optional: create a token for the user
            token, _ = Token.objects.get_or_create(user=user)

            return Response({
                "token": token.key,
                "user": {
                    "id": user.id,
                    "email": user.email
                }
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ForgotPasswordView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = ForgotPasswordSerializer(data=request.data)
        if serializer.is_valid():
            # In a real implementation, send an email with reset code
            # For now, just return success
            return Response({"message": "If an account with this email exists, a reset code has been sent."})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ResetPasswordView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = ResetPasswordSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            user.set_password(serializer.validated_data['new_password'])
            user.save()
            return Response({"message": "Password has been reset successfully."})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
