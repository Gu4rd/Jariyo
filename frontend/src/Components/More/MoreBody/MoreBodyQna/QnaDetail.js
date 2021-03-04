import { useEffect, useState } from 'react';

import axios from 'axios';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const QnaDetail = () => {
    const [myQna, setMyQna] = useState([]);
    
    useEffect(() => {
        axios.get("/qna/test123")
            .then((response) => {
                setMyQna([...response.data]);
            })
    }, [])

    return (
        <>
        {myQna.map((qna) => {
            return (
                <div className="qnaList" key={qna.content}>
                    <b>{qna.content}</b>
                    <div style={{float: 'right'}}>
                        <span style={{paddingRight: '10px'}}>{qna.category}</span>
                        >
                        <span style={{paddingLeft: '10px', paddingRight: '10px'}}>{qna.type}</span>
                        >
                        {qna.status == 0
                        ?   <span style={{paddingLeft: '10px'}}>답변 대기중</span>
                        :   <><span style={{paddingLeft: '10px'}}>답변 완료</span><ArrowDropDownIcon /></>
                        }
                    </div>
                    <br />
                    <small>{qna.writeDate.slice(0, 10)}</small>
                    <br /><br /><hr />
                </div>
            )
        })
        }
        </>
    )
}

export default QnaDetail;