import React from 'react';
import {Link} from 'react-router-dom';

let salongPage= (props) =>{
    let salongData = props.props.salongData;
    let projectId = props.projectId;
    
    for(let i=0; i<salongData.length;i++){
        
        if(salongData[i].id == projectId){

            return(
       
                <div>
                    <h1>{salongData[i].name}</h1> 
                    <Link to="/">Back</Link>
                </div>
            
            
        );
            
        }
        
    }
   
  
}


export default salongPage;
