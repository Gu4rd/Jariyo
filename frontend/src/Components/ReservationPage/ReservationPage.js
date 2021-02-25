import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import './css/ReservationPage.css';

class ReservationPage extends Component{
    render(){
        return(
            <div className="itempage_wrap">
                <Grid container item>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <div className="itempage_frame">
                            <div className="itempage_top_wrap">
                                <img src="/static/img/hotel_1.jpg" width="100%" height="350px"></img>
                                <h1 className="itempage_item_title">상품의 타이틀</h1>
                                <br></br>
                                <p className="itempage_item_location">상품의 위치</p>
                            </div>
                            <div className="itempage_content_wrap">
                                <div className="itempage_items">
                                    <Grid container item>
                                        <Grid item xs={5}>
                                            <img src="/static/img/hotel_1.jpg" width="100%" height="265px"></img>
                                        </Grid>
                                        <Grid item xs={7} className="itempage_items_content">
                                            <div><h2>상품 옵션 1</h2></div>
                                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                                            <div><p style={{float: "right"}}>50000원</p></div>
                                            <br></br><br></br>
                                            <div style={{padding: "2% 2% 2% 2%", borderTop: "thin solid #F5F5F5"}}><button className="Reservation_btn">예약하기</button></div>
                                        </Grid>
                                    </Grid>
                                    
                                </div>
                                <div className="itempage_items">
                                    <Grid container item>
                                        <Grid item xs={5}>
                                            <img src="/static/img/hotel_1.jpg" width="100%" height="265px"></img>
                                        </Grid>
                                        <Grid item xs={7} className="itempage_items_content">
                                            <div><h2>상품 옵션 2</h2></div>
                                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                                            <div><p style={{float: "right"}}>100000원</p></div>
                                            <br></br>
                                            <div style={{padding: "2% 2% 2% 2%", borderTop: "thin solid #F5F5F5"}}><button className="Reservation_btn">예약하기</button></div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="itempage_items">
                                    <Grid container item>
                                        <Grid item xs={5}>
                                            <img src="/static/img/hotel_1.jpg" width="100%" height="265px"></img>
                                        </Grid>
                                        <Grid item xs={7} className="itempage_items_content">
                                            <div><h2>상품 옵션 3</h2></div>
                                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                                            <div><p style={{float: "right"}}>150000원</p></div>
                                            <br></br><br></br>
                                            <div style={{padding: "2% 2% 2% 2%", borderTop: "thin solid #F5F5F5"}}><button className="Reservation_btn">예약하기</button></div></Grid>
                                    </Grid>
                                </div>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>   
        );
    }
}

export default ReservationPage;