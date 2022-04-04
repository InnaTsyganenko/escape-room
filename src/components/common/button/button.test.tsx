import {render} from '@testing-library/react';
import Button from './button';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../app/common';
import 'jest-styled-components';

describe('Component: Button', () => {
  it('should render correctly', () => {
    const {container} = render(
        <ThemeProvider theme={appTheme}>
          <Button children />
        </ThemeProvider>,
    );

    expect(container.firstChild).toHaveStyleRule('color', appTheme.color.white);
  });
});
