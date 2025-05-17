import Config from 'react-native-config';
import {api} from './common';

export const getMe = async () => {
  const me = await api.get({url: `${Config.MAIN_API_ORIGIN}/api/profiles/me`});
  return me;
};
