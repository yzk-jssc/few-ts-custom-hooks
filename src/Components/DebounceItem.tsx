import axios from 'axios'
import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import UseDebounce from './Hooks/useDebounce'
import UseInput from './Hooks/useInput'

interface DebounceItemProps {
    
}
 
const DebounceItem: FunctionComponent<DebounceItemProps> = () => {

    const [value, setValue] = useState<string| number>('')
    const debouncedSearch = UseDebounce(search,500)

    function search(query:string){
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(res=> res.data)
        .then(data=>{
            console.log(data);
            
        })
    }

    const changeHadler = (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
        debouncedSearch(e.target.value)

    }

    return ( 
        <div>
            <input onChange={changeHadler} value = {value} type="text" />
        </div>
    );
}
 
export default DebounceItem;