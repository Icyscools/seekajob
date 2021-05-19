import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import LayoutWithNavTab from '../../layouts/LayoutWithNavTab';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getJobById } from '../../api/jobs';

const JobDetailScreen = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [auth, setAuth] = useState();
  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const auth = await authSelector;
      setAuth(auth);
      getJobById(id).then((res) => {
        setJob(res.data);
      });
    };
    fetchAuthUser();
  }, [authSelector]);

  return (
    <LayoutWithNavTab>
      <Container className="my-3">
        {auth?.user?.company?.id === job?.company?.id ? (
          <LinkContainer to={`/job/${id}/edit`}>
            <Button variant="outlined" className="my-3">
              Edit this job
            </Button>
          </LinkContainer>
        ) : (
          <></>
        )}

        <div className="mb-3 border-bottom pb-2">
          <h1>{job?.title}</h1>
          <b>{job?.company?.company_name}</b>
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

        {auth?.user?.role === 'worker' ? (
          <LinkContainer to={`/job/${id}/apply`}>
            <Button variant="outlined" className="my-3">
              Apply Now
            </Button>
          </LinkContainer>
        ) : (
          <></>
        )}
      </Container>
    </LayoutWithNavTab>
  );
};

export default JobDetailScreen;
