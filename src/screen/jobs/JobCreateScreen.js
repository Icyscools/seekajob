import { useState, useEffect, useCallback } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LayoutWithNavTab from '../../layouts/LayoutWithNavTab';
import { createJob } from '../../api/jobs';

const JobCreateScreen = () => {
  const history = useHistory();
  const [job, setJob] = useState();
  const [error, setError] = useState(false);
  const [auth, setAuth] = useState();
  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const auth = await authSelector;
      setAuth(auth);

      if (auth?.user?.role !== 'company') {
        history.replace('/jobs');
      }
      handleChangeValue('companyId', auth?.user?.company?.id);
    };
    fetchAuthUser();
  }, [authSelector]);

  const handleCreateJobForm = (evt) => {
    evt.preventDefault();

    createJob(job)
      .then((result) => {
        const { data, status } = result;
        if (data && status === 201) {
          history.replace('/job');
        }
      })
      .catch((err) => {
        console.error(err);
        const { data } = err.response;
        setError(data.message ?? 'Something went wrong');
      });
  };

  const handleChangeValue = useCallback((key, value) => {
    setJob({
      ...job,
      [key]: value,
    });
  }, []);

  return (
    <LayoutWithNavTab>
      <div
        style={{
          backgroundImage: 'url(/si1.jpg)',
          backgroundSize: 'cover',
          width: '100%',
          height: '200px',
          resizeMode: 'stretch',
        }}
        className="py-5 pl-3"
      >
        <Container>
          <h1>Create a new job</h1>
          <h3>{auth?.user?.company?.company_name}</h3>
        </Container>
      </div>
      <Form onSubmit={handleCreateJobForm}>
        <Container className="my-3">
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Job Title"
                  onChange={(evt) => handleChangeValue('title', evt.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Location"
                  onChange={(evt) => handleChangeValue('location', evt.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                  onChange={(evt) => handleChangeValue('description', evt.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Salary"
                  onChange={(evt) => handleChangeValue('salary', evt.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Welfare"
                  onChange={(evt) => handleChangeValue('welfare', evt.target.value)}
                />
              </Form.Group>
            </Col>
            {/* <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Recruit amount" />
              </Form.Group>
            </Col> */}
          </Row>
          <Row>
            <Col>
              {error ? (
                <p>
                  <small className="text-danger">{error}</small>
                </p>
              ) : (
                ''
              )}
              <Button variant="outlined" color="primary" type="submit">
                Create job
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </LayoutWithNavTab>
  );
};

export default JobCreateScreen;
