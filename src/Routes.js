import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import ConteoGrafica from './components/conteoGrafica';
import InfoGeneral from './components/infoGenereal';
import GrafCountry from './components/grafCountry';

const Routes = () => (
    <BrowserRouter>

    <Switch>
     
    
       <Route exact path = "/grafica" component = {ConteoGrafica}/> 
       <Route exact path = "/home" component = {Home}/>
       <Route exact path = "/" component = {InfoGeneral}/>  
       <Route exact path = "/porPais" component = {GrafCountry}/>  



    </Switch>
</BrowserRouter>
);

export default Routes;