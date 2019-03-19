import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App'

import NavProvider from './context/navProvider'



ReactDOM.render(
    <Router>
        <NavProvider>
            <App />
        </NavProvider>
    </Router>,
    document.getElementById('root'))

