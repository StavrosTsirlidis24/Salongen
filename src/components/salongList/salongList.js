import React from 'react';
import Salong from '../salong/salong'
let salongList = (props) =>{
    let salonger = [...props.props];
    return(
    <div>
        
        {salonger.map(element => {
            
           return <Salong key={element.id} props={element}/>
        })
        }
        
    </div>
    );
}
export default salongList;
