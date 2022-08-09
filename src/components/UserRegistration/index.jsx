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
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

class UserRegistr extends Component{

    constructor(props){
        super(props)
        
    }

    

    render(){

        const paperStyleForRE={padding:40, height:'90vh', width:500 , margin:"20px auto"}
        const secondpaperStyleForRE={padding:40, height:'60vh', width:1000 , margin:"20px auto"}
        const btnstyleForRe={margin:'10px 5px', width:200}
        const avaterStyleForRg={backgroundColor:"red"}
        const TextFieldForRe={margin:'10px 5px'}
        const styleForTbl={margin:'30px 5px'}

        function createData(FirstName, Email, City, Pnumber, userName,password) {
            return { FirstName, Email, City, Pnumber, userName,password };
          }

        const rows = [
            createData('Miroon', 'miroon@gmail.com','Hatton','071827263','Miroon007','097tuyt78g'),
            createData('Miroon', 'miroon@gmail.com','Hatton','071827263','Miroon007','097tuyt78g')



        ];

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

                <Paper elevation={10} style={secondpaperStyleForRE}>

                <Grid align="center">
                        <Avatar style={avaterStyleForRg}>
                            <SupervisedUserCircleIcon/>
                        </Avatar>


                        <Typography variant="h5">
                            Users
                        </Typography>
                        <Typography variant="subtitle2">
                            User Account Detalis                     
                        </Typography>

                        <TableContainer component={Paper} style={ styleForTbl }>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>First Name</TableCell>
                                        <TableCell align="center">Email</TableCell>
                                        <TableCell align="center">City</TableCell>
                                        <TableCell align="center">Mobile Number</TableCell>
                                        <TableCell align="center">User Name</TableCell>
                                        <TableCell align="center">Paasword</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                    <TableRow hover tabIndex={-1} key={row.FirstName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">{row.FirstName}</TableCell>
                                        <TableCell align="center">{row.Email}</TableCell>
                                        <TableCell align="center">{row.City}</TableCell>
                                        <TableCell align="center">{row.Pnumber}</TableCell>
                                        <TableCell align="center">{row.userName}</TableCell>
                                        <TableCell align="center">{row.password}</TableCell>

                                    </TableRow> ))}
                                </TableBody>
                            </Table>
                    </TableContainer>

                </Grid>

                </Paper>
           </Grid> 
        )
        
    }

}

export default UserRegistr