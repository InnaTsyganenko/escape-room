import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: #1A1A1A;
`;

const ContentWrapper = styled.div`
  max-width: 1080px;
  flex-shrink: 0;
  width: 100%;
  margin: 0 auto;
  margin-top: 136px;
  margin-bottom: 40px;
`;

const PageHeading = styled.div`
  margin-bottom: 46px;
  padding-bottom: 29px;
  padding-left: 6px;
  position: relative;
`;

const PageTitle = styled.h1`
  margin: 0;
  padding: 0;

  font-size: 36px;
  line-height: 110%;
  font-weight: 800;
  color: white;
`;

export {
  Main,
  ContentWrapper,
  PageHeading,
  PageTitle,
};
