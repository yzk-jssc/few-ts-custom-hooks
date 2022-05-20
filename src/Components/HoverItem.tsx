import React, { FunctionComponent, useRef } from 'react'
import UseHover from './Hooks/useHover';

interface HoverItemProps {
    
}
 
const HoverItem: FunctionComponent<HoverItemProps> = () => {

    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
    const isHovering = UseHover(ref)
   

    return (

        <div className='hook__item'>
             <div  ref={ref}  style={{width:'300px',height:'300px',background: isHovering ? 'blue' : 'green'}}>
            
            </div>
        </div>
       
    );
}
 
export default HoverItem;