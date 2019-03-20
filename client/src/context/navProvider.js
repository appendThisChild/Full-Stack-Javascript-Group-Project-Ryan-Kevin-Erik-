
import React, { Component } from 'react';
const NavContext = React.createContext()

class NavProvider extends Component {
    state = {
        greeting: 'Hello World'
    }
    // functions for didmount
    // - 
    // -

    render() {
        return (
            <NavContext.Provider 
                value={
                    this.state
                }>
                {this.props.children}
            </NavContext.Provider>
        );
    }
}
export const withNav = C => props => (
    <NavContext.Consumer>
        {value => <C {...props}{...value} />}
    </NavContext.Consumer>
)

export default NavProvider

