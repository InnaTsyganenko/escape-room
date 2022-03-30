import browserHistory from '../browser-history';
import { loadMovies, loadComments } from './action';
import { APIRoute } from 'const';
import { showAlert } from '../utils';

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.QUESTS)
    .then(({data}) => dispatch(loadMovies(data.map((element) => element))))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.QUESTS}${id}`)
    .then(({data}) => dispatch(loadComments(data)))
);

export const pushComment = (filmId, rating, comment) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}${filmId}`, {rating, comment})
    .then(() => browserHistory.push(`${APIRoute.MOVIES}/${filmId}`))
    .catch((err) => {
      showAlert(`Something wrong, please try again :( This is some kind of ${err}...`);
    })
);
