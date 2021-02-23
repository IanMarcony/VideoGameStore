import { shade } from 'polished';
import styled, { createGlobalStyle } from 'styled-components';

export const PageConfig = createGlobalStyle`
  body{
    background-image:  url(${(props) =>
      props.imgBackground ? props.imgBackground : ''});

    background-repeat:no-repeat;
    background-position: top center;
    background-size:cover ;
    
    width:100%;
    height:100%;
   
    }
     #root{
      width:100%;
      height:100%;
      background-color: #151515;
      opacity: 0.9;
      background-size:100% ;

     }


   
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #fff;
  header {
    display: flex;
    align-items: center;
    a {
      display: flex;
      margin-left: auto;
      text-decoration: none;
      align-items: center;
      color: #fff;
      font-size: 24px;
      svg {
        color: #fff;
      }
      &:hover {
        color: ${shade(0.2, '#FFF')};
      }
    }
  }
  h2 {
    font-weight: 700;
  }
`;

export const Platforms = styled.div`
  img {
    width: 25px;
    height: 25px;
    margin: 4px;
    color: #fff;
  }
  svg {
    fill: #fff;
  }
`;

export const ReleasedInfo = styled.div`
  display: flex;
  width: max-content;
  padding: 5px;
  background-color: #fff;
  align-items: center;
  color: #000;
  font-weight: 700;

  margin-right: 10px;
  border-radius: 6px;
`;

export const Title = styled.h1`
  margin-top: 14px;
  font-weight: 700;
  font-size: 30pt;
  text-align: start;
  margin: 15px auto;
  color: #fff;
`;
export const MetaCritic = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #6dc849;
  padding: 5px;
`;

export const InformationAbout = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AreaInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  h3 {
    color: #fff;
    font-size: 25px;
    margin-bottom: 5px;
  }
  section {
    display: flex;
    width: 100%;
  }
`;

export const ScreenshotsArea = styled.div`
  width: 100%;
  margin: 15px auto;
  display: flex;

  scroll-behavior: smooth;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const Screenshot = styled.img`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin: 18px;
  object-fit: contain;
  opacity: 1;
  pointer-events: none;
`;
