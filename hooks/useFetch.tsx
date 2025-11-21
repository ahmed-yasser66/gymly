import { useEffect, useState } from "react";

export default function useFetch(url: string, options: object) {
    //hooks
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    //effects
    useEffect(() => {
        fetchData();
    }, []);
    //helpers
    async function fetchData() {
        try {
            setIsLoading(true);
            const resp = await fetch(url, options);
            if (!resp.ok) throw Error("");
            const json = await resp.json();
            setData(json);
        } catch {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    return { data, isLoading, isError };
}