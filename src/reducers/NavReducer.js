import { NAV, POP } from '../actions/types';

const INITIAL_STATE = {
  view: 'List',
  pop: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAV:
      return { ...state, view: action.payload };
    case POP:
      return { ...state, pop: action.payload };
    default:
      return state;
  }
};
