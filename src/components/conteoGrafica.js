import React, { createRef, useState, useEffect } from "react";
import 'antd/dist/antd.css';
import {Line} from '@ant-design/charts';
import GrafCountry from './grafCountry';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Home from '../Home';



function ConteoGrafica () {

    const [date, setDate] = useState([]);
    const [infectados, setInfectados]= useState([]);

     const data = [
        {fecha: '2020-11-02', infectados: 23},
        {fecha: '2020-11-02', infectados: 14},
        {fecha: '2020-11-03', infectados: 12},
        {fecha: '2020-11-04', infectados: 23},
        {fecha: '2020-11-05', infectados: 34},
        {fecha: '2020-11-06', infectados: 12},
        {fecha: '2020-11-07', infectados: 23},
        {fecha: '2020-11-08', infectados: 34},
        {fecha: '2020-11-09', infectados: 52},
        {fecha: '2020-11-10', infectados: 12},
        {fecha: '2020-11-11', infectados: 13},
        {fecha: '2020-11-12', infectados: 14},
        {fecha: '2020-11-13', infectados: 12},
        {fecha: '2020-11-14', infectados: 34},
        {fecha: '2020-11-15', infectados: 34},
         
         ]

    const configuracion = {
       
        data,
           title: {
               visible: true,
               text: "Registro de Contagios de Covid",
           },

        xField: 'fecha',
        yField: 'infectados',
        color: '#259fc',
         point:{
             visible: true,
             size: 5,
             shape: 'diamond',
             style:{
                 fill:'black',
                 stroke: '#259fc',
                 lineWidth: 8,
                 width: 1
             }
         }
    }

    const divConfig = {
        width:'100%',
        heigth:'100%',
        marginLeft:'80px',
        marginTop: '80px',
        borderColor: '#ffebee'
        

    }
    const consApi =async() => {
        axios.get('https://api.covid19api.com/total/country/mexico/status/confirmed?from=2020-12-01T00:00:00Z&to=2020-12-10T00:00:00Z')
        .then(response => {
            var respuesta = response.data;
            var auxDate=[], auxInfectados=[];
            respuesta.map(elemento=>{
                auxDate.push({fecha: elemento.Date, infectados: elemento.Cases})
            })
            console.log(auxDate)
            setInfectados(auxInfectados);
            setDate(auxDate);
        })
    }


    useEffect (() => {
        consApi();
    }, [] )
   
    return (
        
        <div>
            
            <Home/>
            <div> 
                <div style={divConfig}>
                <Line {...configuracion}/>
                <Button variant="contained" color="primary">
                <a href="/porPais">Siguiente</a>
                </Button>
                </div>
                
            </div>
           

        </div>
    )
}

export default ConteoGrafica;