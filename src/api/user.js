import baseAPI from './base';

export const getCurrentUser = async () => {
  return baseAPI.get(`/user/me`);
};

export const getCurrentUserWithToken = async (token) => {
  return baseAPI.get(`/user/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
