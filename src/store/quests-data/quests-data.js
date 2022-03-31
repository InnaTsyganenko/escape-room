import { createReducer } from '@reduxjs/toolkit';
import { loadQuests, loadQuestById } from '../action';

const initialState = {
  quests: [],
  questById: {},
  isDataLoaded: false,
};

const questsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.isDataLoaded = true;
      state.quests = action.payload;
    })
    .addCase(loadQuestById, (state, action) => {
      state.questById = action.payload;
    });
});

export {questsData};
