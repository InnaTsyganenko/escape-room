import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import { connect } from 'react-redux';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import NotFoundScreen from 'components/not-found-screen/not-found-screen';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from 'const';

const App = (props) => {
  const { pickedId } = props;
  console.log(pickedId);

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={`${AppRoute.QUEST}${pickedId}`}>
            <DetailedQuest />
          </Route>
          <Route exact path={AppRoute.CONTACTS}>
            <Contacts />
          </Route>
          <Route exact path={AppRoute.ROOT}>
            <Home />
          </Route>
          <Route >
            <NotFoundScreen />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
)};

const mapStateToProps = ({DATA, MOVIES}) => ({
  isDataLoaded: DATA.isDataLoaded,
  genre: MOVIES.genre,
  moviesCountForRender: MOVIES.moviesCountForRender,
  pickedId: MOVIES.pickedId,
});

export {App};
export default connect(mapStateToProps, null)(App);
