import { Component } from "react";
import * as React from 'react';
import { Grid, Paper} from "@mui/material";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import CancelIcon from '@mui/icons-material/Cancel';


class UserRegistr extends Component{

    constructor(props){
        super(props)
    }

    render(){

        const paperStyleForRE={padding:40, height:'90vh', width:500 , margin:"20px auto"}
        const btnstyleForRe={margin:'10px 5px', width:200}
        const avaterStyleForRg={backgroundColor:"red"}
        const TextFieldForRe={margin:'10px 5px'}

        return(
           <Grid>
                <Paper elevation={10} style={paperStyleForRE}>

                    <Grid align="center">
                        <Avatar style={avaterStyleForRg}>
                            <PersonAddAltIcon/>
                        </Avatar>


                        <Typography variant="h5">
                            Welcome
                        </Typography>
                        <Typography variant="subtitle2">
                            Register Your User Account Here...                     
                        </Typography>

                        <TextField id="filled-basic" label="First Name" variant="filled" size="small"  placeholder="Enter First Name Here" required style={TextFieldForRe}/>
                        <TextField id="filled-basic" label="Last Name" variant="filled" size="small"  placeholder="Enter Last Name Here" required style={TextFieldForRe}/>

                        <TextField id="filled-basic" label="Email" variant="filled" size="small"  placeholder="Enter Your Email Here" required style={TextFieldForRe}/>

                        
                        <TextField id="filled-basic" label="City" variant="filled" size="small"  placeholder="Enter Your City Here" required style={TextFieldForRe}/>


                        <TextField id="filled-basic" label="Street" variant="filled" size="small"  placeholder="Enter Your Street Here" required style={TextFieldForRe}/>
                        <TextField id="filled-basic" label="Street No" variant="filled" size="small"  placeholder="Enter Your Street No Here" required style={TextFieldForRe}/>


                        <TextField id="filled-basic" label="Zip Code" variant="filled" size="small"  placeholder="Enter Zip Code Here" required style={TextFieldForRe}/>
                        <TextField id="filled-basic" label="Lat Value" variant="filled" size="small"  placeholder="Enter Lat Value Here" required style={TextFieldForRe}/>


                        <TextField id="filled-basic" label="Long Value" variant="filled" size="small"  placeholder="Enter Long Value Here" required style={TextFieldForRe}/>
                        <TextField id="filled-basic" label="Mobile No" variant="filled" size="small"  placeholder="Enter Your Mobile No Here" required style={TextFieldForRe}/>

                        <TextField id="filled-basic" label="User Name" variant="filled" size="small"  placeholder="Enter User Name Here" required style={TextFieldForRe}/>
                        <TextField id="filled-basic" label="Password" variant="filled" size="small"  placeholder="Enter Your Password Here" required style={TextFieldForRe} type="password"/>

                        <Button variant="outlined" endIcon={<CreateIcon />} color="success"  style={ btnstyleForRe }>
                            Register
                        </Button>

                        <Button variant="outlined" endIcon={<CancelIcon />} color="error"  style={ btnstyleForRe }>
                            Cancel
                        </Button>


                    </Grid>

    

                </Paper>
           </Grid> 
        )
        
    }

}

export default UserRegistr