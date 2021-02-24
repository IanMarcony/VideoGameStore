/* eslint-disable no-unused-vars */
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
                {platforms.map((item, i) =>
                  i === platforms.length - 1
                    ? item.platform.name
                    : item.platform.name + ', ',
                )}
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
