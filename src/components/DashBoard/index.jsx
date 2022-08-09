import { Component, useState } from "react";
import * as React from 'react';
import { Avatar, Paper, Tabs, Toolbar, Typography, Tab} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import Grid from '@mui/material/Unstable_Grid2';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';




class HomeDashBoard extends Component{

    constructor(props){
        super(props)
    }


    render(){

        const paperStyleForHome={padding:70, height:'50vh', width:1000, margin:"80px auto"}
        const styleForCar={ height:200, width:200}
        const styleForHedingCard={alignItems: "center"}
        // const [value, setValue]=useState();

        return(

            <Grid>
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


            <Grid style={paperStyleForHome} container spacing={1}>
                
                <Grid item xs={4}>
                    <Card sx={{ minWidth: 100}} style={styleForCar}>
                        <CardContent>
                            <Typography variant="h5">
                                Products
                            </Typography>

                            <br/>
                            <Avatar>
                                <WidgetsIcon/>
                            </Avatar>

                            <Typography variant="h2">
                                00
                            </Typography>

                        </CardContent>
                
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ minWidth: 100 }} style={styleForCar}>
                        <CardContent>
                            <Typography variant="h5">
                                Cart
                            </Typography>

                            <br/>
                            <Avatar>
                                <ShoppingCartIcon/>
                            </Avatar>

                            <Typography variant="h2">
                                00
                            </Typography>

                        </CardContent>
                
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ minWidth: 100 }} style={styleForCar}>
                        <CardContent>
                            <Typography variant="h5">
                                User
                            </Typography>

                        <br/>
                            <Avatar>
                                <PeopleIcon/>
                            </Avatar>

                            <Typography variant="h2">
                                00
                            </Typography>

                        </CardContent>
                
                    </Card>
                </Grid>

            </Grid>

            </Grid>
            
            
        )
    }
}

export default HomeDashBoard