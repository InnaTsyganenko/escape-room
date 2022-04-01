import { createReducer } from '@reduxjs/toolkit';
import { getTypeForFilterQuests, getIdQuest, resetPickedId, resetState } from '../action';
import { DEFAULT_TYPE } from '../../const';

const initialState = {
  type: DEFAULT_TYPE,
  pickedId: null,
};

const questsOperations = createReducer(initialState, (builder) => {
  builder
    .addCase(getTypeForFilterQuests, (state, action) => {
      state.type = action.payload;
    })
    .addCase(getIdQuest, (state, action) => {
      state.pickedId = action.payload;
    })
    .addCase(resetPickedId, (state) => {
      state.pickedId = initialState.pickedId;
    })
    .addCase(resetState, (state) => {
      state.type = initialState.type;
    });
});

export {questsOperations};
