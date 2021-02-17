import React, {Component} from "react";
import './css/ReservationHeader.css';
import ReservationBody from "./ReservationBody";

class ReservationHeader extends Component{

    render(){
        return(
            <div>
                <div className="Reservation_header">
                    <h1 className="products_frame">
                        <a className="products" href={`/reservation/${this.props.match.params.product}/헤네시스`}>
                            <div>
                                <span>{this.props.match.params.product}<span style={{fontSize: "15px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼</span></span>
                                <div className="productsDropDown">
                                    <a className="productsDropDownMenu" href={`/reservation/호텔/헤네시스`}><span>호텔</span></a>
                                    <a className="productsDropDownMenu" href={`/reservation/모텔/헤네시스`}><span>모텔</span></a>
                                    <a className="productsDropDownMenu" href={`/reservation/펜션/헤네시스`}><span>펜션</span></a>
                                    <a className="productsDropDownMenu" href={`/reservation/리조트/헤네시스`}><span>리조트</span></a>
                                    <a className="productsDropDownMenu" href={`/reservation/게스트하우스/헤네시스`}><span>게스트하우스</span></a>
                                    <a className="productsDropDownMenu" href={`/reservation/한옥/헤네시스`}><span>한옥</span></a>
                                    <a className="productsDropDownMenu" href={`/reservation/캠핑/헤네시스`}><span>캠핑</span></a>
                                </div>
                            </div>
                        </a>
                    </h1>
                    <h3 className="locations_frame">
                        <a className="locations" href={`/reservation/${this.props.match.params.product}/${this.props.match.params.place}`}>
                            <div>
                                <span>{this.props.match.params.place}<span style={{fontSize: "10px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼</span></span>
                                <div className="locationsDropDown">
                                    <a className="locationsDropDownMenu" href={`/reservation/${this.props.match.params.product}/헤네시스`}><span>헤네시스</span></a>
                                    <a className="locationsDropDownMenu" href={`/reservation/${this.props.match.params.product}/리스항구`}><span>리스항구</span></a>
                                    <a className="locationsDropDownMenu" href={`/reservation/${this.props.match.params.product}/페리온`}><span>페리온</span></a>
                                    <a className="locationsDropDownMenu" href={`/reservation/${this.props.match.params.product}/엘리니아`}><span>엘리니아</span></a>
                                    <a className="locationsDropDownMenu" href={`/reservation/${this.props.match.params.product}/오르비스`}><span>오르비스</span></a>
                                    <a className="locationsDropDownMenu" href={`/reservation/${this.props.match.params.product}/루디브리엄`}><span>루디브리엄</span></a>
                                </div>
                            </div>
                        </a>
                    </h3>
                </div>
                <ReservationBody product={this.props.match.params.product} place={this.props.match.params.place} />
            </div>
            
        )
    }
}

export default ReservationHeader;