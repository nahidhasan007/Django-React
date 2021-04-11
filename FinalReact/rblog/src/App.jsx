import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './Navbar';

const App = () =>{
  return (
   <BrowserRouter>
      <Navbar />
      <Switch>

      </Switch>
   </BrowserRouter>
  )
}

export default App
