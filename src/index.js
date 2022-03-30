import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { createAPI } from './services/api';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/root-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { fetchMoviesList } from './store/api-actions';
import { Router as BrowserRouter } from 'react-router-dom';
import browserHistory from './browser-history';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const api = createAPI(
  // eslint-disable-next-line no-use-before-define
  () => store.dispatch(),
);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(fetchMoviesList());

const persistor = persistStore(store);

render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter history={browserHistory}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
