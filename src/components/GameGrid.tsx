import {SimpleGrid, Text} from "@chakra-ui/react";
import useGame from "@/hooks/UseGame.ts";
import GameCard from "@/components/GameCard.tsx";
import GameCardSkelenton from "./GameCardSkelenton";
import type {GameQuery} from "@/App.tsx";

    interface Props {
         gameQuery : GameQuery

    }



  function GameGrid( {gameQuery} : Props) {


      const {data, error , isLoading} = useGame(gameQuery);
 
      const Skeletons = [1 , 2 , 3 , 4 , 5 , 6 , 7 ,8  , 9]
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns ={{sm:1 , md: 2 , lg: 3 , xl: 3}} gap={10} padding="10">
            {isLoading && Skeletons.map(skeleton => <GameCardSkelenton key={skeleton}/>)}
            
            {
                data.map((game) =>
                    (
                        <GameCard key={game.id} game={game} />
                    ))}
            </SimpleGrid>
        </>
    );
}

export default GameGrid;