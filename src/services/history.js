import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
  basename: '/',
  forceRefresh: false,
  keyLength: 10,
});

export default history;
