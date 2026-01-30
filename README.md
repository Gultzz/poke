# React + TypeScript + Vite

URL no Github Pages: [gultzz.github.io/poke](https://gultzz.github.io/poke/)

## Rodar o projeto

Primeiramente tenha o Git baixado no seu computador, caso não tenha, base por aqui [Git Download](https://git-scm.com/install/)

Após baixar e instalar o Git, abra o Git Bash e rode o comando `git clone https://github.com/Gultzz/poke.git`

Depois de finalizar o clone do projeto, abra a pasta onde o seu projeto foi instalado e instale as dependencias necessárias para rodar o projeto com o comando

`npm install`

Depois rode para rodar o projeto

`npm run dev`

Assim já deve abrir uma tela na rota [localhost:5173](http://localhost:5173/)

---

## Decisões

Muitas das minhas decisões aqui feitas, foram principalmente feitas por conta da API que não tem todos os dados necessários para ficar igual ao Figma, e caso tenha, eu não encontrei.

Por exemplo os icones de cada tipo de pokemon, na API tem coisas parecidas, mas não são iguais e não servem para ficar igual ao Figma, portanto eu deixei sem os icones de cada tipo de pokemon.
Outro exemplo é as cores de cada tipo de pokemon. Na API eu não encontrei as cores principais de cada tipo de pokemon e nem as cores de background, portanto eu criei o arquivo `src/util/pokemon-types.ts` para adicionar manualmente as cores e mais informações sobre cada tipo.

---

## Autoavaliação

Acredito que a parte principal eu consegui desenvolver bem, porém sem pensar muito em deixar o código muito semantico. Sem duvidas também daria para deixar o código mais limpo e bonito. Pois eu não tive muito tempo para o desenvolvimento e tentei prezar pelo resultado.

---

## Conclusão

Foi desenvolvido a tela de listagem de pokemons no estilo de "Mostrar mais" e também a tela de detalhes do pokemon ao clicar em um card de pokemon da tela de listagem
Também a parte de configuração/arquitetura do projeto foi bem desenvolvida e com sistema PWA
