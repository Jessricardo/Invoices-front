import superagent from 'superagent';
import config from 'config';

export const getLists = () => {
  const token = JSON.parse(localStorage.getItem('token')).token;
  const userId = JSON.parse(localStorage.getItem('user')).id;
  return (superagent
    .get(`${config.api.url}/users/${userId}/lists`)
    .set({ Authorization: `Bearer ${token}` })
    .then((data) => data.body));
};

export const updateItem = (body) => {
  const token = JSON.parse(localStorage.getItem('token')).token;
  return (superagent
    .patch(`${config.api.url}/items`)
    .set({ Authorization: `Bearer ${token}` })
    .send(body)
    .then((data) => data.body));
};

export const removeItem = (id) => {
  const token = JSON.parse(localStorage.getItem('token')).token;
  return (superagent
    .delete(`${config.api.url}/items/${id}`)
    .set({ Authorization: `Bearer ${token}` })
    .then((data) => data.body));
};

export const updateList = (body) => {
  const token = JSON.parse(localStorage.getItem('token')).token;
  const userId = JSON.parse(localStorage.getItem('user')).id;
  return (superagent
    .post(`${config.api.url}/users/${userId}/lists`)
    .set({ Authorization: `Bearer ${token}` })
    .send(body)
    .then((data) => data.body));
};

export const removeList = (id) => {
  const token = JSON.parse(localStorage.getItem('token')).token;
  return (superagent
    .delete(`${config.api.url}/lists/${id}`)
    .set({ Authorization: `Bearer ${token}` })
    .then((data) => data.body));
};
