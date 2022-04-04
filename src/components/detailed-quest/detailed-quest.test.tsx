import React from 'react';
import {render} from '@testing-library/react';
import { BrowserRouter } from 'components/common/common';
import {createMemoryHistory} from 'history';
import DetailedQuest from './detailed-quest';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../app/common';
import * as S from '../app/app.styled';
import { PageTitle } from './detailed-quest.styled';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import 'jest-styled-components';
import {fetchQuestById} from '../../store/api-actions';
import {createAPI} from '../../services/api';
import {ActionType} from '../../store/action';

const mockStore = configureStore();
let history;
let store: any;

let api: any = null;

describe('Component: DetailedQuest', () => {
  beforeAll(() => {
    api = createAPI(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    history = createMemoryHistory();
    store = mockStore({
      DATA: {quests: [], isDataLoaded: true},
      QUESTS: {type: 'Все квесты', pickedId: 0},
    });
  });

  it('should render correctly', () => {
    const dispatch = jest.fn();
    const questLoader = fetchQuestById();
    const history = createMemoryHistory();
    const {container} = render(
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
        <S.GlobalStyle />
          <BrowserRouter history={history}>
            <DetailedQuest />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>,
    );

    expect(container.querySelector(PageTitle)).toHaveStyleRule('font-weight', '900');

    return questLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_QUEST_BY_ID,
          payload: [{fake: true}],
        });
      });
  });
});
