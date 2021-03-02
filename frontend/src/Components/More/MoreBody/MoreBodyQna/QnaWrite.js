import { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form'
import axios from "axios";

const QnaWrite = () => {
    const [qna, setQna] = useState({
        category: '호텔',
        type: '이벤트',
        content: '',
        writer: 'test123',
        status: 0,
        writeDate: ''
    });

    const submitQna = () => {
        axios.post('/qna/write', qna)
            .then(() => {
                console.log('완료');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <Form>
            <Form.Group controlId="category">
                <Form.Label>카테고리 유형을 선택해주세요</Form.Label><br /><br />
                <Form.Control as="select" custom style={{width: '200px', fontSize: '20px'}} onChange={() => {setQna({...qna, category: document.getElementById("category").value})}}>
                    <option>호텔</option>
                    <option>모텔</option>
                    <option>펜션</option>
                    <option>리조트</option>
                    <option>게스트하우스</option>
                    <option>한옥</option>
                    <option>캠핑</option>
                </Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="type">
                <Form.Label>문의 유형을 선택해주세요</Form.Label><br /><br />
                <Form.Control as="select" custom style={{width: '200px', fontSize: '20px'}} onChange={() => {setQna({...qna, type: document.getElementById("type").value})}}>
                    <option>이벤트</option>
                    <option>예약/결제</option>
                    <option>취소/환불</option>
                    <option>혜택받기</option>
                    <option>이용문의</option>
                    <option>회원정보</option>
                    <option>리뷰</option>
                    <option>기타</option>
                </Form.Control>
            </Form.Group>
            <br />
            <textarea id="content" placeholder="하실 말씀이?" style={{width: "600px", height: "300px", fontSize: '20px'}} onChange={() => {setQna({...qna, content: document.getElementById("content").value})}}></textarea>
            <br />
            <button type="button" style={{width: "40px", height: "40px"}} onClick={submitQna}>문의</button>
        </Form>
    )
}

export default QnaWrite;