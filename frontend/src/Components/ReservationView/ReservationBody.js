import React from 'react';
import {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { DateRange } from 'react-date-range';
import moment from 'moment';
import './css/ReservationBody.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import axios from 'axios';
import qs from 'qs';

class ReservationBody extends Component{

    constructor(props){
        super(props);
        this.state = {
            isToggle: false,
            now: moment().format('MM .DD'),
            until: moment(new Date(Date.now() + (3600 * 1000 * 24))).format('MM. DD'),
            timegap: 1,
            person: 1,
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
            product: [],

            checkedItems: new Set(),
            swimming_pool: false,
            karaoke: false,
            sauna: false,
            tables: false,
            washing_machine: false,
            dryer: false,
            cooking_possible: false,
            spa: false,
            fitness: false,
            thermal_springs: false,
            air_conditioner: false,
            shower: false,
            bathtub: false,
            wifi: false,
            tv: false,
            pc: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.decisionDate = this.decisionDate.bind(this);
        this.getProductList = this.getProductList.bind(this);
        this.Up = this.Up.bind(this);
        this.Down = this.Down.bind(this);
    }

    handleClick(e){
        this.setState({isToggle: !this.state.isToggle});
    }

    onRangeChange = (ranges) => {
        this.setState({
          startDate: ranges['selection'].startDate,
          endDate: ranges['selection'].endDate,
          key: ranges['selection'].key,
        });
      }

    decisionDate(e) {
        this.setState({
            isToggle: false,
            now: moment(this.state.startDate).format('MM. DD'),
            until: moment(this.state.endDate).format('MM. DD'),
            timegap: moment(this.state.endDate).format('DD')-moment(this.state.startDate).format('DD'),
        });
    }

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

    reSetOptions(e){
        window.location.reload();
    }

    handleCheckClick = (e) => {
        this.setState({ [e.target.name]: e.target.checked});
        console.log(e.target.name)
        if(this.state.checkedItems.has(e.target.name)){
            this.state.checkedItems.delete(e.target.name);
        }
        else{
            this.state.checkedItems.add(e.target.name);
        }
        console.log(this.state.checkedItems)
        
    }

    getProductList = (e) => {
        var myArray = Array.from(this.state.checkedItems);
        console.log(myArray.length);
        axios.get(`/reservation/${this.props.product_type}/${this.props.product_location}/options/${myArray}`)
        .then(response => {
            console.log(response.data)
        })
    }

    getProductData(){
        axios.get(`/reservation/${this.props.product_type}/${this.props.product_location}`)
            .then(response => {
                this.setState({product: response.data});
        }) 
    }

    componentDidMount(){
        this.getProductData();     
    }

    render(){
        var rows = []
        for(var i = 0; i < this.state.product.length; i++)
        {
            rows.push(
                <a href={`/itempage/${this.state.product[i].id}`}>
                    <div className="items" style={{backgroundImage: `url("/static/img/hotel_1.jpg")`}}>
                        <div className="item_content">
                            <h2 className="item_name">{this.state.product[i].title}</h2>
                            <p className="item_location">
                                {this.state.product[i].detailed_location}
                                <h3 className="item_cost">￦{this.state.product[i].price}</h3>    
                            </p>
                        </div>
                    </div>
                </a>
            )
        }
        return(
            <Grid container item>
                <Grid item xs={2}></Grid>
                <Grid className="body_wrap" container item xs={8}>
                    <Grid className="menu_wrap" item xs={4}>
                        <div className="menu_container">
                            <h3 style={{padding: "0px 0px 15px 0px"}}>날짜</h3>
                            <div>
                                <button onClick={this.handleClick} className="date_bar">
                                    {this.state.now} ~ {this.state.until}&nbsp;
                                    <span style={{fontSize: "14px", color: "red"}}>{this.state.timegap}박</span>
                                </button>
                            </div>
                            {this.state.isToggle &&
                                <div>
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={this.onRangeChange}
                                        moveRangeOnFirstSelection={false}
                                        ranges={[this.state]}
                                        minDate={new Date()}
                                        maxDate={new Date(Date.now() + (3600 * 1000 * 24 * 7))}
                                        /><br></br>
                                    <div className="decisionDateBtn_wrap"><button className="decisionDateBtn" onClick={this.decisionDate}>선택완료</button></div>
                                </div>
                            }
                            <h3 style={{padding: "50px 0px 15px 0px"}}>상세조건</h3>
                            <div className="control_bar_wrap">
                                <button className="control_bar" onClick={this.getProductList}>적용</button>
                                <button className="control_bar" style={{background: "red", color: "white"}} onClick={this.reSetOptions}>초기화</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <form>
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
                                                    <input type="checkbox" className="facility_check" name="swimming_pool" chekced={this.state.swimming_pool} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>수영장</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="karaoke" chekced={this.state.karaoke} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>노래방</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="sauna" chekced={this.state.sauna} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>사우나</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="tables" chekced={this.state.tables} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>테이블</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="washing_machine" chekced={this.state.washing_machine} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>세탁기</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="dryer" chekced={this.state.dryer} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>건조기</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="cooking_possible" chekced={this.state.cooking_possible} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>취사가능</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="spa" chekced={this.state.spa} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>스파</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="fitness" chekced={this.state.fitness} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>헬스기구</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="thermal_springs" chekced={this.state.thermal_springs} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>온천</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="air_conditioner" chekced={this.state.air_conditioner} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>에어컨</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="shower" chekced={this.state.shower} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>샤워실</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="bathtub" chekced={this.state.bathtub} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>욕조</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="wifi" chekced={this.state.wifi} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>와이파이</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="tv" chekced={this.state.tv} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>TV</label>
                                                </li>
                                                <li className="facility_item">&nbsp;
                                                    <input type="checkbox" className="facility_check" name="pc" chekced={this.state.pc} onChange={this.handleCheckClick}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label>PC</label>
                                                </li>
                                            </ui>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </Grid>
                    <Grid className="item_wrap" item xs={8}>
                        <div className="item_container">
                            <div className="orderBtn_wrap">
                                <button className="orderBtn">추천 순</button>
                                <button className="orderBtn">낮은 가격 순</button>
                                <button className="orderBtn">높은 가격 순</button>
                            </div>
                            <h3 className="item_title">추천 상품</h3>
                            <div className="item_list_wrap">
                                {rows}
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        )
    }
}

export default ReservationBody;