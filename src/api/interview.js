import baseAPI from './base';

export const getInterviews = () => {
  return baseAPI.get(`/interview`);
};

export const getInterviewById = (id) => {
  return baseAPI.get(`/interview/${id}`);
};

export const getInterviewsByCurrentUser = () => {
  return baseAPI.get(`/interview/me`);
};

export const createInterview = (data) => {
  return baseAPI.post(`/interview`, data);
};

export const updateInterview = (data) => {
  return baseAPI.patch(`/interview`, data);
};
