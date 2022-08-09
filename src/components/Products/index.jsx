import { Component } from "react";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import CancelIcon from '@mui/icons-material/Cancel';
import { Avatar, Grid, Paper, Typography } from "@mui/material";



class ProductsMange extends Component{

    constructor(props){
        super(props);
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
                            Product Manage
                        </Typography>
                    </Grid>
                        <br/>
                    <TextField id="filled-basic" label="Time" variant="filled" size="small"  placeholder="Select Your User Name Here" required style={TextFieldForForCart}/>
                    <TextField id="filled-basic" label="Price" variant="filled" size="small" required style={TextFieldForForCart} Date/>

                    <TextField id="filled-basic" label="Category" variant="filled" size="small"  placeholder="Select Your User Name Here" required select style={TextFieldForForCart}/>
                    <TextField id="filled-basic" label="Description" variant="filled" size="small"  placeholder="Select Your User Name Here" required input style={TextFieldForForCart}/>

                    
                    <Button variant="outlined" endIcon={<CreateIcon />} color="success"  style={ btnstyleForRe }>
                            confirmed
                        </Button>

                        <Button variant="outlined" endIcon={<CancelIcon />} color="error"  style={ btnstyleForRe }>
                            Cancel
                        </Button>


                </Paper>
            </Grid>
        )

    }
}

export default ProductsMange