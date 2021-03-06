import { useState, useEffect, useCallback } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LayoutWithNavTab from '../../layouts/LayoutWithNavTab';
import { updateJob, getJobById } from '../../api/jobs';

const JobUpdateScreen = () => {
  const history = useHistory();
  const { id } = useParams();
  const [job, setJob] = useState();
  const [error, setError] = useState(false);
  const [auth, setAuth] = useState();
  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const auth = await authSelector;
      console.log(auth);
      setAuth(auth);

      handleChangeValue('companyId', auth?.user?.company?.id);

      getJobById(id).then((res) => {
        if (auth?.user?.company?.id !== res.data?.company?.id) {
          history.replace(`/job/${id}`);
        }
        setJob(res.data);
        console.log(res.data);
      });
    };
    fetchAuthUser();
  }, [authSelector]);

  const handleUpdateJobForm = (evt) => {
    evt.preventDefault();

    updateJob(job)
      .then((result) => {
        const { data, status } = result;
        if (data && status === 200) {
          history.replace(`/job/${id}`);
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
  });

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
          <h1>Update a job</h1>
          <h3>{auth?.user?.company?.company_name}</h3>
        </Container>
      </div>
      <Form onSubmit={handleUpdateJobForm}>
        <Container className="my-3">
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Job Title"
                  value={job?.title}
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
                  value={job?.location}
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
                  value={job?.description}
                  onChange={(evt) => handleChangeValue('description', evt.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Salary"
                  value={job?.salary}
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
                  value={job?.welfare}
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
                Update job
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </LayoutWithNavTab>
  );
};

export default JobUpdateScreen;
