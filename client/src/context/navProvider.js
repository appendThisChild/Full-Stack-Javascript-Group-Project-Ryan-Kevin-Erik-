
import React, { Component } from 'react';
const NavContext = React.createContext()

export class NavProvider extends Component {
    
    state = {
        greeting: 'Hello World'
    }

    render() {
        return (
            <NavContext.Provider value={this.state}>
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

// export function withNav(C) {
//     return function (props) {
//         return(<NavContext.Consumer>
//             {value => <C {...props}{...value} />}
//         </NavContext.Consumer>)
//     }
// }

//export const Consumer = NavContext.Consumer
export default NavProvider

