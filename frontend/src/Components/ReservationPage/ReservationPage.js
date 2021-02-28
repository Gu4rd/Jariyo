import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import './css/ReservationPage.css';
import axios from 'axios';
import $ from "jquery";


class ReservationPage extends Component{
    constructor(props){
        super(props);
        // 상품의 정보를 부모로부터 받아옴
        this.state = {
            product_id: this.props.match.params.id,
            period: this.props.match.params.date,
            title: this.props.match.params.title,
            detailed_location: this.props.match.params.detailed_location,
            price: this.props.match.params.price,
            options: [],
        };
        this.reservation = this.reservation.bind(this);
    }

    // 상품 예약 POST
    reservation(){
        var {product_id, period, title, price, detailed_location} = this.state;
        axios.post('/reservation', {
            product_id: product_id,
            user_id: "admin",
            title: title,
            detailed_location: detailed_location,
            price: price,
            period: period,
        }).then(response => {
            alert('예약 완료');
            window.location.href = "/reservation/호텔/헤네시스";
        })
    }

    // 상품의 옵션 GET
    getData(){
        axios.get(`/itempage/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ options: response.data});
            })
    }
    
    componentDidMount(){
        this.getData();     
    }
    render(){

        // 상품의 옵션들을 불러옴 ex(솔로, 트윈)
        var rows = []
        for(var i=0; i < this.state.options.length; i++)
        {
            rows.push(
                <div className="itempage_items">
                    <Grid container item>
                        <Grid item xs={5}>
                            <img src="/static/img/room.jpg" width="100%" height="265px"></img>
                        </Grid>
                        <Grid item xs={7} className="itempage_items_content">
                            <div><h2>{this.state.options[i].title}</h2></div>
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            <div><p style={{float: "right"}}>￦ {this.state.options[i].price}</p></div>
                            <br></br><br></br>
                            <div style={{padding: "2% 2% 2% 2%", borderTop: "thin solid #F5F5F5"}}><button className="Reservation_btn" onClick={this.reservation}>예약하기</button></div>
                        </Grid>
                    </Grid>
                </div>
            )
        }
        return(
            <div className="itempage_wrap">
                <Grid container item>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <div className="itempage_frame">
                            <div className="itempage_top_wrap">
                                <img src="/static/img/product.jpg" width="100%" height="350px"></img>
                                <h1 className="itempage_item_title">{this.props.match.params.title}</h1>
                                <br></br>
                                <p className="itempage_item_location">{this.props.match.params.detailed_location}</p>
                            </div>
                            <div className="itempage_content_wrap">
                                {rows}
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