import React, { createRef, useState, useEffect } from "react";
import 'antd/dist/antd.css';
import {Line} from '@ant-design/charts';
import {Bar} from 'react-chartjs-2';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Home from '../Home';





function GrafCountry () {


    const [paises, setPaises] = useState([]);
    const [infectados, setInfectados]= useState([]);

     const data = {
         labels:paises,
         datasets:[{
             label:'Infectados',
             backgroundColor:'rgba(0,255,0,1)',
             borderColor:'black',
             borderWidth: 1,
             hoberBackgroundColor:'rgba(0,255,0,0.2)',
             hoberBorderColor:'#FF0000',
             
             data:infectados
         }]

         
     }


    const opciones = {
        maintainAspectRatio: false,
        responsive:true 
    }

    const consApi =async() => {
        axios.get('https://api.covid19api.com/summary')
        .then(response => {
            var respuesta = response.data;
            var auxPaises=[], auxInfectados=[];
            respuesta.Countries.map(key=>{
                auxPaises.push(key.Country)
                auxInfectados.push(key.TotalConfirmed)
            })
            setInfectados(auxInfectados);
            setPaises(auxPaises);
        })
    }


    useEffect (() => {
        consApi();
    }, [] )
   
    return (
        
            <div style={{width:'100%', height:'600px', marginLeft:'80px', marginTop:'80px'}}>
                <Home/>
            <Bar data={data} options={opciones}/>
           
              
            </div>
           
    )
}

export default GrafCountry;