import React, { useState, useEffect, useCallback } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Row, Col, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Button from '@material-ui/core/Button';
import LayoutWithNavTab from '../../layouts/LayoutWithNavTab';
import { getJobs, getJobsByCurrentCompany } from '../../api/jobs';
import JobCard from '../../components/jobs/JobCard';
import { useSelector } from 'react-redux';

const txt1 = {
  fontSize: '2em',
};

const JobListScreen = () => {
  const [filterName, setFilterName] = useState('');
  const [jobs, setJobs] = useState([]);
  const [auth, setAuth] = useState();
  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const auth = await authSelector;
      setAuth(auth);

      if (auth?.user?.role === 'company') {
        getJobsByCurrentCompany().then((res) => {
          setJobs(res.data);
        });
      } else {
        getJobs().then((res) => {
          setJobs(res.data);
        });
      }
    };
    fetchAuthUser();
  }, [authSelector]);

  const handleOnSearch = useCallback((value) => {
    setFilterName(value);
  }, []);

  const handleOnSearchClear = useCallback(() => {
    setFilterName('');
  }, []);

  return (
    <LayoutWithNavTab>
      <Container className="my-3">
        <h2 style={txt1}>Jobs</h2>
        <Row className="justify-content-start align-items-center my-3" style={{ gap: 10 }}>
          <Col col="12" md="8">
            <ReactSearchAutocomplete
              style={{ display: 'inline' }}
              placeholder="Find your jobs"
              // items={items}
              onSearch={handleOnSearch}
              onClear={handleOnSearchClear}
              autoFocus
            />
          </Col>

          {auth?.user?.role === 'company' ? (
            <Col className="text-right">
              <LinkContainer to="/jobs/create">
                <Button variant="outlined" style={{ display: 'inline' }}>
                  Create a new job
                </Button>
              </LinkContainer>
            </Col>
          ) : (
            <></>
          )}
        </Row>

        <Container className="my-3">
          {jobs
            .filter((job) => job.title.includes(filterName))
            .map((job) => (
              <JobCard job={job} />
            ))}
        </Container>
      </Container>
    </LayoutWithNavTab>
  );
};

export default JobListScreen;
