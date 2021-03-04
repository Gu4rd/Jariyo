import { useState } from 'react';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import './MoreBodyNotice.css';

// 공지사항과 이벤트는 정적으로 정의한 페이지임을 알립니다

// 공지의 개수만큼 false를 default로 하는 Array 생성
// 공지를 클릭하면 true로 바뀌어서 content가 보이게끔
const noticeCount = 2
const buffer = Array.from({length: noticeCount}, () => false);

const MoreBodyNotice = () => {
    const [visible, setVisible] = useState([...buffer]);

    return (
        <div id="moreBodyNotice">
            <b style={{fontSize: '24px', color: 'coral'}}>Jariyo Open!</b>
            {visible[0] == false
            ? <ArrowDropDownIcon style={{float: 'right'}} onClick={() => {buffer[0] = true;setVisible([...buffer])}}/>
            : <ArrowDropUpIcon style={{float: 'right'}} onClick={() => {buffer[0] = false;setVisible([...buffer])}}/>
            }
            <br /><br />
            {visible[0] == true &&
                <>
                <h5>여러분의 많은 후원과 사랑덕분에 Jariyo가 Open하게되었습니다.<br />감사합니다.</h5>
                <img className="imgNotice" src="https://mblogthumb-phinf.pstatic.net/MjAxNzA2MTJfNyAg/MDAxNDk3MjU3NjU2MDI2.hwf16C6KuYlH6IDJFYjjyTfcJT2_iRD-L_uVgpQs43wg.fx-COyscAZ3z1wQLZ_8SpaetMToMtJIeE0a-AR9hO9sg.PNG.sky_funeral/%25EA%25B0%259C%25EC%2597%2585%25EC%25B6%2595%25ED%2595%25981.png?type=w800"></img>
                </>
            }
            <br /><hr /><br />

            <b style={{fontSize: '24px', color: 'coral'}}>Jariyo 오픈 기념 경품 이벤트 당첨자 안내</b>
            {visible[1] == false
            ? <ArrowDropDownIcon style={{float: 'right'}} onClick={() => {buffer[1] = true;setVisible([...buffer])}}/>
            : <ArrowDropUpIcon style={{float: 'right'}} onClick={() => {buffer[1] = false;setVisible([...buffer])}}/>
            }
            <br /><br />
            {visible[1] == true &&
                <>
                <h5>
                    송금왕인터넷뱅킹<br />
                    요리왕쿠킹<br />
                    사자왕라이온킹<br />
                    햄버거왕버거킹<br />
                    등산왕하이킹<br />
                    걷기왕워킹<br /><br />
                    축하드립니다. 이메일을 확인해주세요.
                </h5>
                </>
            }
            <br /><hr />
        </div>
    )
}

export default MoreBodyNotice;