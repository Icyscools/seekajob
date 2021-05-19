import baseAPI from './base';

export const getUserByUsername = async (username) => {
  return baseAPI.get(`/user/username/${username}`);
};

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

export const updateProfile = async (data) => {
  const formData = new FormData();
  // formData.append('workerId', data.workerId);
  // formData.append('jobId', data.jobId);
  // formData.append('resume', data.resume);
  return baseAPI.patch(`/user/`, formData);
};

export const updateCurrentProfile = async (data) => {
  const formData = new FormData();
  for (const key in data) {
    if (data[key]) formData.append(key, data[key]);
  }
  return baseAPI.patch(`/user/me`, formData);
};
