import React from 'react';
import * as Style from './styleSalongListObject';
import {Link} from 'react-router-dom';

let salongListObject = (props) =>{
    let data = props.props;

    const linkStyle ={

        textDecoration:'none',
        color:'black'
    };
    const spanStyleAdress ={

        fontSize:'5vw',
        color:'grey'
    };
    
    return(
            
                <Link style={linkStyle} to={"/" + data.id}>
                    <Style.container>
                    <Style.leftColumn>
                        <span>{data.open}</span> 
                        
                        
                    </Style.leftColumn>

                    <Style.middleColumn>
                        <span>{data.name}</span>
                        
                        <Style.starCollection>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <p>(32)</p>
                        </Style.starCollection>
                        <span style={spanStyleAdress} >{data.adress.slice(0,-18)}</span>
                        
                    </Style.middleColumn>

                    <Style.rightColumn>
                    <span>{data.price +" kr"}</span>
                    <p>30min</p>
                    </Style.rightColumn>

                    <Style.arrowColumn>
                    
                    <i class="fas fa-chevron-right"></i>
                    </Style.arrowColumn>
                 
                    </Style.container>
                </Link>
            
    );
}


export default salongListObject;


