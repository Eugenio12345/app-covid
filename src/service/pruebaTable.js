import React, {Component, setState} from 'react';
import { Input, Table } from '@material-ui/core';
import { get } from 'react-http-client';

export default class PruebaTable extends Component {

    constructor (props) {

        super(props);
        this.state = {data : []};
        this.getData();
    }

    getData () {
 

        fetch ('https://api.covid19api.com/live/country/mexico/status/confirmed')
        .then(response => {
         
            return response.json();
        }).then(result  => {
            this.setState (this.state , {
                 data: result
            });
        } ).catch(error => {
            console.log(error);
        });
    }
   render () {
       return (
           <table border = {1}>
            
            <thead>
                <tr>
                <tr>Ciudad</tr>
                <tr>Confirmados</tr>
                <tr>Muertos</tr>
                <tr>Activos</tr>

                </tr>
            </thead>

            <tbody>

                {this.state.data.map(row => 

                      
                      <tr> 

               <td>{row.Country}</td>
               <td>{row.Confirmed}</td>
               <td>{row.Deaths}</td>
               <td>{row.Active}</td>
               
             </tr>
                )}
             
            </tbody>


           </table>
       ) 
       
   }




}

