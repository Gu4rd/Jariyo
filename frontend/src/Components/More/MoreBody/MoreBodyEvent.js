import { useState } from 'react';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import './MoreBodyEvent.css';

const MoreBodyEvent = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div id="moreBodyEvent">
            <b style={{fontSize: '24px'}}>1번째 이벤트</b>
            {visible == false
            ? <ArrowDropDownIcon style={{float: 'right'}} onClick={() => {setVisible(true)}}/>
            : <ArrowDropUpIcon style={{float: 'right'}} onClick={() => {setVisible(false)}}/>
            }
            <br /><br />
            {visible == true &&
                <h5>첫번째 이벤트입니다 스크롤하면 보이죠?</h5>
            }
            <br /><br /><hr />
        </div>
    )
}

export default MoreBodyEvent;