import {render} from '@testing-library/react';
import { BrowserRouter } from 'components/common/common';
import Header from './header';
import { Link } from './header.styled';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../app/common';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import 'jest-styled-components';

const createFakeStore = configureStore();
let store = createFakeStore({
  DATA: {quests: [], isDataLoaded: true},
  QUESTS: {type: 'Все квесты', pickedId: 0},
});

describe('Component: Header', () => {
  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
          <BrowserRouter history>
            <Header />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>,
    );

    expect(container.querySelector(Link)).toHaveStyleRule('font-size', appTheme.font.semibase);
  });
});
