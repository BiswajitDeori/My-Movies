import { Container } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import MainNav from './Component/MainNav'
import Movies from './MainComp/Movies/Movies'
import Treading from './MainComp/Treading/Treading'
import Series from './MainComp/Series/Series'
import Search1 from './MainComp/Search/Search1'



export default function App() {
  return (
    <BrowserRouter>
  <Header/>
<div className="app">

  <Container>
<Switch>

<Route path='/' component={Treading} exact/>
<Route path='/Movies' component={Movies} />
<Route path='/Series' component={Series} />
<Route path='/Search' component={Search1} />


</Switch>



  </Container>
    </div>

<MainNav/>
    </BrowserRouter>
   
  )
}
