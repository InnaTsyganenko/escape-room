import {render} from '@testing-library/react';
import Footer from './footer';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../app/common';
import 'jest-styled-components';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const {container} = render(
        <ThemeProvider theme={appTheme}>
          <Footer />
        </ThemeProvider>,
    );

    expect(container.firstChild).toHaveStyleRule('position', 'fixed');
  });
});
