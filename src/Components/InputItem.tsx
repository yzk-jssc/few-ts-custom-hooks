import React, { FunctionComponent } from 'react'
import UseInput from './Hooks/useInput';


interface InputItemProps {
    
}
 
const InputItem: FunctionComponent<InputItemProps> = () => {

    const name = UseInput('')
    const phoneNumber = UseInput('')

    return ( 
        <div className='hook__item'>
            <input {...name} type="text" placeholder='Name' />
            <input {...phoneNumber} type="number" placeholder='Phone Number'/>
            <button onClick={()=>console.log(name.value,phoneNumber.value)}>Show Values</button>
        </div>
    );
}
 
export default InputItem;