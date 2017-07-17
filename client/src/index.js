import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// components
import App from './HelloWorld/components/HelloWorld';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
