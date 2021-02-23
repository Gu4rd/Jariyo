import React from "react";
import { Component } from "react";
import Grid from '@material-ui/core/Grid';
import './css/ReservationList.css';
import { Link } from "react-router-dom";
import { red } from "@material-ui/core/colors";

class ReservationList extends Component{
    render(){
        return(
            <Grid className="list_wrap" container item>
                <Grid item xs={2}></Grid>
                <Grid className="list_body_wrap" container item xs={8}>
                    <Grid className="list_menu_wrap" item xs={4}>
                        <ul>
                            <div className="list_menu_letters_wrap"><Link to="/mylist" className="list_menu_letters" style={{color: "red", fontWeight: "bold"}}>예약 내역</Link></div>
                            <div className="list_menu_letters_wrap"><Link to="/mypage" className="list_menu_letters">내 정보 관리</Link></div>
                        </ul>
                    </Grid>
                    <Grid className="list_item_wrap" item xs={8}>
                        <div className="list_item_none">
                            <h3 style={{textAlign: "center"}}>예약 내역이 없습니다.</h3>
                            <p style={{textAlign: "center", paddingTop: "2%"}}>최저가로 예약 가능한 숙소들을 지금 만나세요!</p>
                            <div style={{textAlign: "center", paddingTop: "3%"}}><a href="/reservation/호텔/헤네시스"><button className="go_reservation_btn">예약 하러가기</button></a></div>
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        )
    }
}

export default ReservationList;