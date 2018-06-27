import { NAV, POP } from './types';

export const navigate = view => {
  return {
    type: NAV,
    payload: view
  };
};
export const poper = pop => {
  return {
    type: POP,
    payload: pop
  };
};
