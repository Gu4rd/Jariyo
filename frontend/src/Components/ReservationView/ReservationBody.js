import React from 'react';
import {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Calendar from 'react-calendar'
import moment from 'moment';
import './css/ReservationBody.css';
import 'react-calendar/dist/Calendar.css';

class ReservationBody extends Component{

    constructor(props){
        super(props);
        this.state = {isToggle: false, now: moment().format('YYYY. MM .DD'), date: new Date()};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.setState({isToggle: !this.state.isToggle});
    }

    onChange = date => {
        this.setState({now: moment(date).format('YYYY. MM. DD')});
    };

    render(){
        return(
            <Grid container item>
                <Grid item xs={2}></Grid>
                <Grid className="body_wrap" container item xs={8}>
                    <Grid className="menu_wrap" item xs={4}>
                        <h3 style={{padding: "0px 0px 15px 0px"}}>날짜</h3>
                        <div className="data_bar_wrap"><button onClick={this.handleClick} className="date_bar">{this.state.now}</button></div>
                        {this.state.isToggle && <Calendar onChange={this.onChange}/>}
                    </Grid>
                    <Grid className="item_wrap" item xs={8}>
                        <div>상품</div>
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        )
    }
}

export default ReservationBody;