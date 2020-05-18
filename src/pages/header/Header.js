import React from 'react';
import './header.css';
import {Button } from 'antd-mobile';
// import { Button } from 'antd-mobile';
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }


    render(){
        return(
            <div className='headerWrapper'>
                test
                <i className='fa fa-heart'></i>
                <Button>测试</Button>

                
                <Button type="primary">primary</Button>
            </div>  
        )
        
    }
}

