import React, {Component} from 'react';
import * as Style from './styleSalongList';
import SalongListObject from '../salongList/salongListObject'
class salongList extends Component{

    state={
        filterPrice: '150-450'
    }
    onChangeHandler = (event) =>{
        this.setState({ filterPrice:event.target.value});
    }
    render(){
    let salonger = [...this.props.props.salongData];
    
    const dotsStyle ={
        fontSize: '6vw',
        paddingTop:'1.5vh'
    };

    return(
        
        <Style.container>
            <Style.header>

                <Style.topHeader>
                    <i class="fas fa-angle-left"></i> <p>Hår</p><i style={dotsStyle} class="fas fa-ellipsis-v"></i>
                </Style.topHeader>

                <Style.filterHeader>
                    <select onChange={this.onChangeHandler}>
                        <option value="150-450">Pris Alla</option>
                        <option value="150-250">Pris 150-250 kr</option>
                        <option value="250-350">Pris 250-350 kr</option>
                        <option value="350-450">Pris 350-450 kr</option>
                    </select>
                </Style.filterHeader>

            </Style.header>
            <Style.main>
                {salonger.map(element =>{ 
                        if(element.price === this.state.filterPrice){
                            return <SalongListObject key={element.id} props={element}/>
                        }
                        else if(this.state.filterPrice === "150-450"){
                            return <SalongListObject key={element.id} props={element}/>
                        }
                        
                    })
                }
            </Style.main>
            
        </Style.container>
 
    );

    }
    
}
export default salongList;
