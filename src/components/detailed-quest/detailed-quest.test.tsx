import {render} from '@testing-library/react';
import { BrowserRouter } from 'components/common/common';
import {createMemoryHistory} from 'history';
import DetailedQuest from './detailed-quest';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../app/common';
import * as S from '../app/app.styled';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import 'jest-styled-components';

const mockStore = configureStore();
let store: any;

describe('Component: DetailedQuest', () => {
  beforeAll(() => {
    store = mockStore({
      DATA: {quests: [], isDataLoaded: true},
      QUESTS: {type: 'Все квесты', pickedId: 0},
    });
  });

  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {container} = render(
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
        <S.GlobalStyle />
          <BrowserRouter history={history}>
            <DetailedQuest />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>,
    );

    expect(container.firstChild).toHaveStyleRule('display', 'flex');
  });
});
