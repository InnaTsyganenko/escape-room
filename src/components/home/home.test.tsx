import {render} from '@testing-library/react';
import { BrowserRouter as Router } from 'components/common/common';
import {createMemoryHistory} from 'history';
import HomePage from './home';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../app/common';
import * as S from '../app/app.styled';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

const createFakeStore = configureStore();
let store = createFakeStore({
  DATA: {quests: [], isDataLoaded: true},
  QUESTS: {type: 'Все квесты', pickedId: 0},
});

describe('Component: HomePage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
        <S.GlobalStyle />
          <Router history={history}>
            <HomePage />
          </Router>
        </ThemeProvider>
      </Provider>,
    );
    const headerElement = getByText('Выберите тематику');
    const linkElement = getByText('квесты в Санкт-Петербурге');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
