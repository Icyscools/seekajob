import React from 'react';
import { Navbar, Nav, Row, Col, Container, Form } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { LinkContainer } from 'react-router-bootstrap';

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

const col = {
  marginTop: '30px',
};

class AddJob extends React.Component {
  render() {
    return (
      <div>
        {/* <div style={{position: 'absolute', height: '10px'}}><button style={buttonlogin}> login </button></div> */}
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <LinkContainer to="/JobList">
              <Nav.Link>Jobs</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/AppList">
              <Nav.Link>Application</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
        <div
          style={{
            backgroundImage: 'url(/si1.jpg)',
            backgroundSize: 'cover',
            width: '1535px',
            height: '200px',
            resizeMode: 'stretch',
          }}
        >
          <h1 style={txth1}>Company Name</h1>
        </div>
        <Form>
          <Container>
            <Row>
              <Col style={col}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Job Title" />
                </Form.Group>
              </Col>
              <Col style={col}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control as="select">
                    <option>Choose Location</option>
                    <option>Thailand</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col style={col}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={3} placeholder="Description" />
                </Form.Group>
              </Col>
              <Col style={col}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Salary" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col style={col}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={3} placeholder="Welfare" />
                </Form.Group>
              </Col>
              <Col style={col}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Recruit amount" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col style={col}></Col>
              <Col style={col}>
                <LinkContainer to="/JobList" style={{ position: 'absolute', right: '10px' }}>
                  <Button variant="outlined">Create job</Button>
                </LinkContainer>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    );
  }
}
export default AddJob;
