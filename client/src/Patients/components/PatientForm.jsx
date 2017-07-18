import React from 'react';

function PatientForm() {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row">
            <div className="col-md-6">
              <h1>Registration Form</h1>
              <hr/>
              <p class="text-muted">All fields with ( * ) are required fields.</p>
            </div>
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <label for="patient_first_name">
                    First Name
                    <span className="text-danger"> *</span>
                  </label>
                  <input type="text"
                    className="form-control"
                    name="patient_first_name"
                    id="patient_first_name"
                    placeholder="John" />
                </div>

                <div className="form-group">
                  <label for="patient_last_name">Last Name</label>
                  <input type="text"
                    className="form-control"
                    name="patient_last_name"
                    id="patient_last_name"
                    placeholder="Doe" />
                </div>

                <div className="form-group">
                  <label for="patient_age">
                    Age
                    <span className="text-danger"> *</span>
                  </label>
                  <input type="number"
                    className="form-control"
                    name="patient_age"
                    id="patient_age"
                    placeholder="20" />
                </div>

                <div className="form-group">
                  <label for="patient_gender">
                    Gender
                    <span className="text-danger"> *</span>
                  </label>
                  <select className="form-control"
                    name="patient_gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="form-group">
                  <label for="patient_service_type">
                    Service Type
                    <span className="text-danger"> *</span>
                  </label>
                  <select className="form-control"
                    name="patient_service_type">
                    <option value="opd">OPD</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>

                <div className="form-group">
                  <label for="patient_address">
                    Address
                  </label>
                  <textarea id="patient_address"
                    name="patient_address"
                    className="form-control"
                    cols="30" rows="5"></textarea>
                </div>

                <div className="form-group">
                  <label for="patient_fee_amount">
                    Fee Amount (In Rs.)
                    <span className="text-danger"> *</span>
                  </label>
                  <input type="number"
                    className="form-control"
                    name="patient_fee_amount"
                    placeholder="15" />
                </div>

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
              </form>
          </div>
        </div>
      </div>
    </div>
    )
  }

    export default PatientForm;
