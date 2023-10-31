import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Nav } from './styled';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Header() {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Nav>
      <Link to="/">
        <FaHome size="24px" />
      </Link>
      <Link to="/register">
        <FaSignInAlt size="24px" />
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size="24px" />
        </Link>
      ) : (
        <Link to="/login">
          <FaUserAlt size="24px" />
        </Link>
      )}

      {isLoggedIn && <FaCircle size="24px" color="#66ff33" />}
    </Nav>
  );
}
