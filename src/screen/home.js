import React from 'react'
import { Navbar,Nav, Row , Col , Container,Form,FormControl } from 'react-bootstrap';
import Button from '@material-ui/core/Button'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const texth1 = {
  fontSize : '80px',
  color: 'white',
}
const texth2 = {
  fontSize : '80px',
}
const span = {
  fontSize : '80px',
  textAlign : 'center',
  padding: 20,
  margin: 'auto'
}
const inputsearch = {
  fontSize : '20px',
}

// const buttonlogin = {
//   position: 'relative',
//   fontSize : '20px',
//   right : '80px',
//   borderRadius : 15,
//   borderWidth : 1,
//   backgroundColor : 'lightBlue',
//   width : '75px'
// }

class Home extends React.Component {
    render() {
      return (
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
              <Button variant="outline-info">Login</Button>
            </Form>
          </Navbar>
        {/* <div><button style={buttonlogin}> login </button> */}
          <div style={{
            position:'relative',
            backgroundImage: "url(/w3.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '250px',
            }}>
            <div style={span}><span style={texth1}>Seeka</span><span style={texth2}>job</span></div>
            <div style={{ width: 400, margin: 'auto'}}>
            <ReactSearchAutocomplete
              styling={{width:'40%'}}
              placeholder="Search"
              autoFocus
            />
            </div>
            
          </div>
        </div>
      );
    }
  }
  export default Home