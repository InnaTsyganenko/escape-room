import {questsOperations} from './quests-operations';
import {ActionType, getCountMoviesForSlice} from '../action';

describe('Reducer: questsOperations', () => {
  it('without additional parameters should return initial state', () => {
    expect(questsOperations(undefined, {}))
      .toEqual({questType: 'All genres', moviesCountForRender: 8});
  });

  it('should increment current quests count by a given value', () => {
    const state = {moviesCountForRender: 8};

    expect(questsOperations(state, getCountMoviesForSlice()))
      .toEqual({moviesCountForRender: 16});
  });

  it('should get questType to filter quests', () => {
    const state = {questType: 'All genres', moviesCountForRender: 8};
    const getTypeForFilterQuests = {
      type: ActionType.GET_TYPE_FOR_FILTER,
      payload: '',
    };

    expect(questsOperations(state, getTypeForFilterQuests))
      .toEqual({questType: '', moviesCountForRender: 8});

    const nonGetGenreAction = {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 'All genres',
    };

    expect(questsOperations(state, nonGetGenreAction))
      .toEqual({questType: 'All genres', moviesCountForRender: 8});
  });

  it('should get current id quest', () => {
    const state = {pickedId: 1};
    const getIdQuest = {
      type: ActionType.GET_ID_QUEST,
      payload: 1,
    };

    expect(questsOperations(state, getIdQuest))
      .toEqual({pickedId: 1});

    const nonGetIdAction = {
      type: ActionType.GET_ID_QUEST,
      payload: null,
    };

    expect(questsOperations(state, nonGetIdAction))
      .toEqual({pickedId: null});
  });

  it('should have reset state', () => {
    const resetStateAction = {
      type: ActionType.RESET_STATE,
      payload: null,
    };

    expect(questsOperations({questType: 'Drama', moviesCountForRender: 16}, resetStateAction))
      .toEqual({questType: 'All genres', moviesCountForRender: 8});

    expect(questsOperations({questType: 'Action', moviesCountForRender: 24}, resetStateAction))
      .toEqual({questType: 'All genres', moviesCountForRender: 8});

    expect(questsOperations({questType: 'Comedy', moviesCountForRender: 32}, resetStateAction))
      .toEqual({questType: 'All genres', moviesCountForRender: 8});
  });

  it('should have reset id', () => {
    const resetIdAction = {
      type: ActionType.RESET_ID,
      payload: null,
    };

    expect(questsOperations({pickedId: 10}, resetIdAction))
      .toEqual({pickedId: null});

    expect(questsOperations({pickedId: 5}, resetIdAction))
      .toEqual({pickedId: null});

    expect(questsOperations({pickedId: 8}, resetIdAction))
      .toEqual({pickedId: null});
  });
});
