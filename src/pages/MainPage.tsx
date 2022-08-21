/* eslint-disable max-len */
// eslint disable no-unused-vars
import { useEffect, useState } from 'react';

import Header from './Header';

type PokeData = {
  name: string;
  weight: number;
  photo: string;
};

interface IPokemon {
  name: string;
  url: string;
}

export default function MainPage() {
  const [pokeData, setPokeData] = useState<PokeData[] | null >();

  const pokemonFetch = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();
    const urls = data.results.map((pokemon: IPokemon) => pokemon.url);
    const promises = await Promise.all(
      urls.map(async (url: string) => {
        const resp = await (await fetch(url)).json();
        return { name: resp.name, weight: resp.weight, photo: resp.sprites.front_default };
      }),
    );
    setPokeData(promises);
  };

  useEffect(() => {
    pokemonFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <div>
        {pokeData && pokeData.map((pokemon, key) => (
          <p key={`${Math.random() * 1000 + key}`}>
            {pokemon.name}
            <p>
              Price:
              {' '}
              {pokemon.weight * 100}
            </p>
          </p>
        ))}
        {' '}

      </div>
    </div>
  );
}
