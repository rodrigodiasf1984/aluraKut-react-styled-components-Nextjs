import styled from 'styled-components';

export const MainGrid = styled.main`
  width: 100%;
  grid-gap: 0.625rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 1rem;

  .profileArea {
    grid-area: 'profileArea';
    display: none;
    @media (min-width: 860px) {
      display: block;
    }
  }

  .welcomeArea {
    grid-area: 'welcomeArea';
  }

  .profileRelationsArea {
    grid-area: 'profileRelationsArea';
  }

  @media (min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: 'profileArea welcomeArea profileRelationsArea';
    grid-template-columns: 10rem 1fr 19.5rem;
  }
`;
