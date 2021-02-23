import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// no-unused-vars
import AndroidIcon from '../../assets/images/android-logo.svg';
import WebIcon from '../../assets/images/global.svg';
import IosIcon from '../../assets/images/iphone.svg';
import MacIcon from '../../assets/images/mac-os-logo.svg';
import NintendoIcon from '../../assets/images/nintendo.svg';
import PlaystationIcon from '../../assets/images/playstation-logotype.svg';
import WindowsIcon from '../../assets/images/windows.svg';
import XboxIcon from '../../assets/images/xbox-logo.svg';
import {
  Container,
  InformartionArea,
  HeadArea,
  MetaCritic,
  MoreInformation,
  Platforms,
} from './styles';

const GameItem = ({ id, name, imgURL, metacritic, platforms }) => {
  return (
    <>
      {imgURL && (
        <Container>
          <img src={imgURL} alt={name} />
          <InformartionArea>
            <HeadArea>
              <Platforms>
                {platforms &&
                  platforms.map((item, index) => (
                    <img
                      key={index}
                      src={PlaystationIcon}
                      alt={item.platform.name}
                    />
                  ))}
              </Platforms>

              <MetaCritic>Metascore: {metacritic}</MetaCritic>
            </HeadArea>
            <h1>{name}</h1>
            <Link to={`/interna/${id}/${name}`}>
              <MoreInformation>
                <FaPlus /> Mais Informações
              </MoreInformation>
            </Link>
          </InformartionArea>
        </Container>
      )}
    </>
  );
};

export default GameItem;
