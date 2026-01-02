
import apiClient from "@/services/api_client.ts";
import {useEffect, useState} from "react";
import type {AxiosRequestConfig} from "axios";



interface FetchResponse<T> {
    count: number;
    results: T[]
}


const  UseData = <T>(endPoint : string ,  requestConfig?: AxiosRequestConfig  , deps? : any[]) => {

    const [data, setdata] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {

        setIsLoading(true)

        apiClient.get<FetchResponse<T>>(endPoint , {...requestConfig})
            .then(res => {
                setdata(res.data.results);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    } , deps ? [...deps] : [] )

    return {data , error , isLoading}
}



export default UseData;