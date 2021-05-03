import React from 'react';
import Logo from '../components/logo';
import Contact from '../components/Contact';


class Home extends React.Component {
    render() {
        return(
            <div className="homeContainer">
                <Logo></Logo>
                <Contact></Contact>
            </div>
        );
    }
}

export default Home;