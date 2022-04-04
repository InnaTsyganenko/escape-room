import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {
  fetchQuestList,
  fetchQuestById
} from './api-actions';
import {APIRoute} from '../const';

let api: any = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /quests', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questsLoader = fetchQuestList();

    apiMock
      .onGet(APIRoute.QUESTS)
      .reply(200, [{fake: true}]);

    return questsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_QUESTS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to GET /quests/id', () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const dispatch = jest.fn();
    const questByIdLoader = fetchQuestById(id);

    apiMock
      .onGet(`${APIRoute.QUEST_BY_ID}${id}`)
      .reply(200, {fake: true});

    return questByIdLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_QUEST_BY_ID,
          payload: {fake: true},
        });
      });
  });

  it('should make a correct API call to POST /orders', () => {
    const apiMock = new MockAdapter(api);
    const fakeOrder = {name: 'abc', peopleQount: '1', phone: '123456', isLegal: true};

    apiMock
      .onPost(APIRoute.ORDERS)
      .reply(200, fakeOrder);
  });
});
