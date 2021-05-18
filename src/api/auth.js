import baseAPI from './base';

export const login = async (data) => {
  return baseAPI.post(`/auth/login`, data);
};

export const register = async (data) => {
  return baseAPI.post(`/auth/register`, data);
};

export const confirmConfirmationCode = async (data) => {
  return baseAPI.post(`/auth/confirm`, data);
};

export const resendConfirmationCode = async (data) => {
  return baseAPI.post(`/auth/resend`, data);
};
