import {render} from '@testing-library/react';
import Container from './container';
import 'jest-styled-components';

describe('Component: Container', () => {
  it('should render correctly', () => {
    const {container} = render(
      <Container children />
    );

    expect(container.firstChild).toHaveStyleRule('width', '100%');
  });
});
