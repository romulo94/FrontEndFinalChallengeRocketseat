import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { Container, Content, Profile, Button } from './styles';

export default function Header() {
  // const profile = useSelector(state => state.user.profile);
  const profile = {
    name: 'Teste name',
  };
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
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <Button>Sair</Button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
