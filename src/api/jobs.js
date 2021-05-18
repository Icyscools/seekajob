import baseAPI from './base';

export const getJobs = () => {
  return baseAPI.get(`/job`);
};

export const getJobById = (id) => {
  return baseAPI.get(`/job/${id}`);
};
