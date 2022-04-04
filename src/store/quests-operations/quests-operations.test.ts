import { questsOperations } from './quests-operations';
import { DEFAULT_TYPE } from '../../const';
import { ActionType } from '../action';

describe('Reducer: questsOperations', () => {
  it('without additional parameters should return initial state', () => {
    expect(questsOperations(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({type: DEFAULT_TYPE, pickedId: 0});
  });

  it('should get questType to filter quests', () => {
    const state = {type: DEFAULT_TYPE, pickedId: 0};
    const getTypeForFilterQuests = {
      type: ActionType.GET_TYPE_FOR_FILTER,
      payload: 'string',
    };

    expect(questsOperations(state, getTypeForFilterQuests))
      .toEqual({type: 'string', pickedId: 0});

    const nonGetTypeAction = {
      type: ActionType.GET_TYPE_FOR_FILTER,
      payload: 'Все квесты',
    };

    expect(questsOperations(state, nonGetTypeAction))
      .toEqual({type: 'Все квесты', pickedId: 0});
  });

  it('should get current id quest', () => {
    const state = {type: 'Все квесты', pickedId: 1};
    const getIdQuest = {
      type: ActionType.GET_ID_QUEST,
      payload: 1,
    };

    expect(questsOperations(state, getIdQuest))
      .toEqual({type: 'Все квесты', pickedId: 1});

    const nonGetIdAction = {
      type: ActionType.GET_ID_QUEST,
      payload: 0,
    };

    expect(questsOperations(state, nonGetIdAction))
      .toEqual({type: 'Все квесты', pickedId: 0});
  });

  it('should have reset state', () => {
    const resetStateAction = {
      type: ActionType.RESET_STATE,
    };

    expect(questsOperations({type: 'Все квесты', pickedId: 0}, resetStateAction))
      .toEqual({type: 'Все квесты', pickedId: 0});
  });
});
