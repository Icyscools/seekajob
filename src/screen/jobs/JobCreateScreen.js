import { useState } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Button from '@material-ui/core/Button';
import LayoutWithNavTab from '../../layouts/LayoutWithNavTab';

const txth1 = {
  position: 'absolute',
  fontSize: '3em',
  marginLeft: '5%',
  top: '2.5em',
};

const buttonlogin = {
  fontSize: '20px',
  marginLeft: '1450px',
  borderRadius: 15,
  borderWidth: 1,
  backgroundColor: 'lightBlue',
  width: '75px',
};

const JobCreateScreen = () => {
  const [job, setJob] = useState({});

  // useEffect(() => {
  //   getJobById(id).then((res) => {
  //     console.log(res.data);
  //     setJob(res.data);
  //   });
  // }, []);

  const handleCreateJobForm = (evt) => {
    evt.preventDefault();
    console.log(job);
  };

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
      >
        <h1 style={txth1}>Company Name</h1>
      </div>
      <Form onSubmit={handleCreateJobForm}>
        <Container className="my-3">
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Job Title" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Location" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Description" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Salary" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Welfare" />
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
