import axios from 'axios';
import { useEffect, useState } from 'react'
import { AlbumsListI } from '../../types/types';



export default function UseRequest(url:string) {

    const [data, setData] = useState<AlbumsListI[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setLoading(true)
        
        axios.get(url)
        .then(res=>setData(res.data))
        .catch(e=>setError(e))
        .finally(()=>setLoading(false))
    }, [url])
    

    return {data,loading,error}
}
