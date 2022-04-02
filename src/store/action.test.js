import {
  getTypeForFilterQuests,
  getIdQuest,
  resetState,
  ActionType
} from './action';


describe('Actions', () => {

  it('action creator for filter list quests returns action with correct questType', () => {
    const expectedAction = {
      type: ActionType.GET_TYPE_FOR_FILTER,
      payload: 'Все квесты',
    };

    const questType = 'Все квесты';

    expect(getTypeForFilterQuests(questType)).toEqual(expectedAction);
  });

  it('action creator for get id quest returns action with correct id', () => {
    const expectedAction = {
      type: ActionType.GET_ID_QUEST,
      payload: 1,
    };

    expect(getIdQuest(1)).toEqual(expectedAction);
  });

  it('action creator for reset state returns action with undefined payload', () => {
    const expectedAction = {
      type: ActionType.RESET_STATE,
    };

    expect(resetState()).toEqual(expectedAction);
  });
});
