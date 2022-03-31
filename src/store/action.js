import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_QUESTS: 'data/loadQuests',
  LOAD_QUEST_BY_ID: 'data/loadQuestById',
  GET_TYPE_FOR_FILTER: 'getTypeForFilterQuests',
  GET_ID_QUEST: 'getIdQuest',
  RESET_STATE: 'resetState',
  RESET_ID: 'resetPickedId',
};

export const loadQuests = createAction(ActionType.LOAD_QUESTS, (quests) => ({
  payload: quests,
}));

export const loadQuestById = createAction(ActionType.LOAD_QUEST_BY_ID, (quest) => ({
  payload: quest,
}));

export const getTypeForFilterQuests = createAction(ActionType.GET_TYPE_FOR_FILTER, (questType) => ({
  payload: questType,
}));

export const getIdQuest = createAction(ActionType.GET_ID_QUEST, (pickedId) => ({
  payload: pickedId,
}));

export const resetState = createAction(ActionType.RESET_STATE);
