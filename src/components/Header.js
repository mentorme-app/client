import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = props => {

    return (
        <header>
            <div><NavLink to="/home">Mentor Me</NavLink></div>
            <div>
                <div><NavLink to="/home">Browse Questions</NavLink></div>
                <div>Ask a question</div>
                <div>Logout</div>
            </div>
        </header>
    )
}

export default Header
