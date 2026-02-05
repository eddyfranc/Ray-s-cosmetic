import api from "./axios";

export const registerUser = async (email, password) => {
  const response = await api.post("accounts/register/", {
    email,
    password,
  });
  return response.data;
};

// Login user
export const loginUser = async (email, password) => {
  const response = await api.post("accounts/login/", { email, password });
  return response.data; // usually returns a token or user info
};

// Forgot password
export const forgotPassword = async (email) => {
  const response = await api.post("accounts/forgot-password/", { email });
  return response.data;
};

// Reset password
export const resetPassword = async (email, resetCode, newPassword) => {
  const response = await api.post("accounts/reset-password/", {
    email,
    reset_code: resetCode,
    new_password: newPassword,
  });
  return response.data;
};
