import * as S from './loading-screen.styled';

function LoadingScreen() {
  return (
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <S.PageTitle>Loading... </S.PageTitle>
        </S.PageHeading>
      </S.ContentWrapper>
    </S.Main>
  );
}

export default LoadingScreen;
