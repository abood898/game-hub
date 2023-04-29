import "./App.css";
import { useEffect, useState } from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);

  return (
    <div className="App">
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenreId={selectedGenreId}
              onSelectGenreId={(id) => setSelectedGenreId(id)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector />
          <GameGrid selectedGenreId={selectedGenreId} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
