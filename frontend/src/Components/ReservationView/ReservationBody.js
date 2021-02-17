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
        this.state = {
            isToggle: false,
            now: moment().format('YYYY. MM .DD'),
            person: 1,
        };
        this.handleClick = this.handleClick.bind(this);
        this.Up = this.Up.bind(this);
        this.Down = this.Down.bind(this);
    }

    handleClick(e){
        this.setState({isToggle: !this.state.isToggle});
    }

    onChange = date => {
        this.setState({now: moment(date).format('YYYY. MM. DD'), isToggle: false});
    };

    Up(e){
        this.setState({person: this.state.person + 1});
    };

    Down(e){
        if(this.state.person <= 1)
        {
            this.setState({person: this.state.person});
        }
        else{
            this.setState({person: this.state.person - 1});
        }
        
    };

    render(){
        return(
            <Grid container item>
                <Grid item xs={2}></Grid>
                <Grid className="body_wrap" container item xs={8}>
                    <Grid className="menu_wrap" item xs={4}>
                        <h3 style={{padding: "0px 0px 15px 0px"}}>날짜</h3>
                        <div><button onClick={this.handleClick} className="date_bar">{this.state.now}</button></div>
                        {this.state.isToggle && <Calendar onChange={this.onChange}/>}
                        <h3 style={{padding: "50px 0px 15px 0px"}}>상세조건</h3>
                        <div className="control_bar_wrap">
                            <button className="control_bar">적용</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="control_bar" style={{background: "red", color: "white"}}>초기화</button>
                            <div>
                                <h4 style={{padding: "50px 0px 15px 0px"}}>인원</h4>
                                <div className="person">
                                    <button className="btnUpDown" style={{marginRight: "50px"}} onClick={this.Up}>+</button>
                                    <span>{this.state.person}</span>
                                    <button className="btnUpDown" style={{marginLeft: "50px"}} onClick={this.Down}>--</button>
                                </div>
                                <h4 style={{padding: "50px 0px 25px 0px"}}>시설</h4>
                                <div className="facility">
                                    <ui className="facility_list">
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>수영장</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>노래방</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>사우나</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>테이블</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>세탁기</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>건조기</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>취사가능</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>스파</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>헬스기구</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>온천</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>에어컨</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>샤워실</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>욕조</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>와이파이</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>TV</label>
                                        </li>
                                        <li className="facility_item">&nbsp;
                                            <input type="checkbox" className="facility_check"></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>PC</label>
                                        </li>
                                    </ui>
                                </div>
                            </div>
                            
                        </div>
                    </Grid>
                    <Grid className="item_wrap" item xs={8}>
                        <div>상품 준비중...</div>
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        )
    }
}

export default ReservationBody;