import React from 'react';
import {render} from '@testing-library/react';
import { BrowserRouter } from 'components/common/common';
import {createMemoryHistory} from 'history';
import QuestsCatalog from '../../home';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../../app/common';
import * as S from '../../../app/app.styled';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { QuestsList } from './quests-catalog.styled';
import 'jest-styled-components';

const createFakeStore = configureStore();
    let store = createFakeStore({
      DATA: {quests: [], isDataLoaded: true},
      QUESTS: {type: 'Все квесты', pickedId: 0},
    });

describe('Component: QuestsCatalog', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {container} = render(
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
        <S.GlobalStyle />
          <BrowserRouter history={history}>
            <QuestsCatalog />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>,
    );

    expect(container.querySelector(QuestsList)).toHaveStyleRule('display', 'grid');
  });
});
