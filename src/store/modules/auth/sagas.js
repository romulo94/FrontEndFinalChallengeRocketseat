import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Types, signInSuccess, signFailure, signUpSuccess } from './actions';
import api from '~/services/api';
import history from '~/services/history';

export function* singIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/session', { email, password });

    const { token, name } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, name, email));

    history.push('/dashboard');
  } catch (error) {
    yield put(signFailure());
  }
}

export function* singUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, '/user', {
      name,
      email,
      password,
      provider: true,
    });

    yield put(signUpSuccess());

    history.push('/');
  } catch (error) {
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest(Types.SIGN_IN_REQUEST, singIn),
  takeLatest(Types.SIGN_UP_REQUEST, singUp),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(Types.SIGN_OUT, signOut),
]);
