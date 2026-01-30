import type { DetailedPokemon } from "../../screens/list-pokemons/list-pokemons.model";
import { PokemonTypes } from "../../util/pokemon-types";
import * as S from "./pokemon-card.styles";

export function PokemonCard({
  data,
  onClick,
}: {
  data: DetailedPokemon;
  onClick?: () => void;
}) {
  const mainType = data.types[0];
  const mainTypeStyles = PokemonTypes.find((type) => type.name === mainType);

  const typeInfos = data.types.map((type) => {
    const typeInfo = PokemonTypes.find((t) => t.name === type);
    return typeInfo;
  });

  return (
    <S.Container
      style={{
        cursor: onClick ? "pointer" : "default",
        backgroundColor: mainTypeStyles?.backgroundColor,
      }}
      onClick={onClick}
    >
      <S.ContainerInfos>
        <S.Number>N°{data.id.toString().padStart(3, "0")}</S.Number>
        <S.Title>{data.name}</S.Title>
        <S.ContainerTypes>
          {typeInfos.map((type) => (
            <S.Type style={{ backgroundColor: type?.color }} key={type?.name}>
              {type?.label}
            </S.Type>
          ))}
        </S.ContainerTypes>
      </S.ContainerInfos>
      <S.CardImage style={{ backgroundColor: mainTypeStyles?.color }}>
        <img src={data.sprites} alt={data.name} />
      </S.CardImage>
    </S.Container>
  );
}
