/* eslint-disable handle-callback-err */
/* eslint-disable prettier/prettier */
import Axios from 'axios';

const Api = 'https://api.github.com/users';
const Headers = {
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'multipart/form-data',
  },
};
export const Service = {
  get_users: async (getData) => {
    await Axios.get(Api)
      .then(async (res) => {
        // console.warn('Service =>', res.data);
        console.warn(res.data);
        getData(res.data);
      })
      .catch((err) => console.warn(err));
  },
  get_detail: async (state, getData) => {
    const get = Api + '/' + state;
    console.warn('hello', get);
    await Axios.get(get)
      .then(async (res) => {
        console.warn('Service =>', res.data);
        console.warn('hello');
        getData(res);
      })
      .catch((err) => console.warn(err));
  },
};
