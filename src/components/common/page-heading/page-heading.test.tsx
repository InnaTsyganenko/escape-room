import {render} from '@testing-library/react';
import PageHeading from './page-heading';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../app/common';
import 'jest-styled-components';

describe('Component: PageHeading', () => {
  it('should render correctly', () => {
    const {container} = render(
        <ThemeProvider theme={appTheme}>
          <PageHeading children />
        </ThemeProvider>,
    );

    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column-reverse');
  });
});
