import React from 'react';
import {Link} from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            NAVBAR
            <Link to='/Anna'>Anna</Link>
            <Link to='/Mariya'>Mariya</Link>
            <Link to='/Ivan'>Ivan</Link>
            <Link to='/Anton'>Anton</Link>
            <Link to='/Konstantin'>Konstantin</Link>
            <Link to='/Timur'>Timur</Link>
        </div>
    );
};

export default NavBar;