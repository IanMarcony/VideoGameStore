/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { api, API_KEY } from '../../service/api';
import { FiChevronLeft } from 'react-icons/fi';

import {
  PageConfig,
  Container,
  ReleasedInfo,
  Title,
  MetaCritic,
  InformationAbout,
  AreaInfo,
  ScreenshotsArea,
  Screenshot,
} from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Interna = () => {
  const [gameBody, setGameBody] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingPic, setLoadingPic] = useState(false);
  const [screenshots, setScreenshots] = useState([]);
  const { params } = useRouteMatch();
  let query = useQuery();
  function converterDate(date) {
    var [year, month, day] = date.split('-');
    var n_date = day + '/' + month + '/' + year;
    return n_date;
  }

  async function loadDataGame() {
    api
      .get(`/games/${params.idgame}?key=${API_KEY}`)
      .then((response) => {
        setGameBody(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
    api
      .get(`/games/${params.idgame}/screenshots?key=${API_KEY}`)
      .then((response) => {
        setScreenshots(response.data.results);
        setLoadingPic(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingPic(false);
      });
  }
  useEffect(() => {
    setLoadingPic(true);
    setLoading(true);
    loadDataGame();
  }, [params.idgame]);

  return (
    <>
      {!loading && gameBody ? (
        <Container>
          <header>
            <ReleasedInfo>{converterDate(gameBody.released)}</ReleasedInfo>

            <MetaCritic>Metascore: {gameBody.metacritic}</MetaCritic>

            <Link to={`/`}>
              <FiChevronLeft size={24} /> Voltar
            </Link>
          </header>
          <Title>{gameBody.name}</Title>
          <h2>Sobre</h2>
          <p>{gameBody.description_raw}</p>
          <h2>Screenshots</h2>

          <ScreenshotsArea>
            {loadingPic ? (
              <CircularProgress size={50} />
            ) : screenshots ? (
              screenshots.map((item, i) => (
                <Screenshot src={item.image} alt="Screenshot Game" key={i} />
              ))
            ) : (
              <h2>Sem fotos</h2>
            )}
          </ScreenshotsArea>
          <InformationAbout>
            <AreaInfo>
              <h3>Plataformas</h3>
              <section>
                {gameBody.platforms.map((item, i) =>
                  i === gameBody.platforms.length - 1
                    ? item.platform.name
                    : item.platform.name + ', ',
                )}
              </section>
            </AreaInfo>
            <AreaInfo>
              <h3>Metascore</h3>
              <section style={{ color: '#6dc849', fontWeight: '700' }}>
                {gameBody.metacritic}{' '}
              </section>
            </AreaInfo>
            <AreaInfo>
              <h3>Gênero</h3>
              <section>
                {gameBody.genres
                  ? gameBody.genres.map((item, i) =>
                      i === gameBody.genres.length - 1
                        ? item.name
                        : item.name + ',',
                    )
                  : 'Sem informação'}{' '}
              </section>
            </AreaInfo>
            <AreaInfo>
              <h3>Data de Lançamento</h3>
              <section>{converterDate(gameBody.released)}</section>
            </AreaInfo>
            <AreaInfo>
              <h3>Desenvolvedor</h3>
              <section>
                {gameBody.developers
                  ? gameBody.developers.map((item, i) =>
                      i === gameBody.developers.length - 1
                        ? item.name
                        : item.name + ', ',
                    )
                  : 'Sem informação'}{' '}
              </section>
            </AreaInfo>
            <AreaInfo>
              <h3>Classificação</h3>
              <section>
                {gameBody.esrb_rating ? gameBody.esrb_rating.name : 'LIVRE'}
              </section>
            </AreaInfo>
          </InformationAbout>
        </Container>
      ) : (
        <CircularProgress size={50} />
      )}
      <PageConfig imgBackground={gameBody ? gameBody.background_image : ''} />
    </>
  );
};

export default Interna;
