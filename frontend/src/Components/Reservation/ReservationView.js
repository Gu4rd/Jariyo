import React, {Component} from "react";
import { Grid } from '@material-ui/core';
import './ReservationView.css';
class ReservationView extends Component{

    render(){
        return(
            <div>
                <div className="Reservation_header">
                    
                </div>
                <Grid container style={{top: "260px"}}>
                    <Grid item xs={2} style={{background: "red"}}>레드</Grid>
                    <Grid item xs={8} style={{background: "blue"}}>블루</Grid>
                    <Grid item xs={2} style={{background: "green"}}>그린</Grid>
                </Grid>
            </div>
        )
    }
}

export default ReservationView;