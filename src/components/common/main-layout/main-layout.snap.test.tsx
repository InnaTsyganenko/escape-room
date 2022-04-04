import {render} from '@testing-library/react';
import { BrowserRouter } from 'components/common/common';
import MainLayout from './main-layout';
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

describe('Component: MainLayout', () => {
  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
          <BrowserRouter history>
            <MainLayout children />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
