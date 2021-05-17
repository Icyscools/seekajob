import React from 'react';

class CompanyForm extends React.Component {
  render() {
    return (
      <div>
        <form id="nameCompany" name="nameCompany">
          <input type="text" id="nameCompany" name="nameCompany" placeholder="Company Name"></input>
        </form>
        <br />
        <form id="description" name="description">
          <textarea
            id="description"
            name="description"
            placeholder="Company Description"
          ></textarea>
        </form>
        <br />
      </div>
    );
  }
}
export default CompanyForm;
