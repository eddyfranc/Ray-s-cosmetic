# from rest_framework import serializers
# from django.contrib.auth.models import User
# from django.contrib.auth.password_validation import validate_password

# class RegisterSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    
#     class Meta:
#         model = User
#         fields = ('username', 'email', 'password', 'first_name', 'last_name')

#     def create(self, validated_data):
#         user = User.objects.create(
#             username=validated_data['username'],
#             email=validated_data['email'],
#             first_name=validated_data.get('first_name', ''),
#             last_name=validated_data.get('last_name', '')
#         )
#         user.set_password(validated_data['password'])
#         user.save()
#         return user


from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import authenticate

User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField( write_only=True, required=True, validators=[validate_password]
    )

    class Meta:
        model = User
        fields = ('id','email', 'password')

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            is_customer=True,
            is_active=True,

        )
        return user
    
   

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        # Authenticate user using email and password
        user = authenticate(username=data['email'], password=data['password'])
        if user and user.is_active:
            data['user'] = user
            return data
        raise serializers.ValidationError("Invalid email or password")


class ForgotPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        if not User.objects.filter(email=value).exists():
            raise serializers.ValidationError("No account found with this email address.")
        return value


class ResetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()
    reset_code = serializers.CharField(max_length=6)
    new_password = serializers.CharField(write_only=True, validators=[validate_password])

    def validate(self, data):
        # Here you would validate the reset code (e.g., check against a stored code)
        # For simplicity, we'll assume the code is valid if user exists
        try:
            user = User.objects.get(email=data['email'])
            data['user'] = user
        except User.DoesNotExist:
            raise serializers.ValidationError("Invalid email or reset code.")
        return data


