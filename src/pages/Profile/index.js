import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container, Button } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const { loading, ...profile } = useSelector(state => state.user);

  const handleSubmit = useCallback(
    data => {
      dispatch(updateProfileRequest(data));
    },
    [dispatch]
  );

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />

        <Button type="submit">
          {loading ? (
            'Salvando...'
          ) : (
            <>
              <MdAddCircleOutline size={20} />
              Salvar perfil
            </>
          )}
        </Button>
      </Form>
    </Container>
  );
}
