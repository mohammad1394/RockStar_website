import UseData from "@/hooks/UseData.ts";

 interface Platforms {
     id : number;
     name : string;
     slug : string;
 }





const UsePlatforms = () => UseData<Platforms>('/platforms/lists/parents')


export default UsePlatforms