import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import SalongList from './components/salongList/salongList';
import SalongPage from './components/salong/salongPage';
import SalongData from './data/salongData.json';



class App extends Component {
  state = {
    salongData:SalongData
  }
 
  
  render(){

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          
          <Route exact path='/' render={() => 
          <SalongList props ={this.state}/>} />

          <Route path='/:id' render={({match}) => 
          <SalongPage props = {this.state} projectId={match.params.id}/>} />
        
        </header>
      </div>
    </Router>
  );
}
}

export default App;
