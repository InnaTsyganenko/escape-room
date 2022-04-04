import {render} from '@testing-library/react';
import { BrowserRouter } from 'components/common/common';
import {createMemoryHistory} from 'history';
import BookingModal from './booking-modal';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '../../../app/common';
import * as S from '../../../app/app.styled';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

const mockStore = configureStore();
let store: any;

describe('Component: BookingModal', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    store = mockStore({
      DATA: {quests: [], isDataLoaded: true},
      QUESTS: {type: 'Все квесты', pickedId: 0},
    });
  });

  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
        <S.GlobalStyle />
          <BrowserRouter history={history}>
            <BookingModal />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>,
    );
    const headerElement = getByText('Оставить заявку');

    expect(headerElement).toBeInTheDocument();
  });
});
