import {useEffect, useState} from "react";
import axios from "axios";

export function useAxiosGet<T>(resourcePath: string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        axios.get<T>(`http://localhost:3000/${resourcePath}`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log(error)
                setHasError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [setData, setHasError, setLoading])

    return { data, loading, hasError }
}