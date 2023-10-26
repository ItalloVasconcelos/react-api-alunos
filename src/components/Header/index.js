import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav } from './styled';

export default function Header() {
  // eslint-disable-next-line no-unused-vars, no-console
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav>
      <Link to="/">
        <FaHome size="24px" />
      </Link>
      <Link to="/login">
        <FaSignInAlt size="24px" />
      </Link>
      <Link to="/logout">
        <FaUserAlt size="24px" />
      </Link>
      {botaoClicado ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}
