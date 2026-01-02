import {Button, Menu, Portal} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";


interface Props {
    onSelectedSortorder : (sortOrder : string) => void;
    sortOrder : string;
}

function SortSelector({onSelectedSortorder , sortOrder} : Props) {


    const sortOrders = [
        {value : '' , label : 'Relevance'},
        {value : 'added' , label : 'Data added'},
        {value : 'name' , label : 'Name'},
        {value : 'released' , label : ' Release date'},
        {value : 'metacritic' , label : 'Popularity'},
        {value : 'rating' , label : 'Averageg rating'},
    ]

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm"   >
                    Order by : {currentSortOrder?.label || 'Relevance'}
                    <BsChevronDown/>
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content minW="10rem">
                        <Menu.RadioItemGroup>
                            {sortOrders.map((sortOrder) => (
                                <Menu.RadioItem onClick={() => onSelectedSortorder(sortOrder.value)} key={sortOrder.value} value ={sortOrder.value}>
                                    {sortOrder.label}
                                </Menu.RadioItem>
                            ))}
                        </Menu.RadioItemGroup>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
}

export default SortSelector;