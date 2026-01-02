import {Input, InputGroup} from "@chakra-ui/react";
import {CiSearch} from "react-icons/ci";
import {useRef} from "react";

interface  Props {
    onSearch: (searchText: string) => void;
}



function SearchInput({onSearch} : Props) {

    const ref = useRef<HTMLInputElement>(null);


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (ref.current) {
               onSearch(ref.current.value)
            }
        }}>
            <InputGroup startElement={<CiSearch />} lg={{width : "90%" , margin: '0 auto'}}>
                <Input borderRadius = {20} placeholder = "Search..."  variant = "subtle" ref={ref} />
            </InputGroup>
        </form>
    );
}

export default SearchInput;