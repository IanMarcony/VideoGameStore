import { shade } from 'polished';
import styled from 'styled-components';

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
`;

export const LoadMore = styled.button`
  display: flex;
  width: max-content;
  padding: 5px;
  color: #fff;
  font-weight: 700;
  font-size: 20pt;
  border-radius: 4px;
  background-color: #373737;
  margin: 5px;
  transition: background-color 0.2s;
  border: 0;
  margin: 10px auto;
  &:hover {
    background-color: ${shade(0.2, '#373737')};
  }
`;
