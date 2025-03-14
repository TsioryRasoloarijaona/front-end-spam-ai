import React from 'react';
import { Link } from 'react-router';

const Nav: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dash">Dashboard</Link></li>
            
            </ul>
        </nav>
    );
};

export default Nav;