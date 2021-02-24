import { useState } from 'react';

import './MoreBodyQna.css';
import QnaBody from './MoreBodyQna/QnaBody';
import QnaWrite from './MoreBodyQna/QnaWrite';

const MoreBodyQna = () => {
    const [FAQ, setFAQ] = useState(true);
    
    const QnaHead = () => {
        return (
            <>
            <div id="QnaView">
                <b style={{fontSize: '20px'}} onClick={() => {setFAQ(true)}}>FAQ</b>
                <b style={{fontSize: '20px', marginLeft: '50px'}} onClick={() => {setFAQ(false)}}>1:1문의하기</b>
                <br /><br /><hr /><br />
            </div>
            </>
            
        )
    }

    return (
        <div id="moreBodyQna">
            <QnaHead />
            {FAQ == true
            ?   <QnaBody />
            :   <QnaWrite />
            }
        </div>
    )
}

export default MoreBodyQna;