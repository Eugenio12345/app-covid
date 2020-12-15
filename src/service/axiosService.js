import React, {Component} from 'react';
import axios from 'axios';
import { Result } from 'antd';



class AxiosService extends Component {
    componentDidMount () {
        axios.get('https://api.covid19api.com')
        .then(result => {
            console.log(result);
        }).catch(console.log)
    }

    render () {
          
        return (
            <h1>Hola Mundo</h1>
        )
    }
        
    
}

export default AxiosService;