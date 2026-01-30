import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { api } from "../../service/api";
import { PokemonTypes } from "../../util/pokemon-types";
import type { DetailedPokemon } from "../list-pokemons/list-pokemons.model";
import * as S from "./details-pokemon.styles";
import { CardInfo } from "../../components/card-info/card-info.component";
import { MarsIcon, VenusIcon } from "lucide-react";

type FullDetailedPokemon = {
  abilities: {
    ability: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
  sprites: {
    other: {
      showdown: {
        front_default: string;
      };
    };
  };
};

export function DetailsPokemon() {
  const { state }: { state: DetailedPokemon } = useLocation();
  const [data, setData] = useState<FullDetailedPokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const mainAbility = data?.abilities[0].ability.name || "N/A";

  const mainType = state.types[0];
  const mainTypeStyles = PokemonTypes.find((type) => type.name === mainType);

  const typeInfos = state.types.map((type) => {
    const typeInfo = PokemonTypes.find((t) => t.name === type);
    return typeInfo;
  });
  const image = data?.sprites?.other?.showdown?.front_default || state.sprites;
  const weight = data ? data.weight / 10 : 0;
  const height = data ? data.height / 10 : 0;

  const malePercentage = 87.5;
  const femalePercentage = 12.5;

  const getPokemonDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(state.url);
      setData(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [state.url]);

  useEffect(() => {
    getPokemonDetails();
  }, [state.url]);

  return (
    <S.ContainerScreen>
      <S.BackgroundHero style={{ backgroundColor: mainTypeStyles?.color }}>
        <S.ImageHero src={image} alt={state.name} />
      </S.BackgroundHero>
      <S.ContainerInfos>
        <S.Title>{state.name}</S.Title>
        <S.Number>N°{state.id.toString().padStart(3, "0")}</S.Number>
        <S.ContainerTypes>
          {typeInfos.map((type) => (
            <S.Type style={{ backgroundColor: type?.color }} key={type?.name}>
              {type?.label}
            </S.Type>
          ))}
        </S.ContainerTypes>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          sollicitudin dui sapien. Mauris venenatis suscipit posuere. Nunc
          ornare dapibus augue eget tristique. In ac dictum dui. Praesent non
          massa vel nulla luctus vulputate id eleifend est. Pellentesque
          vulputate ex eu feugiat viverra. Nunc mi nisi, egestas id urna sit
          amet, finibus viverra eros. Maecenas sit amet sem et mi vestibulum
          sollicitudin sit amet non turpis. Pellentesque tempus nisl ut lectus
          varius, in maximus erat tincidunt. Proin nisi massa, finibus id auctor
          a, elementum non mauris. (Não achei na API essa descrição, acredito
          que não tem)
        </S.Description>
        {!isLoading && (
          <>
            <S.ContainerListInfos>
              <CardInfo icon="Weight" info={weight + " kg"} label="Peso" />
              <CardInfo icon="Ruler" info={height + " m"} label="Altura" />
              <CardInfo icon="Tag" info="IDK" label="Categoria" />
              <CardInfo icon="Star" info={mainAbility} label="Habilidade" />
            </S.ContainerListInfos>
            <S.ContainerGender>
              <S.GenderTitle>Gênero</S.GenderTitle>
              <S.ContainerProgress>
                <S.Progress>
                  <S.ProgressItem
                    style={{
                      width: `${malePercentage}%`,
                      background: "#2551C3",
                    }}
                  />
                  <S.ProgressItem
                    style={{
                      width: `${femalePercentage}%`,
                      background: "#FF7596",
                    }}
                  />
                </S.Progress>
                <S.DetailsProgress>
                  <S.DetailProgressItem>
                    <MarsIcon size={14} />
                    <S.DetailTitle>{malePercentage}%</S.DetailTitle>
                  </S.DetailProgressItem>
                  <S.DetailProgressItem>
                    <VenusIcon size={14} />
                    <S.DetailTitle>{femalePercentage}%</S.DetailTitle>
                  </S.DetailProgressItem>
                </S.DetailsProgress>
              </S.ContainerProgress>
            </S.ContainerGender>
          </>
        )}
      </S.ContainerInfos>
    </S.ContainerScreen>
  );
}
