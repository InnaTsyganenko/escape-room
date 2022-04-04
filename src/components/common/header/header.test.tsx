import {render} from '@testing-library/react';
import { BrowserRouter } from 'components/common/common';
import Header from './header';
import { Link } from './header.styled';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../app/common';
import 'jest-styled-components';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const {container} = render(
        <ThemeProvider theme={appTheme}>
          <BrowserRouter history>
            <Header />
          </BrowserRouter>
        </ThemeProvider>,
    );

    expect(container.querySelector(Link)).toHaveStyleRule('font-size', appTheme.font.semibase);
  });
});
