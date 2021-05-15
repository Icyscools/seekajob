import React from 'react'
import { Navbar,Nav, Row , Col , Container, Form } from 'react-bootstrap';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Button from '@material-ui/core/Button'
const txth1 = {
  position:'absolute',
  fontSize : '3em',
  marginLeft : '2%',
  top:'2.5em'
}

const buttonlogin = {
  fontSize : '20px',
  marginLeft : '1450px',
  borderRadius : 15,
  borderWidth : 1,
  backgroundColor : 'lightBlue',
  width : '75px'
}

const col = {
    marginTop: '30px'
}
  
class AddJob extends React.Component {
    render() {
      return (
        <div>
            {/* <div style={{position: 'absolute', height: '10px'}}><button style={buttonlogin}> login </button></div> */}
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            <div style={{
                backgroundImage: "url(/si2.jpg)",
                width:'100%',
                height:'200px',
                resizeMode: 'stretch'
            }}>
                <h1 style={txth1}>Company Name</h1>
            </div>
            <Form>
                <Container>
                    <Row>
                        <Col style={col}><Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Job Title" />
                        </Form.Group></Col>
                        <Col style={col}><Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                            <option>Choose Location</option>
                            <option>Thailand</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Form.Control>
                        </Form.Group></Col>
                    </Row>
                    <Row>
                        <Col style={col}><Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Description"/>
                        </Form.Group></Col>
                        <Col style={col}><Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Salary" />
                        </Form.Group></Col>
                    </Row>
                    <Row>
                        <Col style={col}><Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Welfare"/>
                        </Form.Group></Col>
                        <Col style={col}><Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Recruit amount" />
                        </Form.Group></Col>
                    </Row>
                    <Row>
                        <Col style={col}></Col>
                        <Col style={col}><Button variant="outlined"style={{position:'absolute',right:'10px'}}>Create job</Button></Col>
                    </Row>
                </Container>
            
            
            
            </Form>
        </div>
      )
    }
  }
export default AddJob