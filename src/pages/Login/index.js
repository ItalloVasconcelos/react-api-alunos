import React from 'react';
import { useDispatch } from 'react-redux';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

import * as exapleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(exapleActions.clicaBotaoRequest());
  };
  return (
    <Container>
      <Title>
        LoginPage
        <small>OOI</small>
      </Title>
      <p>
        LoremAute sint ullamco aute proident eu dolore consectetur non enim aute
        reprehenderit velit.
      </p>
      <button type="button" onClick={handleClick}>
        Submit
      </button>
    </Container>
  );
}
