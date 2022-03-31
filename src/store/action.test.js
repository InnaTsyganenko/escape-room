import {
  getCountMoviesForSlice,
  getTypeForFilterQuests,
  getIdQuest,
  getMyList,
  addMovieInMyList,
  deleteMovieFromMyList,
  resetState,
  resetPickedId,
  ActionType
} from './action';


describe('Actions', () => {
  it('action creator for slice list quests returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_COUNT_MOVIES_FOR_SLICE,
      payload: 8,
    };

    const moviesCountForRender = 8;

    expect(getCountMoviesForSlice(moviesCountForRender)).toEqual(expectedAction);
  });

  it('action creator for filter list quests returns action with correct questType', () => {
    const expectedAction = {
      type: ActionType.GET_TYPE_FOR_FILTER,
      payload: 'Drama',
    };

    const questType = 'Drama';

    expect(getTypeForFilterQuests(questType)).toEqual(expectedAction);
  });

  it('action creator for get id quest returns action with correct id', () => {
    const expectedAction = {
      type: ActionType.GET_ID_QUEST,
      payload: 10,
    };

    expect(getIdQuest(10)).toEqual(expectedAction);
  });

  it('action creator for get my list returns action with correct my list', () => {
    const expectedAction = {
      type: ActionType.GET_MY_LIST,
      payload: [],
    };

    expect(getMyList([])).toEqual(expectedAction);
  });

  it('action creator for add quest in my list returns action with add quest id', () => {
    const expectedAction = {
      type: ActionType.ADD_MOVIE_IN_MY_LIST,
      payload: 9,
    };

    expect(addMovieInMyList(9)).toEqual(expectedAction);
  });

  it('action creator for delete quest from my list returns action with delete quest id', () => {
    const expectedAction = {
      type: ActionType.DELETE_MOVIE_FROM_MY_LIST,
      payload: null,
    };

    expect(deleteMovieFromMyList(null)).toEqual(expectedAction);
  });

  it('action creator for reset id returns action with promo id payload', () => {
    const expectedAction = {
      type: ActionType.RESET_ID,
      payload: 5,
    };

    expect(resetPickedId(5)).toEqual(expectedAction);
  });

  it('action creator for reset state returns action with undefined payload', () => {
    const expectedAction = {
      type: ActionType.RESET_STATE,
    };

    expect(resetState()).toEqual(expectedAction);
  });
});
