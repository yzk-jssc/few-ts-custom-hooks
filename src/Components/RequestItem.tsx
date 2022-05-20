import axios from 'axios';
import React, { FunctionComponent, useEffect } from 'react'
import UseRequest from './Hooks/useRequest';
import { AlbumsListI } from '../types/types';

interface RequestItemProps {
    
}
 
const RequestItem: FunctionComponent<RequestItemProps> = () => {

    const {data,loading,error} = UseRequest(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
    
    if(error){
        return <h1>Error upload information</h1>
    }

    return (
        <div>
            {
                loading
                ? <h1>Loading..</h1>
                : 
                data.map(elem=>
                    <div key ={elem.id}>{elem.id}. {elem.title}</div>    
                )
            }
        </div>
    );
}
 
export default RequestItem;
