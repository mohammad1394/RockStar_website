import {DataList, HStack, SkeletonCircle, SkeletonText} from "@chakra-ui/react";

function GenreListSkelenton() {
    return (
       <DataList.Root>
           <HStack padding="10px 0 ">
           <SkeletonCircle size={10}/>
           <SkeletonText noOfLines={1}/>
           </HStack>
       </DataList.Root>
    );
}

export default GenreListSkelenton;