import {Button, Menu, Portal} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import UsePlatforms from "@/hooks/UsePlatforms.ts";
import type {Platform} from "@/hooks/UseGame.ts";
import {FaCheck} from "react-icons/fa";
import {useState} from "react";


interface Props {
    onSelectedPlatform : (platform : Platform) => void;
    selectedPlatform: Platform | null;

}



function PlatformSelector({onSelectedPlatform , selectedPlatform }: Props) {

    const {data ,error} = UsePlatforms();
    const [value , setValue] = useState(selectedPlatform?.name);

    if(error) return null;
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm"   >
                    {selectedPlatform?.name || 'platform selected'}
                    <BsChevronDown/>
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content minW="10rem">
                        <Menu.RadioItemGroup
                            value = {value}
                            onValueChange = {(e) => {setValue((e.value))
                            const platform = data?.find((p) => p.name === e.value);
                            if (platform) onSelectedPlatform(platform);
                            }}
                        >
                            {data.map((platform) => (
                                <Menu.RadioItem onClick ={() => onSelectedPlatform(platform)} key={platform.id} value={platform.name}>
                                    {platform.name}
                                    <Menu.ItemIndicator>
                                        <FaCheck size={14} />
                                    </Menu.ItemIndicator>
                                </Menu.RadioItem>
                            ))}
                        </Menu.RadioItemGroup>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
}

export default PlatformSelector;