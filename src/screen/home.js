import React from 'react'

const texth1 = {
  fontSize : '80px',
  marginTop : '1px',
  marginLeft : '45px'
}

const inputsearch = {
  fontSize : '20px',
}
class Home extends React.Component {
    render() {
      return (
        <div style={{
          backgroundImage: "url(/w3.jpg)",
          backgroundSize : 'cover'
          }}>
          <h1 style={texth1}>Seekajob</h1>
          <form id='search' name='search'>
          <input style={inputsearch} type='text' id='search' name='search' placeholder='search'></input>
          </form>

        </div>
      );
    }
  }
  export default Home