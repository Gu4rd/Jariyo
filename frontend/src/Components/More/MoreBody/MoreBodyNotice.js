import { useState } from 'react';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import './MoreBodyNotice.css';

const MoreBodyNotice = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div id="moreBodyNotice">
            <b style={{fontSize: '24px'}}>1번째 공지</b>
            {visible == false
            ? <ArrowDropDownIcon style={{float: 'right'}} onClick={() => {setVisible(true)}}/>
            : <ArrowDropUpIcon style={{float: 'right'}} onClick={() => {setVisible(false)}}/>
            }
            <br /><br />
            {visible == true &&
                <h5>첫번째 공지사항입니다 스크롤하면 보이죠?</h5>
            }
            <br /><br /><hr />
        </div>
    )
}

export default MoreBodyNotice;