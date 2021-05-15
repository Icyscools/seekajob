import React from 'react'

class WorkerForm extends React.Component {
    render() {
      return (
        <div>
            <form id='phone' name='phone'>
            <input type='text' id='phone' name='phone' placeholder='Phone'></input>
            </form><br />
            <form id='qualification' name='qualification'>
            <textarea id='experience' name='experience' placeholder='Qualification'></textarea>
            </form><br />
            <form id='experience' name='experience'>
            <textarea id='experience' name='experience' placeholder='Experience'></textarea>
            </form><br />
        </div>
      );
    }
  }
  export default WorkerForm