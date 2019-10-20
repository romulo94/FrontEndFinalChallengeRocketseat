import produce from 'immer';

import { Types as TypesAuth } from '../auth/actions';

const INITIAL_STATE = {
  email: null,
  name: null,
  loading: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TypesAuth.SIGN_IN_SUCCESS: {
        draft.name = action.payload.name;
        draft.email = action.payload.email;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
