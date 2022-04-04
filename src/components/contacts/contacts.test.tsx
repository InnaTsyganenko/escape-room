import React from 'react';
import {render} from '@testing-library/react';
import { BrowserRouter } from 'components/common/common';
import {createMemoryHistory} from 'history';
import Contacts from '../contacts/contacts';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../app/common';
import * as S from '../app/app.styled';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const createFakeStore = configureStore();
    let store = createFakeStore({
      DATA: {quests: [], isDataLoaded: true},
      QUESTS: {type: 'Все квесты', pickedId: 0},
    });

describe('Component: Contacts', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
        <S.GlobalStyle />
          <BrowserRouter history={history}>
            <Contacts />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>,
    );
    const headerElement = getByText('Адрес');
    const linkElement = getByText('квесты в Санкт-Петербурге');

    expect(headerElement).toBeInTheDocument;
    expect(linkElement).toBeInTheDocument;
  });
});
