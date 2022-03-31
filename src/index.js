import App from 'components/app/app';
import thunk from 'redux-thunk';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Router as BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { createAPI } from './services/api';
import { fetchQuestsList } from './store/api-actions';
import rootReducer from './store/root-reducer';
import browserHistory from './browser-history';

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

store.dispatch(fetchQuestsList());

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
