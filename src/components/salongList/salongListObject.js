import React from 'react';
import {Link} from 'react-router-dom';

let salongListObject = (props) =>{
    let data = props.props;
    return(
            
            <div>
                <Link to={"/" + data.id}>
                    <h1>{data.name}</h1> 
                    <h2>{data.adress}</h2>
                    <h3>{data.priceLow +"-"+ data.priceHigh}</h3>  
                </Link>
            </div>
           
        
    );
}


export default salongListObject;


