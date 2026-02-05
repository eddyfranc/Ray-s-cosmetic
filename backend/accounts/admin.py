# accounts/admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User  # your custom User model

class UserAdmin(BaseUserAdmin):
    ordering = ['email']  # use email instead of username
    list_display = ['email', 'is_staff', 'is_superuser']  # show only valid fields

    # Fields for viewing/editing a user
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

    # Fields for creating a new user
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )

    search_fields = ('email',)
    filter_horizontal = ('groups', 'user_permissions',)

# Register the User model with the custom admin
admin.site.register(User, UserAdmin)
