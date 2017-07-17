import React, { Component } from 'react';
import axios from 'axios';
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: []
    };
  }

  componentWillMount() {
    axios.get('http://localhost:3001/patients')
      .then((patients) => {
        this.setState({ patients: patients.data });
      });
  }

  render() {
    const { patients } = this.state;

    return (
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <td>Registration No.</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Gender</td>
              <td>Age</td>
              <td>Address</td>
              <td>Service Type</td>
              <td>Fee (Amount)</td>
              <td>Free?</td>
              <td>Last Updated At</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              patients.map((patient) => {
                return (
                  <tr id={patient.id}>
                    <td>{patient.id}</td>
                    <td>{patient.first_name}</td>
                    <td>{patient.last_name}</td>
                    <td>{patient.gender}</td>
                    <td>{patient.age}</td>
                    <td>{patient.address}</td>
                    <td>{patient.service_type}</td>
                    <td>{patient.fee_amount}</td>
                    <td>{patient.free}</td>
                    <td>{patient.updated_at}</td>
                    <td><a href="">Delete</a></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default HelloWorld;
