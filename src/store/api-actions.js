import { loadQuests, loadQuestById } from './action';
import { APIRoute } from 'const';
import { showAlert } from '../utils';

export const fetchQuestList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.QUESTS)
    .then(({data}) => dispatch(loadQuests(data.map((element) => element))))
);

export const fetchQuestById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.QUEST_BY_ID}${id}`)
    .then(({data}) => dispatch(loadQuestById(data)))
);

export const pushOrder = (name, peopleCount, phone, isLegal) => (dispatch, _getState, api) => (
  api.post(APIRoute.ORDERS, {name, peopleCount, phone, isLegal})
    .then(() => {
      showAlert('black', `Order successfully sent!`);
    })
    .catch((err) => {
      showAlert('red', `Something wrong, please try again :( This is some kind of ${err}...`);
    })
);
