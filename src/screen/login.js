import React from 'react'
import reactDom from 'react-dom';
// import './style/home.css';
// import background from './picture/si2.jpg'

const textinputemail = {
  fontSize : '20px',
  marginTop : '270px',
  marginRight : '650px',
}

const textinputpassword = {
  fontSize : '20px',
  marginTop : '50px',
  marginRight : '650px',
}

const buttonlogin = {
  fontSize : '25px',
  backgroundColor: "white",
  padding: "5px",
  marginRight : '650px',
  marginTop : '100px',
  paddingTop : 14,
  paddingBottom : 14,
  borderRadius : 15,
  borderWidth : 1,
  borderColor: 'black',
  width : '250px'
  
}

const textt = {
  fontSize : '20px',
  marginRight : '650px',
}

class Login extends React.Component {
    render() {
      return (
        <div style={{
          backgroundImage: "url(/si2.jpg)",
          backgroundSize : 'cover',
          height : '720px'

          }}>
          <form id='email' name='email'>
          <input style={textinputemail} type='text' id='email' name='email' placeholder='e-mail'></input>
          </form><br />
          <form id='password' name='password'>
          <input style={textinputpassword} type='password' id='password' name='password' placeholder='password'></input>
          </form>
          <button style={buttonlogin} name='login'>Log in</button><br /><br />
          <text style={textt}>You don't have an account ?</text><br />
        </div>
      );
    }
  }
  export default Login