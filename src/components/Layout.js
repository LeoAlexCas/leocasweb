import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class Layout extends React.Component {
    render() {
        return(
            <React.Fragment>
                <NavBar></NavBar>
                {this.props.children}
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default Layout;