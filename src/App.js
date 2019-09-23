import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import SalongList from './components/salongList/salongList';
import SalongData from './data/salongData.json';
import './App.css';

class App extends Component {
  state = {
    salongData:SalongData
  }
 
  
  render(){
  return (
    
    <div className="App">
      <header className="App-header">
       <h1>Salongen</h1>
       <SalongList props={this.state.salongData} />
      </header>
    </div>
   
  );
}
}

export default App;
