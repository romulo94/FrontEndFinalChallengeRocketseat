import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

// import { zonedTimeToUtc } from 'date-fns-tz';
import api from '~/services/api';

import ImgInput from '~/components/ImgInput';
import DatePicker from '~/components/DatePicker';

import { Container, Button } from './styles';

const schema = Yup.object().shape({
  file_id: Yup.number().required(),
  title: Yup.string().required('Insira o título do meetup'),
  description: Yup.string().required('Descreva o seu meetup'),
  date: Yup.date().required('Insira uma data'),
  location: Yup.string().required('Insira o local'),
});

export default function Meetup({ match }) {
  const [loading, setLoading] = useState(false);
  const [meetup, setMeetup] = useState(null);

  const meetupId = useMemo(() => Number(match.params.id), [match.params.id]);

  const loadMeetup = useCallback(async () => {
    setLoading(true);
    const { data } = await api.get(`/meetup/${meetupId}`);

    return data;
  }, [meetupId]);

  const postOrPutMeetup = useCallback(
    async data => {
      if (meetupId) {
        await api.post('/meetup', data);
      } else {
        await api.put(`/meetup/${meetupId}`, data);
      }

      return data;
    },
    [meetupId]
  );

  useEffect(() => {
    if (meetupId) {
      const response = loadMeetup();
      setMeetup(response);
    }
    setLoading(false);
  }, [loadMeetup, meetupId]);

  return (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={postOrPutMeetup}>
        <ImgInput name="file" />

        <Input name="title" placeholder="Título do meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <Button type="submit">
          {loading ? (
            'Salvando...'
          ) : (
            <>
              <MdAddCircleOutline size={20} />
              Salvar meetup
            </>
          )}
        </Button>
      </Form>
    </Container>
  );
}

Meetup.propTypes = {
  match: PropTypes.shape().isRequired,
};
