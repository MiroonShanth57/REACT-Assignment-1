import { Component, useState } from "react";
import * as React from 'react';
import { Avatar, Grid, Paper, Tabs, Toolbar, Typography, Tab} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';



class HomeDashBoard extends Component{

    constructor(props){
        super(props)
    }


    render(){

        

        // const [value, setValue]=useState();

        return(
            <React.Fragment>
                <AppBar sx={{background:"gray"}}>
                    <Toolbar>
                        <Avatar sx={{background:"blue"}}>
                            <FlutterDashIcon/>
                        </Avatar>
                        <Typography sx={{marginLeft: '.5rem'}}>
                            DashBoard
                        </Typography>
                        

                        <Tabs 
                         
                        sx={{marginLeft:'1rem'}} 
                        textColor="inherit" 
                        value={0} 
                        indicatorColor="secondary">
                            <Tab label="Home"/>
                            <Tab label="Product"/>
                            <Tab label="Cart"/>
                        </Tabs>

                        <Tabs sx={{marginLeft:'auto'}} textColor="inherit">
                            <Tab label="Name of the System User"/>

                        </Tabs>

                    </Toolbar>
                    
                </AppBar>
            </React.Fragment>
        )
    }
}

export default HomeDashBoard