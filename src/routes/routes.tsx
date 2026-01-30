import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { ListPokemons } from "../screens/list-pokemons/list-pokemons.screen";
import { DetailsPokemon } from "../screens/details-pokemon/details-pokemon.screen";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <ListPokemons />,
    },
    {
      path: "/details",
      element: <DetailsPokemon />,
    },
  ],
  {
    basename: "/poke/",
  },
);

export function Routes() {
  return <RouterProvider router={router} />;
}
