/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { api } from "../../service/api";
import type {
  DetailedPokemon,
  DetailedPokemonAPI,
  ShortPokemon,
} from "./list-pokemons.model";
import axios from "axios";
import { PokemonCard } from "../../components/pokemon-card/pokemon-card.component";
import { useNavigate } from "react-router";
import * as S from "./list-pokemons.styles";

export function ListPokemons() {
  const [data, setData] = useState<DetailedPokemon[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const getPokemonPage = useCallback(
    async (page = 1, perPage = 20) => {
      const offset = (page - 1) * perPage;

      if (page == 1) {
        setIsLoading(true);
      }

      try {
        const response = await api.get<{ results: ShortPokemon[] }>(
          `/pokemon?limit=${perPage}&offset=${offset}`,
        );

        const detailedPromises = response.data.results.map((p) =>
          axios.get<DetailedPokemonAPI>(p.url),
        );
        const details = await Promise.all(detailedPromises);

        const result: DetailedPokemon[] = details.map((p, index) => {
          const pokemon = p.data;
          return {
            url: response.data.results[index].url,
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types.map((t) => t.type.name),
            sprites: pokemon.sprites.front_default,
          };
        });

        setData([...data, ...result]);
      } catch (err) {
        console.error(err);
      } finally {
        if (page == 1) {
          setIsLoading(false);
        }
      }
    },
    [page],
  );

  useEffect(() => {
    getPokemonPage(page, 20);
  }, [page]);

  return (
    <main>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <S.ContainerScreen>
          <S.ContainerCards>
            {data?.map((i) => (
              <PokemonCard
                onClick={() =>
                  navigate("/details", {
                    state: i,
                  })
                }
                key={i.id}
                data={i}
              />
            ))}
          </S.ContainerCards>
          <S.Button className="button" onClick={() => setPage(page + 1)}>
            Carregar Mais
          </S.Button>
        </S.ContainerScreen>
      )}
    </main>
  );
}
