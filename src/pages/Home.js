import React from 'react';
import Logo from '../components/logo';


class Home extends React.Component {
    render() {
        return(
            <div className="homeContainer">
                <Logo></Logo>
            </div>
        );
    }
}

export default Home;