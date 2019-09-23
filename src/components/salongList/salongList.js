import React from 'react';

import SalongListObject from '../salongList/salongListObject'
let salongList = (props) =>{
    let salonger = [...props.props.salongData];
    return(
 
        <div>
            
            {salonger.map(element => {
                
            return <SalongListObject key={element.id} props={element}/>
            })
            }
            
        </div>
 
    );
}
export default salongList;
