import Form from 'react-bootstrap/Form'

const QnaWrite = () => {
    return (
        <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>카테고리 유형을 선택해주세요</Form.Label><br /><br />
                <Form.Control as="select" custom style={{width: '200px', fontSize: '20px'}}>
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
            <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>문의 유형을 선택해주세요</Form.Label><br /><br />
                <Form.Control as="select" custom style={{width: '200px', fontSize: '20px'}}>
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
            <textarea placeholder="하실 말씀이?" style={{width: "600px", height: "300px", fontSize: '20px'}}></textarea>
            <br />
            <button type="submit" style={{width: "40px", height: "40px"}}>문의</button>
        </Form>
    )
}

export default QnaWrite;