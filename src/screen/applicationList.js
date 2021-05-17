import React from 'react'
import { Navbar,Nav,Card,Button,CardDeck } from 'react-bootstrap';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {LinkContainer} from 'react-router-bootstrap'

const txt1 = {
  fontSize : '2em',
  marginLeft : '5%',
  marginTop : '2%'
}

const buttonlogin = {
  fontSize : '20px',
  marginLeft : '1450px',
  borderRadius : 15,
  borderWidth : 1,
  backgroundColor : 'lightBlue',
  width : '75px'
}

const proinfo = {
    fontSize : '20px',
    marginLeft : '1450px',
    borderRadius : 15,
    borderWidth : 1,
    width : '75px'
}

const card = {
    height: '2rem',
    width : '18rem'
}
const container = {
    position: 'relative', 
    top:'20px', 
    marginLeft:'5%', 
    width:'70%',
    border: '2px solid #F7F7F7',
    borderRadius: '20px',
    backgroundColor: '#FCFCFC',
    padding:'30px'
}

class AppList extends React.Component {
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
            <h2 style={txt1}>Applications</h2>
            <div style={{position: 'relative' , width: '400px' , marginLeft:'5%' , marginTop: '1%'}}>
                    <ReactSearchAutocomplete
                        style={{display: 'inline'}}
                        placeholder="Search your application"
                        // items={items}
                        // onSearch={handleOnSearch}
                        // onHover={handleOnHover}
                        // onSelect={handleOnSelect}
                        // onFocus={handleOnFocus}
                        autoFocus
                    />
                </div>
            <div  style={{position: 'relative'}}>
                <div style={container}>
                    <h2>Front-end Developer</h2>
                    <p style={{position:'absolute', right:'20px', top: '20px'}}>3 Applications for this job</p>
                    <div style={{position: 'relative'}}>
                        <CardDeck>
                            <Card className="card">
                                <Card.Img variant="top" src="/w3.jpg" />
                                <Card.Body>
                                <Card.Title>User1</Card.Title>
                                <Card.Text>
                                    user1@gmail.com
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="card">
                                <Card.Img variant="top" src="/w3.jpg" />
                                <Card.Body>
                                <Card.Title>User1</Card.Title>
                                <Card.Text>
                                    user1@gmail.com
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="card">
                                <Card.Img variant="top" src="/w3.jpg" />
                                <Card.Body>
                                <Card.Title>User1</Card.Title>
                                <Card.Text>
                                    user1@gmail.com
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </div>
                </div>
            </div>
        </div>
      )
    }
  }
  export default AppList