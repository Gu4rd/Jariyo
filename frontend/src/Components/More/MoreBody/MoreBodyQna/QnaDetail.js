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
                <div className="qnaList" style={{marginTop: '30px'}} key={qna.content}>
                    <b>{qna.content}</b>
                    <div style={{float: 'right'}}>
                        <span style={{paddingRight: '10px'}}>{qna.category}</span>
                        >
                        <span style={{paddingLeft: '10px', paddingRight: '10px'}}>{qna.type}</span>
                        >
                        <span style={{paddingLeft: '10px'}}>답변 대기중</span>
                        {qna.status == 0
                        ?   <ArrowDropDownIcon disabled/>
                        :   <ArrowDropDownIcon />
                        }
                    </div>
                    <br />
                    <small>{qna.writeDate.slice(0, 10)}</small>
                    <br /><br /><hr />
                </div>
            )
        })}
        </>
    )
}

export default QnaDetail;