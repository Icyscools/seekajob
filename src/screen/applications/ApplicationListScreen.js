import { useState, useEffect, useCallback } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Row, Col, Container } from 'react-bootstrap';
// import Button from '@material-ui/core/Button';
import LayoutWithNavTab from '../../layouts/LayoutWithNavTab';
import { getApplicationsByCurrentUser } from '../../api/application';
import { useSelector } from 'react-redux';
import JobApplicationCardDeck from '../../components/applications/JobApplicationCardDeck';
import WorkerApplicationCardDeck from '../../components/applications/WorkerApplicationCardDeck';

const txt1 = {
  fontSize: '2em',
};

const ApplicationListScreen = () => {
  const [filterName, setFilterName] = useState('');
  const [applications, setApplications] = useState([]);
  const [auth, setAuth] = useState();
  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const auth = await authSelector;
      setAuth(auth);
      if (auth?.user) {
        getApplicationsByCurrentUser().then((res) => {
          setApplications(res.data);
        });
      }
    };

    fetchAuthUser();
  }, [authSelector]);

  const renderApplicationsSection = () => {
    if (auth?.user?.role === 'company') {
      const filterApplications = applications.filter((job) => job.title.includes(filterName));
      return <JobApplicationCardDeck jobs={filterApplications} />;
    } else {
      const filterApplications = applications.filter((app) => app.job.title.includes(filterName));
      return <WorkerApplicationCardDeck applications={filterApplications} />;
    }
  };

  const handleOnSearch = useCallback((value) => {
    setFilterName(value);
  }, []);

  const handleOnSearchClear = useCallback(() => {
    setFilterName('');
  }, []);

  return (
    <LayoutWithNavTab>
      <Container className="my-3">
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
        {renderApplicationsSection()}
      </Container>
    </LayoutWithNavTab>
  );
};

export default ApplicationListScreen;
