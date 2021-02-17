import React, {Component} from "react";
import { Grid } from '@material-ui/core';
import './ReservationView.css';
class ReservationView extends Component{

    render(){
        return(
            <div>
                <div className="Reservation_header">
                    <h1 className="frame">
                        <a className="products" href="/hotel">
                            <div>
                                <span>호텔<span style={{fontSize: "15px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼</span></span>
                                <div className="productsDropDown">
                                    <a className="productsDropDownMenu"><span>모텔</span></a>
                                    <a className="productsDropDownMenu"><span>펜션</span></a>
                                    <a className="productsDropDownMenu"><span>리조트</span></a>
                                    <a className="productsDropDownMenu"><span>게스트하우스</span></a>
                                    <a className="productsDropDownMenu"><span>한옥</span></a>
                                    <a className="productsDropDownMenu"><span>캠핑</span></a>
                                </div>
                            </div>

                        </a>
                    </h1>
                </div>
                <Grid container style={{top: "260px"}}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>
        )
    }
}

export default ReservationView;