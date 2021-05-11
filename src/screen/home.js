import React from 'react'
// import './style/home.css';

class Home extends React.Component {
    render() {
      return (
        <div>Seekajob
          <form id='search' name='search'>
          <input type='text' id='search' name='search' placeholder='search'></input>
          </form>

        </div>
      );
    }
  }
  export default Home