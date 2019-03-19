import React, { Component } from 'react';
// import {NavConsumer as Consumer} from '../../../context/navProvider'
import {withNav} from '../../../context/navProvider'
import NavbarLinks from './NavbarLinks'

import Search from './Search'
// import Consumer from './NavbarLinks'

export class Navbar extends Component {
    state = {  }
    render() { 
        console.log(this.props)
        return ( 
                <nav>
                    <Search />
                    <NavbarLinks />
                </nav>
         );
    }
}
 
export default withNav(Navbar);

