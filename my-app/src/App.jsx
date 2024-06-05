import './App.css';

import logoImg from './assets/imgs/meteorite.png'
import NavBar from './components/navBar/navBar';
import './styles/App.css'


import React from 'react'

//componente em classe no React é um componente que
//herda a classe React e retorna HTML pelo render.

class App extends React.Component {

  render() {
    return (
      <NavBar />
    )
  }
}
 
export default App;
