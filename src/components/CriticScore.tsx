import { Badge } from "@chakra-ui/react"

interface Props {
    score: number
}
export default function CriticScore({score}: Props) {

    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
      <>
      <Badge color={color} fontSize="15px">{score}</Badge>
      </>
  )
}
