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
                width:'100%',
                height:'200px',
            }}>
                <h1 style={{textAlign:'center', fontSize : '7em'}}>User Name</h1>
            </div>
            <h1 style={{textAlign:'center',marginTop:'10px'}}>Application</h1>
            <p style={{fontSize : '18px', textAlign:'center', marginTop : '28px'}}>Add Resume</p>
        </div>
      )
    }
  }
export default AddApplication