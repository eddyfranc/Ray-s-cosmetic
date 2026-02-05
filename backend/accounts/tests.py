# Create your tests here.
# from django.test import TestCase
# from accounts.models import User

# class UserModelTest(TestCase):
#     def test_create_user(self):
#         user = User.objects.create_user(email='test@example.com', password='password123')
#         self.assertEqual(user.email, 'test@example.com')
#         self.assertFalse(user.is_staff)
#         self.assertFalse(user.is_superuser)
#         self.assertTrue(user.check_password('password123'))

#     def test_create_superuser(self):
#         superuser = User.objects.create_superuser(email='admin@example.com', password='admin123')
#         self.assertTrue(superuser.is_staff)
#         self.assertTrue(superuser.is_superuser)




from django.test import TestCase, RequestFactory
from accounts.models import User
from accounts.permissions import IsAdmin, IsStaff, IsCustomer, IsAdminOrStaff, IsOwner


class PermissionsTestCase(TestCase):
    def setUp(self):
        self.factory = RequestFactory()

        # Admin user
        self.admin_user = User.objects.create_superuser(
            email="admin@example.com",
            password="admin123",
            is_customer=False  # must be False for admin
        )

        # Staff user
        self.staff_user = User.objects.create_user(
            email="staff@example.com",
            password="staff123",
            is_staff=True,
            is_customer=False  # must be False for staff
        )

        # Customer user
        self.customer_user = User.objects.create_user(
            email="customer@example.com",
            password="customer123",
            is_customer=True
        )

    def test_is_admin_permission(self):
        permission = IsAdmin()

        admin_request = self.factory.get("/fake-url/")
        admin_request.user = self.admin_user

        staff_request = self.factory.get("/fake-url/")
        staff_request.user = self.staff_user

        customer_request = self.factory.get("/fake-url/")
        customer_request.user = self.customer_user

        self.assertTrue(permission.has_permission(admin_request, None))     # admin → True
        self.assertFalse(permission.has_permission(staff_request, None))    # staff → False
        self.assertFalse(permission.has_permission(customer_request, None)) # customer → False

    def test_is_staff_permission(self):
        permission = IsStaff()

        staff_request = self.factory.get("/fake-url/")
        staff_request.user = self.staff_user

        customer_request = self.factory.get("/fake-url/")
        customer_request.user = self.customer_user

        self.assertTrue(permission.has_permission(staff_request, None))      # staff → True
        self.assertFalse(permission.has_permission(customer_request, None))  # customer → False

    def test_is_customer_permission(self):
        permission = IsCustomer()

        customer_request = self.factory.get("/fake-url/")
        customer_request.user = self.customer_user

        staff_request = self.factory.get("/fake-url/")
        staff_request.user = self.staff_user

        admin_request = self.factory.get("/fake-url/")
        admin_request.user = self.admin_user

        self.assertTrue(permission.has_permission(customer_request, None))   # customer → True
        self.assertFalse(permission.has_permission(staff_request, None))     # staff → False
        self.assertFalse(permission.has_permission(admin_request, None))     # admin → False

    def test_is_admin_or_staff_permission(self):
        permission = IsAdminOrStaff()

        admin_request = self.factory.get("/fake-url/")
        admin_request.user = self.admin_user

        staff_request = self.factory.get("/fake-url/")
        staff_request.user = self.staff_user

        customer_request = self.factory.get("/fake-url/")
        customer_request.user = self.customer_user

        self.assertTrue(permission.has_permission(admin_request, None))    # admin → True
        self.assertTrue(permission.has_permission(staff_request, None))    # staff → True
        self.assertFalse(permission.has_permission(customer_request, None)) # customer → False

    def test_is_owner_permission(self):
        permission = IsOwner()

        request = self.factory.get("/fake-url/")
        request.user = self.customer_user

        # User should be owner of themselves → True
        self.assertTrue(permission.has_object_permission(request, None, self.customer_user))

        # User should NOT be owner of another user → False
        self.assertFalse(permission.has_object_permission(request, None, self.staff_user))
