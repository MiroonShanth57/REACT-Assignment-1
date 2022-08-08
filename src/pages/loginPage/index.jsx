import { Component } from "react";
import Greeting from "../../components/login/greeting";
import * as React from 'react';



class LogInPage extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Greeting/>
        )
    }

}

export default LogInPage