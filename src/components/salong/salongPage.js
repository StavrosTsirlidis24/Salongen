import React from 'react';
import * as Style from './styleSalongPage';
import {Link} from 'react-router-dom';

let salongPage= (props) =>{
    let salongData = props.props.salongData;
    let projectId = props.projectId;

    const heartStyle ={

        fontSize: '6vw',
        paddingTop:'10px'
    };

    const arrowDown ={

        color: '#cca300'
    };
    
    for(let i=0; i<salongData.length;i++){
        
        if(salongData[i].id == projectId){

            return(
                <Style.container>
                    <Style.header>

                        <Style.topHeader>
                                <Link to="/"><i class="fas fa-angle-left"></i></Link>
                                <i style={heartStyle}  class="far fa-heart"></i>
                        </Style.topHeader>

                        <Style.bottomHeader>
                                <p>{salongData[i].name}</p>  
                                <Style.starCollection>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <p>(32)</p>
                                </Style.starCollection>
                        </Style.bottomHeader>    

                    </Style.header>

                    <Style.middleNav>
                        <Style.infoButton>Info</Style.infoButton>
                        <Style.schemaButton>Schema</Style.schemaButton>
                    </Style.middleNav>

                <Style.main>
                    
                    <span><i class="fas fa-map-marker-alt"></i>{salongData[i].adress}</span> 
                    <span><i class="fas fa-clock"></i>{"Öppet till " + salongData[i].close + " idag "} <i style={arrowDown} class="fas fa-angle-down"></i></span> 
                    <span><i class="fas fa-phone-alt"></i>{salongData[i].phone}</span> 
                    <span><i class="fas fa-globe"></i>{salongData[i].webadress}</span> 
                    <p>Lorem ipsum dolor sit amet, vulputate nunc. 
                       Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, 
                       acu quis torquent iaculis ultricies massa, duis nun quis que amet.</p>
                    
                </Style.main>
                
                </Style.container>
            
            
        );
            
        }
        
    }
   
  
}


export default salongPage;
