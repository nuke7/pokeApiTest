import { useEffect, useState } from 'react';

import Card from '../components/Card';
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
  }, []);

  return (
    <div>
      <Header />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
      }}
      >
        {
          pokeData?.map((pokemon) => (
            <Card
              key={Math.random() * 9000}
              props={{ name: pokemon.name, weight: pokemon.weight, photo: pokemon.photo }}
            />
          ))
        }

      </div>

    </div>
  );
}
