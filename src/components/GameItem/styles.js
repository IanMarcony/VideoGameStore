import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: max-content;
  background-color: #202020;
  border-radius: 10px;
  color: #fff;
  img {
    width: 100%;
    height: 60%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* object-fit: cover; */
  }
`;

export const InformartionArea = styled.div`
  width: 100%;
  height: 100%;
  padding: 14px;

  h1 {
    margin-top: 4%;
    font-size: 30pt;
    color: #fff;
    font-weight: 700;
  }
`;

export const HeadArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const MetaCritic = styled.div`
  font-weight: 700;
  color: #6dc849;
  padding: 5px;
`;

export const MoreInformation = styled.div`
  display: flex;
  width: max-content;
  padding: 5px;
  color: #fff;
  font-weight: 700;
  font-size: 12pt;
  border-radius: 4px;
  background-color: #373737;
  margin: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#373737')};
  }
`;
export const Platforms = styled.div`
  max-width: 60%;
  height: max-content;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
