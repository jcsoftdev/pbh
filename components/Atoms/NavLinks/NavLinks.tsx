import React, { useContext } from 'react';
import NavLink  from 'next/link';

import { AuthContext } from 'context/auth_context';
// import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
  <ul className="nav-links">
    <li>
      <NavLink href="/" >INICIO</NavLink>
    </li>
    {auth.isLoggedIn && (
        <li>
          <NavLink href="/donation">TUS DONACIONES</NavLink>
        </li>
      )}
    <li>
      <NavLink href="/about">NOSOTROS</NavLink>
    </li>
    {!auth.isLoggedIn && (
      <li>
        <NavLink href="/login">INICIAR SESIóN</NavLink>
      </li>
    )}
    {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>CERRAR SESIÓN</button>
        </li>
      )}
  </ul>
  );
};

export default NavLinks;