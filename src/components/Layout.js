import React from 'react';
import NavBar from './NavBar';

class Layout extends React.Component {
    render() {
        return(
            <React.Fragment>
                <NavBar></NavBar>
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default Layout;