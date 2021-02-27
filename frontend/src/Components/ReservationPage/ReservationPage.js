import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import './css/ReservationPage.css';
import axios from 'axios';


class ReservationPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "title",
            options: [],
        };
    }

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
                            <div style={{padding: "2% 2% 2% 2%", borderTop: "thin solid #F5F5F5"}}><button className="Reservation_btn">예약하기</button></div>
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