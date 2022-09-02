import React from 'react'
import {NavbarContext} from '../Contexts/NavbarContext';

const Navbar = () => {
    const context = React.useContext(NavbarContext)

    return (
        <div>
            <p>This is Navbar for {context.name}</p>
        </div>
    )
}

export default Navbar