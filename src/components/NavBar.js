import React from 'react';
import './styles/NavBar.css';
import MainLogo from '../assets/logos/Logo.png';

class NavBar extends React.Component {
    render() {
        return(
            <div className="navContainer">
                <div className="navLogo">
                    <img src={MainLogo} alt=""/>
                </div>
                <div className="navMenu">
                    <ul className="navMenu_items">
                        <li>uno</li>
                        <li>dos</li>
                        <li>tres</li>
                        <li>cuatro</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;