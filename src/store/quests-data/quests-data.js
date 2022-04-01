import { createReducer } from '@reduxjs/toolkit';
import { loadQuests, loadQuestById } from '../action';

const initialState = {
  quests: [],
  questById: {},
  isQuestsLoaded: false,
};

const questsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
      state.isQuestsLoaded = true;
    })
    .addCase(loadQuestById, (state, action) => {
      state.questById = action.payload;
    });
});

export {questsData};
