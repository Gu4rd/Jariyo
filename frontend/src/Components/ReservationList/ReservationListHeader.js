import React, {Component} from "react";
import './css/ReservationListHeader.css';
import ReservationList from "./ReservationList";

class ReservationHeader extends Component{

    render(){
        return(
            <div>
                <div className="Reservation_list_header">
                    <h1 className="Reservation_list_letter">예약 내역</h1>
                </div>
                <ReservationList />
            </div>

            
        )
    }
}

export default ReservationHeader;