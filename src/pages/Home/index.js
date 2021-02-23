/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import GameItem from '../../components/GameItem';
import { api, API_KEY } from '../../service/api';

import { Title, GamesRatingArea, LoadMore } from './styles';

const Home = () => {
  const [games, setGames] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  async function loadGames() {
    if (loading) {
      return;
    }
    if (total > 0 && games.length === total) {
      return;
    }
    setLoading(true);

    const res = await api.get(`/games`, {
      params: {
        key: API_KEY,
        ordering: '-metacritic',
        page,
      },
    });

    setTotal(games.length);

    setGames([...games, ...res.data.results]);
    setLoading(false);
  }
  useEffect(() => {
    loadGames();
  }, [page]);

  return (
    <>
      <Title>Top Games</Title>
      <GamesRatingArea>
        {games &&
          games.map((game) => (
            <GameItem
              id={game.id}
              imgURL={game.background_image}
              metacritic={game.metacritic}
              name={game.name}
              platforms={game.platforms}
              key={game.id}
            />
          ))}
      </GamesRatingArea>
      {loading ? (
        <Title>Loading...</Title>
      ) : (
        <LoadMore onClick={() => setPage(page + 1)}>Carregar mais...</LoadMore>
      )}
    </>
  );
};

export default Home;
