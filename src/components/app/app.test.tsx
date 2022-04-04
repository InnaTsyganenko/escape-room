import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'components/common/common';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AppRoute, DEFAULT_TYPE } from '../../const';
import App from './app';

let history = null;
let store = null;
let fakeApp : any = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore();
    store = createFakeStore({
      DATA: {quests: [], isDataLoaded: true},
      QUESTS: {type: DEFAULT_TYPE, pickedId: 0},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "QuestsScreen" when user navigate to "/"', () => {
    history.push(AppRoute.ROOT);
  });

  it('should render "QuestScreen" when user navigate to "/detailed-quest/"', () => {
    history.push(AppRoute.QUEST);
    render(fakeApp);
  });

  it('should render "ContactsScreen" when user navigate to "/contacts"', () => {
    history.push(AppRoute.CONTACTS);
  });
});
