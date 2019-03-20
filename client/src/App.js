import React, { Component } from 'react';

import Header from './components/Header/Header'
import Navbar from './components/Header/Navbar/Navbar'

import {withNav} from './context/navProvider'

class App extends Component {
    state = {}

    

    render() {
        return (
            <Header>
                <Navbar />
            </Header>
            // switch
                // liked 
                // link to searched
                // selected artist 
            // switch
            // user links 
            // play bar
        );
    }
}

export default withNav(App);