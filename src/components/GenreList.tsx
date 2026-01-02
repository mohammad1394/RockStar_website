
import UseGenres, {type Genre} from "@/hooks/UseGenres.ts";
import {Button, DataList, Heading, HStack, Image,} from "@chakra-ui/react";
import GenreListSkelenton from "@/components/GenreListSkelenton.tsx";



interface Props{
    onSelectedGenre : (genre: Genre) => void
    selectedGenre : Genre | null
}

export  default function  GenreList({selectedGenre,onSelectedGenre }: Props  , ){







    const {data , isLoading , error} = UseGenres();

    if (error){
        return  null
    }



    const Skeletons = [1 , 2 , 3 , 4 , 5 , 6 , 7 ,8  , 9 , 10 , 11 , 12]

    return(
        <>
        {isLoading && Skeletons.map(skeleton => <GenreListSkelenton key={skeleton}/>)}
        <Heading marginY = "20px" fontSize="3xl">Genres</Heading>
        <DataList.Root>
            {data.map(genre => (
                <DataList.Item key={genre.id}>
                    <HStack>
                    <Image
                        boxSize="32px"
                        borderRadius='10px'
                        objectFit="cover"
                        src = {genre.image_background}
                    />
                     <Button fontWeight = {genre.id == selectedGenre?.id ? '800' : 'normal'} variant = "plain" onClick = {() => onSelectedGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </DataList.Item>
            ))}
        </DataList.Root>
        </>
    )
}