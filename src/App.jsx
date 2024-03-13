import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { NavBar } from './components/NavBar'
import "./App.css"
import { ItemListConteiner } from './components/ItemListConteiner';

function App() {
  return( 
  <>
    <NavBar/>
    <ItemListConteiner greeting="Bienvenido a Domus Lake Resorts"/>
  </>
  )
}

export default App
