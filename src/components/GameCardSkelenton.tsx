import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkelenton() {
  return (
        <Card.Root width={350} borderRadius="lg" overflow="hidden">
            <Skeleton height={200}/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card.Root>
  )
}
