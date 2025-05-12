import {api} from './common';

export const getMe = async () => {
  const me = await api.get({url: '/api/profiles/me'});
  return me;
};

export const updateMe = async () => {
  const me = await api.get({url: '/api/users'});
  return me;
};
