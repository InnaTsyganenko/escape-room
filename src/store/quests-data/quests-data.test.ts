import {questsData} from './quests-data';
import {ActionType} from '../action';
import {questsMock} from '../../utils/mock';

describe('Reducer: questsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(questsData(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({quests: [], questById: {}, isDataLoaded: false});
  });

  it('should update quests by load quests', () => {
    const state = {quests: [], questById: {}, isDataLoaded: false};
    const quests = questsMock;
    const loadQuests = {
      type: ActionType.LOAD_QUESTS,
      payload: quests,
    };

    expect(questsData(state, loadQuests))
      .toEqual({quests, questById: {}, isDataLoaded: true});
  });

  it('should update quest by id by load quest', () => {
    const state = {quests: [], questById: {}, isDataLoaded: true};
    const questById = questsMock[0];
    const loadQuestById = {
      type: ActionType.LOAD_QUEST_BY_ID,
      payload: questById,
    };

    expect(questsData(state, loadQuestById))
      .toEqual({quests: [], questById, isDataLoaded: true});
  });
});
