
import {Box, Grid, GridItem, HStack, Stack,} from "@chakra-ui/react"
import Navbar from "@/components/Navbar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import {useState} from "react";
import type {Genre} from "@/hooks/UseGenres.ts";
import PlatformSelector from "@/components/PlatformSelector.tsx";
import type {Platform} from "@/hooks/UseGame.ts";
import SortSelector from "@/components/SortSelector.tsx";
import "./index.css"
import GameHeading from "@/components/GameHeading.tsx";



 export interface GameQuery {
    genre: Genre | null
    platform: Platform | null
    sortorder : string
    searchText : string
}



export  default  function  App(){


        const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery) ;

    console.log(gameQuery.sortorder)
    return (
        <Grid templateAreas={{
            base : `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}
        templateColumns = {{
            base: '1fr',
            lg: '200px 1fr'
        }}

        >

            <GridItem area='nav' >
                <Navbar onSearch = {(searchText) => setGameQuery({...gameQuery , searchText})}/>
            </GridItem>
            <Stack hideBelow='lg'>
            <GridItem area='aside' padding = "35px 20px">
                <GenreList selectedGenre={gameQuery.genre} onSelectedGenre = {(genre) => setGameQuery({...gameQuery , genre})}/>
            </GridItem>
            </Stack>
            <GridItem area='main'>
                <Box margin="0px 40px">
                    <GameHeading gameQuery = {gameQuery}/>
                    <HStack hideBelow='lg' >
                        <PlatformSelector selectedPlatform = {gameQuery.platform} onSelectedPlatform = {(platform) => setGameQuery({...gameQuery, platform})}/>
                        <SortSelector sortOrder={gameQuery.sortorder} onSelectedSortorder = {(sortorder) => setGameQuery({...gameQuery, sortorder})}/>
                    </HStack>
                </Box>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    )
}