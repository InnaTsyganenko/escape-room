import React from 'react';
import {render} from '@testing-library/react';
import { BrowserRouter } from 'components/common/common';
import {createMemoryHistory} from 'history';
import NotFoundScreen from './not-found-screen';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../app/common';
import * as S from '../app/app.styled';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
        <BrowserRouter history={history}>
          <NotFoundScreen />
        </BrowserRouter>
      </ThemeProvider>,
    );
    const headerElement = getByText('Oooops! 404. The page does not exist.');
    const linkElement = getByText('Go to main page?');

    expect(headerElement).toBeInTheDocument;
    expect(linkElement).toBeInTheDocument;
  });
});
