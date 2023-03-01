//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Componente1 from './Componentes/Componente1';
import Componente2 from './Componentes/Componente2';
import Componente3 from './Componentes/Componente3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Componente4 from './Componentes/Componente4';

class App extends Component{
  render(){
    
    return(
      <div className="App">
        <Componente1/>
        <Componente2/>
        <Componente3/>
        <Componente4/>
      </div>
    );
  }
}


export default App;
