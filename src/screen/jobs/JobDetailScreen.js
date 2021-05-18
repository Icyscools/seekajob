import React, { useState, useEffect } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { LinkContainer } from 'react-router-bootstrap';
import { Container } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import LayoutWithNavTab from '../../layouts/LayoutWithNavTab';
import { useParams } from 'react-router-dom';
import { getJobById } from '../../api/jobs';

const JobDetailScreen = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    getJobById(id).then((res) => {
      console.log(res.data);
      setJob(res.data);
    });
  }, []);

  return (
    <LayoutWithNavTab>
      <Container>
        <Button variant="outlined" className="my-3">
          Edit this job
        </Button>
        <div className="mb-3 border-bottom pb-2">
          <h1>{job?.title}</h1>
          <b>{job?.company.company_name}</b>
        </div>
        <div>
          <h3>Job Description</h3>
          <p>{job?.description}</p>
        </div>
        <div>
          <h3>Location</h3>
          <p>{job?.location ?? '-'}</p>
        </div>

        <div>
          <h3>Salary</h3>
          <p>{job?.salary ? `${job?.salary} THB` : '-'}</p>
        </div>

        <div>
          <h3>Welfares</h3>
          <p>{job?.welfare ?? '-'}</p>
        </div>

        <Button variant="outlined">Apply Now</Button>
      </Container>
    </LayoutWithNavTab>
  );
};

export default JobDetailScreen;
