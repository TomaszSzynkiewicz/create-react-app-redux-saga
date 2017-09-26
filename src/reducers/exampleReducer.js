import {
  EXAMPLE_ACTION_REQUESTED,
  EXAMPLE_ACTION_DONE,
  EXAMPLE_ACTION_FAILED
} from '../actions';

const INITIAL_STATE = {
  message: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION_REQUESTED:
      return { ...INITIAL_STATE, loading: true };
    case EXAMPLE_ACTION_DONE:
      return { ...state, message: action.payload.message, loading: false };
    case EXAMPLE_ACTION_FAILED:
      return { ...state, message: '', error: action.payload.error, loading: false };
    default:
      return state;
  }
};
