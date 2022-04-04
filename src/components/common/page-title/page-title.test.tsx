import {render} from '@testing-library/react';
import { BrowserRouter } from 'components/common/common';
import PageTitle from './page-title';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../app/common';
import 'jest-styled-components';

describe('Component: PageTitle', () => {
  it('should render correctly', () => {
    const {container} = render(
        <ThemeProvider theme={appTheme}>
          <BrowserRouter history>
            <PageTitle children />
          </BrowserRouter>
        </ThemeProvider>,
    );

    expect(container.firstChild).toHaveStyleRule('font-size', appTheme.font.semilarge);
  });
});
