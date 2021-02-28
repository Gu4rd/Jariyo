import React from "react";
import { Component } from "react";
import Grid from '@material-ui/core/Grid';
import './css/ReservationList.css';
import { Link } from "react-router-dom";
import axios from "axios";

class ReservationList extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: [],
        };
    }

    // 유저별 예약 내역 GET
    componentDidMount(){
        axios.get(`/reservation_list`)
            .then(response => {
                this.setState({list: response.data})
            })
    }

    // 예약 내역 VIEW
    render(){
        var rows = []
        for(var i=0; i < this.state.list.length; i++)
        {
            rows.push(
                <a>
                    <div className="items" style={{backgroundImage: `url("/static/img/product.jpg")`}}>
                        <div className="item_content">
                            <h2 className="item_name">{this.state.list[i].title}</h2>
                            <br></br><br></br><br></br>
                            <p className="item_locaiton">
                                {this.state.list[i].detailed_location}
                                <h3 className="item_cost">{this.state.list[i].period}</h3>
                            </p>
                        </div><br></br>
                    </div>
                    
                </a>
            )
        }
        return(
            <Grid className="list_wrap" container item>
                <Grid item xs={2}></Grid>
                <Grid className="list_body_wrap" container item xs={8}>
                    <Grid className="list_menu_wrap" item xs={4}>
                        <ul>
                            <div className="list_menu_letters_wrap"><Link to="/mylist" className="list_menu_letters" style={{color: "red", fontWeight: "bold"}}>예약 내역</Link></div>
                        </ul>
                    </Grid>
                    <Grid className="list_item_wrap" item xs={8}>
                        {this.state.list == null && // 예약 내역이 없을 시
                        <div className="list_item_none">
                            <h3 style={{textAlign: "center"}}>예약 내역이 없습니다.</h3>
                            <p style={{textAlign: "center", paddingTop: "2%"}}>최저가로 예약 가능한 숙소들을 지금 만나세요!</p>
                            <div style={{textAlign: "center", paddingTop: "3%"}}><a href="/reservation/호텔/헤네시스"><button className="go_reservation_btn">예약 하러가기</button></a></div>
                        </div>}
 
                        {this.state.list != null &&
                            <div className="item_list_wrap">
                                {rows}
                            </div>
                        }
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        )
    }
}

export default ReservationList;