import React, {Component} from 'react';
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
    
    return(
        
        <div>
            <select onChange={this.onChangeHandler}>
                <option value="150-450">Alla</option>
                <option value="150-250">150-250</option>
                <option value="250-350">250-350</option>
                <option value="350-450">350-450</option>
            </select>
            {salonger.map(element =>{ 
                    if(element.price === this.state.filterPrice){
                        return <SalongListObject key={element.id} props={element}/>
                    }
                    else if(this.state.filterPrice === "150-450"){
                        return <SalongListObject key={element.id} props={element}/>
                    }
                    
                })
            }
            
        </div>
 
    );

    }
    
}
export default salongList;
