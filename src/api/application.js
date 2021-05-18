import baseAPI from './base';

export const getApplications = () => {
  return baseAPI.get(`/application`);
};

export const getApplicationsByCurrentUser = () => {
  return baseAPI.get(`/application/me`);
};

export const applyJob = (data) => {
  let formData = new FormData();
  formData.append('workerId', data.workerId);
  formData.append('jobId', data.jobId);
  formData.append('resume', data.resume);
  return baseAPI.post(`/application`, formData);
};
