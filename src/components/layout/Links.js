import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
    return (
        <ul className="right">
            <li><NavLink to='/ostoslista'>Ostoslista</NavLink></li>
        </ul>
    )
}

export default Links