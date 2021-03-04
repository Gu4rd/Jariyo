import { useState } from 'react';
import styled from 'styled-components';

import './MoreBodyQna.css';
import QnaBody from './MoreBodyQna/QnaBody';
import QnaWrite from './MoreBodyQna/QnaWrite';
import QnaDetail from './MoreBodyQna/QnaDetail';

const FontCoral = styled.b`
    color: coral;
`

const MoreBodyQna = () => {
    // Qna메뉴중 선택한 메뉴를 저장. 밑에서 그 메뉴를 FontCoral로 처리
    const [FAQ, setFAQ] = useState('FAQ');
    
    const QnaHead = () => {
        return (
            <div id="QnaView">
                {FAQ == 'FAQ'
                ?  <FontCoral style={{fontSize: '20px', cursor: 'pointer'}} onClick={() => {setFAQ('FAQ')}}>FAQ</FontCoral>
                :  <b style={{fontSize: '20px', cursor: 'pointer'}} onClick={() => {setFAQ('FAQ')}}>FAQ</b>}
                {FAQ == 'question'
                ?  <FontCoral style={{fontSize: '20px', cursor: 'pointer', marginLeft: '100px'}} onClick={() => {setFAQ('question')}}>1:1 문의하기</FontCoral>
                :  <b style={{fontSize: '20px', cursor: 'pointer', marginLeft: '100px'}} onClick={() => {setFAQ('question')}}>1:1 문의하기</b>}
                {FAQ == 'detail'
                ?  <FontCoral style={{fontSize: '20px', cursor: 'pointer', marginLeft: '100px'}} onClick={() => {setFAQ('detail')}}>내 문의내역</FontCoral>
                :  <b style={{fontSize: '20px', cursor: 'pointer', marginLeft: '100px'}} onClick={() => {setFAQ('detail')}}>내 문의내역</b>}
                <br /><br /><hr /><br />
            </div>
        )
    }

    return (
        <div id="moreBodyQna">
            <QnaHead />
            {FAQ == 'FAQ' && <QnaBody/>}
            {FAQ == 'question' && <QnaWrite />}
            {FAQ == 'detail' && <QnaDetail />}
        </div>
    )
}

export default MoreBodyQna;