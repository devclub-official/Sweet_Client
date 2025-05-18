import Config from 'react-native-config';
import {api} from './common';
import {UserInfo} from '@/types/user';

export const getMe = async () => {
  const me = await api.get<UserInfo>({
    url: `${Config.MAIN_API_ORIGIN}/api/profiles/me`,
  });
  return me;
};

export const updateMe = async () => {
  const me = await api.get({url: '/api/users'});
};
