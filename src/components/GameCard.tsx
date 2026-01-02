import type { Game } from "../hooks/UseGame.ts";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatForm from "./PlatForm.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "@/services/image_url.ts";



interface Props {
    game: Game
}

export default function GameCard({ game }: Props) {
    return (
        <Card.Root width={{md: 350 , lg: 250 , xl: 350} } borderRadius="lg" overflow="hidden">
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <Heading fontSize="lg">{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatForm platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card.Root>
    )
}
