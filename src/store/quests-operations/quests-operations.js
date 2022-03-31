import { createReducer } from '@reduxjs/toolkit';
import { getTypeForFilterQuests, getIdQuest, resetState } from '../action';
import { DEFAULT_TYPE } from '../../const';

const initialState = {
  type: DEFAULT_TYPE,
};

const questsOperations = createReducer(initialState, (builder) => {
  builder
    .addCase(getTypeForFilterQuests, (state, action) => {
      state.type = action.payload;
    })
    .addCase(getIdQuest, (state, action) => {
      state.pickedId = action.payload;
    })
    .addCase(resetState, (state) => {
      state.type = initialState.type;
    })
});

export {questsOperations};
