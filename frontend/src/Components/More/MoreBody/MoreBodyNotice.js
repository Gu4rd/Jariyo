import { useState } from 'react';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import './MoreBodyNotice.css';

// 공지사항과 이벤트는 정적으로 정의한 페이지임을 알립니다

const noticeCount = 2
const aaa = Array.from({length: noticeCount}, () => false);

const MoreBodyNotice = () => {
    const [visible, setVisible] = useState([...aaa]);

    return (
        <div id="moreBodyNotice">
            <b style={{fontSize: '24px', color: 'coral'}}>Jariyo Open!</b>
            {visible[0] == false
            ? <ArrowDropDownIcon style={{float: 'right'}} onClick={() => {aaa[0] = true;setVisible([...aaa])}}/>
            : <ArrowDropUpIcon style={{float: 'right'}} onClick={() => {aaa[0] = false;setVisible([...aaa])}}/>
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
            ? <ArrowDropDownIcon style={{float: 'right'}} onClick={() => {aaa[1] = true;setVisible([...aaa])}}/>
            : <ArrowDropUpIcon style={{float: 'right'}} onClick={() => {aaa[1] = false;setVisible([...aaa])}}/>
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