import { 
    FaXbox,
    FaWindows,
    FaPlaystation,
    FaApple,
    FaLinux,
    FaAndroid
} from "react-icons/fa"
import type { Platform } from "@/hooks/UseGame.ts"
import { HStack, Icon } from "@chakra-ui/react"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import type { IconType } from "react-icons"

interface Props {
    platforms: Platform[]
}
    const iconMap:{[key : string ] : IconType} = {
        pc : FaWindows,
        playstation : FaPlaystation,
        xbox : FaXbox,
        nintendo : SiNintendo,
        mac : FaApple,
        linux : FaLinux,
        android : FaAndroid,
        ios : MdPhoneIphone,
        web : BsGlobe,
    }

export default function PlatForm({ platforms }: Props) {
    return (
        <HStack margin='5px 5px'>
            {platforms.map(platform =><Icon as = {iconMap[platform.slug]} key={platform.id} color='gray.500'/>)}
        </HStack>
    )
}
