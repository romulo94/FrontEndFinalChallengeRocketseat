import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, Profile, Button } from './styles';
import logo from '~/assets/logo.svg';

export default function Header() {
  const dispatch = useDispatch();
  const exit = useCallback(() => dispatch(signOut()), [dispatch]);
  const { name } = useSelector(state => state.user);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="meetapplogo" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <Button onClick={exit}>Sair</Button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
