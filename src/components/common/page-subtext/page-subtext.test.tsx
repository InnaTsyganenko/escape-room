import {render} from '@testing-library/react';
import { BrowserRouter } from 'components/common/common';
import PageSubtext from './page-subtext';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../app/common';
import 'jest-styled-components';

describe('Component: PageSubtext', () => {
  it('should render correctly', () => {
    const {container} = render(
        <ThemeProvider theme={appTheme}>
          <BrowserRouter history>
            <PageSubtext children />
          </BrowserRouter>
        </ThemeProvider>,
    );

    expect(container.firstChild).toHaveStyleRule('font-size', appTheme.font.semibase);
  });
});
