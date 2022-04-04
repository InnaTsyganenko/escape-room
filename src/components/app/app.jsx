import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'components/common/common';
import { connect } from 'react-redux';
import LoadingScreen from 'components/loading-screen/loading-screen';
import Home from 'components/home/home';
import Contacts from 'components/contacts/contacts';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import NotFoundScreen from 'components/not-found-screen/not-found-screen';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from 'const';

const App = (props) => {

  const { isDataLoaded, pickedId } = props;

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }


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

const mapStateToProps = ({DATA, QUESTS}) => ({
  isDataLoaded: DATA.isDataLoaded,
  pickedId: QUESTS.pickedId,
});

export {App};
export default connect(mapStateToProps, null)(App);
