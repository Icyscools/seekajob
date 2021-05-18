import baseAPI from './base';

export const getJobs = () => {
  return baseAPI.get(`/job`);
};

export const getJobsByCurrentCompany = () => {
  return baseAPI.get(`/job/me`);
};

export const getJobById = (id) => {
  return baseAPI.get(`/job/${id}`);
};

export const createJob = (data) => {
  return baseAPI.post(`/job`, data);
};

export const updateJob = (data) => {
  return baseAPI.patch(`/job`, data);
};
