import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.png"
import {ColorModeButton} from "@/components/ui/color-mode.tsx";
import SearchInput from "@/components/SearchInput.tsx";

interface  Props {
    onSearch: (searchText: string) => void;
}
const Navbar = ({onSearch} : Props) => (
    <HStack padding="10px">
        <Image src={logo} boxSize="45px" />
        <SearchInput onSearch = {onSearch}/>
        <ColorModeButton />

    </HStack>
);

export default Navbar;