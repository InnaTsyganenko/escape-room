import {render} from '@testing-library/react';
import { BrowserRouter } from 'components/common/common';
import MainLayout from './main-layout';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../app/common';
import 'jest-styled-components';

describe('Component: MainLayout', () => {
  it('should render correctly', () => {
    const {container} = render(
        <ThemeProvider theme={appTheme}>
          <BrowserRouter history>
            <MainLayout children />
          </BrowserRouter>
        </ThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
