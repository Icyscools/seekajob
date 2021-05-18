import { useState, useEffect, useCallback } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Navbar, Nav, Row, Col, Container, Card, CardDeck } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Button from '@material-ui/core/Button';
import LayoutWithNavTab from '../../layouts/LayoutWithNavTab';
import { getApplicationsByCurrentUser } from '../../api/application';
// import JobCard from '../../components/jobs/JobCard';
import { useSelector } from 'react-redux';

// const proinfo = {
//   fontSize: '20px',
//   borderRadius: 15,
//   borderWidth: 1,
//   width: '75px',
// };

// const card = {
//   height: '2rem',
//   width: '18rem',
// };
// const container = {
//   width: '70%',
//   border: '2px solid #F7F7F7',
//   borderRadius: '20px',
//   backgroundColor: '#FCFCFC',
//   padding: '30px',
// };

const txt1 = {
  fontSize: '2em',
};

const ApplicationListScreen = () => {
  const [filterName, setFilterName] = useState('');
  const [applications, setApplications] = useState([]);
  const [auth, setAuth] = useState();
  const authSelector = useSelector((state) => state.auth);

  useEffect(async () => {
    const auth = await authSelector;
    setAuth(auth);

    if (auth?.user) {
      getApplicationsByCurrentUser().then((res) => {
        console.log(res.data);
      });
    }

    // if (auth?.user?.role === 'company') {
    //   getJobsByCurrentCompany().then((res) => {
    //     setJobs(res.data);
    //   });
    // } else {
    //   getJobs().then((res) => {
    //     setJobs(res.data);
    //   });
    // }
  }, [auth]);

  const handleOnSearch = useCallback((value) => {
    setFilterName(value);
  });

  const handleOnSearchClear = useCallback(() => {
    setFilterName('');
  });

  return (
    <LayoutWithNavTab>
      <Container className="my-3">
        {/* <h2 style={txt1}>Jobs</h2>
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

        <Row className="my-3">
          {jobs
            .filter((job) => job.title.includes(filterName))
            .map((job) => (
              <Col col="12" md="6" lg="4">
                <JobCard job={job} />
              </Col>
            ))}
        </Row> */}

        <h2 style={txt1}>Applications</h2>
        <Row className="justify-content-start align-items-center my-3" style={{ gap: 10 }}>
          <Col col="12" md="8">
            <ReactSearchAutocomplete
              style={{ display: 'inline' }}
              placeholder="Find your application's job"
              // items={items}
              onSearch={handleOnSearch}
              onClear={handleOnSearchClear}
              autoFocus
            />
          </Col>
        </Row>
        <Row>
          <Container>
            <h2>Front-end Developer</h2>
            <small>3 Applications for this job</small>
            <div>
              <CardDeck>
                <Card className="card">
                  <Card.Img variant="top" src="/w3.jpg" />
                  <Card.Body>
                    <Card.Title>User1</Card.Title>
                    <Card.Text>user1@gmail.com</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card">
                  <Card.Img variant="top" src="/w3.jpg" />
                  <Card.Body>
                    <Card.Title>User1</Card.Title>
                    <Card.Text>user1@gmail.com</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card">
                  <Card.Img variant="top" src="/w3.jpg" />
                  <Card.Body>
                    <Card.Title>User1</Card.Title>
                    <Card.Text>user1@gmail.com</Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
          </Container>
        </Row>
      </Container>
    </LayoutWithNavTab>
  );
};

export default ApplicationListScreen;
