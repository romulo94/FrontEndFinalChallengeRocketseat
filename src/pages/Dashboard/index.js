import React, { useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Button, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  const loadMeetups = useCallback(async () => {
    try {
      const { data } = await api.get('/meetup');

      setMeetups(data);
      return data;
    } catch (error) {
      return null;
    }
  }, []);

  useEffect(() => {
    loadMeetups();
  }, [loadMeetups]);

  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <Link to="/meetup">
          <Button>
            <MdAddCircleOutline size={20} />
            Novo meetup
          </Button>
        </Link>
      </header>
      {meetups ? (
        <ul>
          {meetups.map(meetup => (
            <Link
              key={String(meetup.id)}
              to={meetup.past ? '/' : `/meetup/${meetup.id}/details`}
            >
              <Meetup past={meetup.past}>
                <strong>{meetup.title}</strong>
                <div>
                  <span>
                    {meetup.past ? 'Esse meetup já ocorreu' : meetup.date}
                  </span>
                  <MdChevronRight size={30} />
                </div>
              </Meetup>
            </Link>
          ))}
        </ul>
      ) : (
        <h3>Você não possuí nenhum meetup.</h3>
      )}
    </Container>
  );
}
