import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30pt;
  text-align: start;
  color: #fff;
`;

export const GamesRatingArea = styled.div`
  width: 100%;
  height: max-content;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
