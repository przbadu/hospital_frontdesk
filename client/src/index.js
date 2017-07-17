import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/slate/bootstrap.css';

// other libraries
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.js';

// components
import Navbar from './Shared/components/Navbar';
import App from './Shared/components/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
