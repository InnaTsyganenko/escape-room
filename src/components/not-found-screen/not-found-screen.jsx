import { AppRoute } from 'const';
import * as S from './not-found-screen.styled';

const Contacts = () => (
  <S.Main>
    <S.ContentWrapper>
      <S.PageHeading>
        <S.PageTitle>Oooops! 404. The page does not exist.</S.PageTitle>
      </S.PageHeading>
      <S.Link to={AppRoute.ROOT}>Go to main page?</S.Link>
    </S.ContentWrapper>
  </S.Main>
);

export default Contacts;
