import {render} from '@testing-library/react';
import { BrowserRouter } from 'components/common/common';
import {createMemoryHistory} from 'history';
import LoadingScreen from './loading-screen';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../app/common';
import * as S from '../app/app.styled';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
        <BrowserRouter history={history}>
          <LoadingScreen />
        </BrowserRouter>
      </ThemeProvider>,
    );
    const headerElement = getByText('Loading...');

    expect(headerElement).toBeInTheDocument;
  });
});
