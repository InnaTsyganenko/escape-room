import {questsData} from './quests-data';
import {ActionType} from '../action';

const film = [
  {
    id: 1,
    name: 'The Grand Budapest Hotel',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/the-grand-budapest-hotel.jpg',
    backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://some-link',
    previewVideoLink: 'https://some-link',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.',
    rating: '8.9',
    scoresCount: '240',
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton'],
    runTime: '99',
    questType: 'Comedy',
    released: '2014',
    isFavorite: false,
  },
];

const comments = [
  {
    id: 1,
    user: {
      id: 4,
      name: 'Kate Muir',
    },
    rating: 8.9,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed quests in years.',
    date: '',
  },
];

describe('Reducer: questsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(questsData(undefined, {}))
      .toEqual({promo: {}, quests: [], similarMovies: [], comments: [], isDataLoaded: false});
  });

  it('should update promo by load promo', () => {
    const state = {promo: {}};
    const promo = film[0];
    const loadPromo = {
      type: ActionType.LOAD_PROMO,
      payload: promo,
    };

    expect(questsData(state, loadPromo))
      .toEqual({promo});
  });

  it('should update quests by load quests', () => {
    const state = {quests: [], isDataLoaded: false};
    const quests = film;
    const loadQuests = {
      type: ActionType.LOAD_QUESTS,
      payload: quests,
    };

    expect(questsData(state, loadQuests))
      .toEqual({quests, isDataLoaded: true});
  });

  it('should update similar quests by load similar quests', () => {
    const state = {similarMovies: []};
    const similarMovies = film;
    const loadSimilarMovies = {
      type: ActionType.LOAD_SIMILAR,
      payload: similarMovies,
    };

    expect(questsData(state, loadSimilarMovies))
      .toEqual({similarMovies});
  });

  it('should update comments by load comments', () => {
    const state = {comments: []};
    const loadQuestById = {
      type: ActionType.LOAD_QUEST_BY_ID,
      payload: comments,
    };

    expect(questsData(state, loadQuestById))
      .toEqual({comments});
  });
});
