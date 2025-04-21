import {api} from './common';

export const createFeed = async () => {
  const res = await api.get({
    url: 'http://localhost:8080/',
  });
  console.log('res ==>', res);
};
