import { Component } from "react";
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Grid, Paper} from "@mui/material";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style"
import Avatar from '@mui/material/Avatar';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Link from '@mui/material/Link';



class Greeting extends Component{

constructor(props){
    super(props);
}

render(){
    //const { classes }=this.props;

    const paperStyle={padding:20, height:'50vh', width:280, margin:"20px auto"}
    const avaterStyle={backgroundColor:"blue"}
    const btnstyle={margin:'10px 5px'}

    return(

        <Grid>
            <Paper elevation={10} style={paperStyle}>

                <Grid align="center">
                    <Avatar style={ avaterStyle }>
                        <LockOpenIcon/>
                    </Avatar>
            

                    <Typography variant="subtitle1" gutterBottom component="div">
                        Sing in
                    </Typography>

                    <TextField id="filled-basic" label="User Name" variant="filled" size="small"  placeholder="Enter User Name Here" fullWidth required style={btnstyle}/>
                    <TextField id="filled-basic" label="User Password" variant="filled" size="small"  placeholder="Enter User Password Here" fullWidth required type="password"  style={btnstyle}/>

                    <Button variant="outlined" endIcon={<LoginIcon />} color="success" fullWidth style={ btnstyle }>
                        Login
                    </Button>

                    <Typography variant="caption" gutterBottom component="div">
                    create new user account?<Link href="#" variant="caption">click here</Link>

                    </Typography>

                </Grid>

                
            </Paper>
        </Grid>
        
    )
}

}

export default withStyles(styleSheet) (Greeting)