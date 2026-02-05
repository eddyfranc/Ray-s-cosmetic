# from rest_framework.permissions import BasePermission


# class IsAdmin(BasePermission):
#     def has_permission(self, request, view):
#         return (
#             request.user.is_authenticated and
#             request.user.is_admin
#         )
    
# class IsStaff(BasePermission):
#     def has_permission(self, request, view):
#         return (
#             request.user.is_authenticated and
#             request.user.is_staff
#         )
    
# class IsCustomer(BasePermission):
#     def has_permission(self, request, view):
#         return (
#             request.user.is_authenticated and
#             request.user.is_customer
#         )


from rest_framework.permissions import BasePermission


class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        return bool(
            request.user
            and request.user.is_authenticated
            and request.user.is_admin
        )


class IsStaff(BasePermission):
    def has_permission(self, request, view):
        return bool(
            request.user
            and request.user.is_authenticated
            and request.user.is_staff
        )


class IsCustomer(BasePermission):
    def has_permission(self, request, view):
        return bool(
            request.user
            and request.user.is_authenticated
            and request.user.is_customer
        )


class IsAdminOrStaff(BasePermission):
    def has_permission(self, request, view):
        return bool(
            request.user
            and request.user.is_authenticated
            and (request.user.is_admin or request.user.is_staff)
        )


class IsOwner(BasePermission):
    """
    Object-level permission:
    user can only access their own object
    """
    def has_object_permission(self, request, view, obj):
        return obj == request.user


