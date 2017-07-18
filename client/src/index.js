import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/slate/bootstrap.css';

// other libraries
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.js';

// Components
import Navbar from './Bootstrap/components/Navbar';
import Patients from './Patients/components/Patients';
import PatientForm from './Patients/components/PatientForm';

// router are handled from here
function Routes() {
  return (
    <Router>
      <div>
        <Navbar />

        <div class="container">
          <Route exact path="/patients" component={Patients} />
          <Route path="/patients/new" component={PatientForm} />
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
