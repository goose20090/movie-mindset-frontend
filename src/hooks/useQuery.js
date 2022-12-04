import {useState, useEffect} from "react"

function useQuery(url){
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);

    useEffect(()=>{
        setIsLoaded(false)
        fetch(url)
        .then((res)=> res.json())
        .then((data)=>{
            setData(data)
            setIsLoaded(true)
        });
    }, [url]);

    return {
        data: data,
        isLoaded: isLoaded,
    };
}

export default useQuery