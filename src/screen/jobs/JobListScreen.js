import React, { useState, useEffect } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Row, Col, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Button from '@material-ui/core/Button';
import LayoutWithNavTab from '../../layouts/LayoutWithNavTab';
import { getJobs } from '../../api/jobs';
import JobCard from '../../components/jobs/JobCard';

const txt1 = {
  fontSize: '2em',
};

const buttonlogin = {
  fontSize: '20px',
  marginLeft: '1450px',
  borderRadius: 15,
  borderWidth: 1,
  backgroundColor: 'lightBlue',
  width: '75px',
};
const JobListScreen = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then((res) => {
      console.log(res.data);
      setJobs(res.data);
    });
  }, []);

  return (
    <LayoutWithNavTab>
      <Container style={{ width: '100%' }}>
        <h2 style={txt1}>Jobs</h2>
        <Row className="justify-content-start align-items-center my-3" style={{ gap: 10 }}>
          <Col col="12" md="8">
            <ReactSearchAutocomplete
              style={{ display: 'inline' }}
              placeholder="Find your jobs"
              // items={items}
              // onSearch={handleOnSearch}
              // onHover={handleOnHover}
              // onSelect={handleOnSelect}
              // onFocus={handleOnFocus}
              autoFocus
            />
          </Col>
          <Col className="text-right">
            <LinkContainer to="/jobs/create">
              <Button variant="outlined" style={{ display: 'inline' }}>
                Create a new job
              </Button>
            </LinkContainer>
          </Col>
        </Row>

        <Row className="my-3">
          {jobs.map((job) => (
            <Col col="12" md="6" lg="4">
              <JobCard job={job} />
            </Col>
          ))}
        </Row>
      </Container>
    </LayoutWithNavTab>
  );
};

export default JobListScreen;
