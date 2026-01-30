import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "PokeAPI",
        short_name: "PokeAPI",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pokeapi_192_square.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
