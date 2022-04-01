import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {
  fetchQuestList,
  fetchQuestById,
  pushOrder
} from './api-actions';
import {APIRoute} from '../const';

let api = null;

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
    const dispatch = jest.fn();
    const questByIdLoader = fetchQuestById();

    apiMock
      .onGet(APIRoute.QUEST_BY_ID)
      .reply(200, [{fake: true}]);

    return questByIdLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.QUEST_BY_ID,
          payload: {'0': {fake: true}},
        });
      });
  });

  it('should make a correct API call to POST /orders', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const pushOrderLoader = pushOrder(fakeUser);

    apiMock
      .onPost(APIRoute.ORDERS)
      .reply(200, [{fake: true}]);

    return pushOrderLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          payload: {'0': {fake: true}},
        });
      });
  });
});
