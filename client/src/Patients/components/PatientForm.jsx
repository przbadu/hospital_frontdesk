import React from 'react';
import { SimpleInput, Select, TextArea } from './../../Bootstrap/components/Form';

function PatientForm() {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
          <div className="col-md-6">
            <h1>Registration Form</h1>
            <hr/>
            <p className="text-muted">All fields with ( * ) are required fields.</p>
          </div>

          <div className="col-md-6">
              <SimpleInput
                title="First Name"
                name="patient_first_name"
                inputType="text"
                placeholder="John" />

              <SimpleInput
                title="Last Name"
                name="patient_last_name"
                inputType="text"
                placeholder="Doe" />

              <SimpleInput
                title="Age"
                name="patient_age"
                inputType="number"
                placeholder="20" />

              <Select
                name="patient_gender"
                title="Gender"
                options={['Male', 'Female']}/>

              <Select
                title="Service Type"
                name="patient_service_type"
                options={['OPD', 'Emergency']} />

              <TextArea
                title="Address"
                name="patient_address"
                cols={30}
                rows={3} />

              <SimpleInput
                inputType="number"
                name="patient_fee_amount"
                title="Fee Amount" />

              <div className="form-group">
                <input type="checkbox"
                  name="patient_free"
                  placeholder="15" />
                &nbsp; Eligible for Free?
              </div>

              <div className="form-group">
                <input type="submit"
                  value="Create new patient"
                  className="btn btn-default" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientForm;
