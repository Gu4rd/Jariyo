import { useState } from 'react';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import './MoreBodyEvent.css';

// 공지사항과 이벤트는 정적으로 정의한 페이지임을 알립니다

// 이벤트의 개수만큼 false를 default로 하는 Array 생성
// 이벤트를 클릭하면 true로 바뀌어서 content가 보이게끔
const noticeCount = 3
const aaa = Array.from({length: noticeCount}, () => false);

const MoreBodyEvent = () => {
    const [visible, setVisible] = useState([...aaa]);

    return (
        <div id="moreBodyEvent">
            <b style={{fontSize: '24px', color: 'coral'}}>Jariyo 선착순 예약 이벤트 안내</b>
            {visible[0] == false
            ? <ArrowDropDownIcon style={{float: 'right'}} onClick={() => {aaa[0]=true;setVisible([...aaa])}}/>
            : <ArrowDropUpIcon style={{float: 'right'}} onClick={() => {aaa[0]=false;setVisible([...aaa])}}/>
            }
            <br /><br />
            {visible[0] == true &&
                <>
                <h5>종류 무관 숙소 예약하신 선착순 100명에게 마일리지를 지급해드립니다!</h5>
                <img className="imgEvent" src="http://ninespavill.com/data/cheditor4/1811/20181107142551_dxwzbmtz.jpg"></img>
                </>
            }
            <br /><hr /><br />

            <b style={{fontSize: '24px', color: 'coral'}}>2번째 이벤트</b>
            {visible[1] == false
            ? <ArrowDropDownIcon style={{float: 'right'}} onClick={() => {aaa[1]=true;setVisible([...aaa])}}/>
            : <ArrowDropUpIcon style={{float: 'right'}} onClick={() => {aaa[1]=false;setVisible([...aaa])}}/>
            }
            <br /><br />
            {visible[1] == true &&
                <>
                <h5>지금 친구에게 여행을 선물하세요!<br />친구에게 추천하면 마일리지 지급!</h5>
                <img className="imgEvent" src="https://post-phinf.pstatic.net/MjAxOTA3MDFfMjI3/MDAxNTYxOTY5OTA1MDQw.aY5UQSu8gaVvvGAMiKlxefMadyvs3rP09H15w3BDnpYg.ygO_MAym_STNAooQr4JZJb5vTSobn5j0kIxlX6mEEqkg.JPEG/%EC%B9%9C%EA%B5%AC%EC%B4%88%EB%8C%80-%EC%9D%B4%EB%B2%A4%ED%8A%B8.jpg?type=w1200"></img>
                </>
            }
            <br /><hr /><br />
        </div>
    )
}

export default MoreBodyEvent;