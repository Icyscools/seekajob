import React from 'react'
import { Navbar,Nav, Row , Col , Container, Form } from 'react-bootstrap';

class AddApplication extends React.Component {
    render() {
      return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#job">Jobs</Nav.Link>
                <Nav.Link href="#application">Application</Nav.Link>
                </Nav>
            </Navbar>
            <div style={{
                backgroundImage: "url(/aa.jpg)",
                backgroundSize : 'cover',
                width:'1535px',
                height:'200px',
            }}>
                <h1 style={{marginLeft : '500px', fontSize : '7em'}}>User Name</h1>
            </div>
            <Row>
                <h1 style={{marginLeft : '680px'}}>Applicaton</h1>
            </Row>
            <Row>
                <p style={{fontSize : '18px', marginLeft : '680px', marginTop : '28px'}}>Add Resume</p>
            </Row>
        </div>
      )
    }
  }
export default AddApplication