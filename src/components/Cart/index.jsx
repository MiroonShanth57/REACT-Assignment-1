import { Component } from "react";
import * as React from 'react';
import { Avatar, Grid, Paper, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import CancelIcon from '@mui/icons-material/Cancel';



class CartMange extends Component{

    constructor(props){
        super(props)
    }

    render(){

        const paperStyleForCart={padding:40, height:'40vh', width:550 , margin:"20px auto"}
        const TextFieldForForCart={margin:'10px 5px',width:250}
        const btnstyleForRe={margin:'10px 5px', width:200}


        return(
            <Grid>
                <Paper style={paperStyleForCart}>
                    <Grid>
                        <Typography variant="h6">
                            Your Shopping Cart
                        </Typography>
                    </Grid>
                        <br/>
                    <TextField id="filled-basic" label="User Name" variant="filled" size="small"  placeholder="Select Your User Name Here" required select style={TextFieldForForCart}/>
                    <TextField id="filled-basic" label="Date" variant="filled" size="small" required style={TextFieldForForCart} Date/>

                    <TextField id="filled-basic" label="Product Type" variant="filled" size="small"  placeholder="Select Your User Name Here" required select style={TextFieldForForCart}/>
                    <TextField id="filled-basic" label="QTY" variant="filled" size="small"  placeholder="Select Your User Name Here" required input style={TextFieldForForCart}/>

                    
                    <Button variant="outlined" endIcon={<CreateIcon />} color="success"  style={ btnstyleForRe }>
                            Confirme
                        </Button>

                        <Button variant="outlined" endIcon={<CancelIcon />} color="error"  style={ btnstyleForRe }>
                            Cancel
                        </Button>


                </Paper>
            </Grid>
        )
    }
}

export default CartMange