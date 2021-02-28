import { useEffect, useState } from 'react';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import FAQList from './FAQList';

var aaa = Array.from({length: FAQList.length}, () => false);

const QnaBody = () => {
    const [visible, setVisible] = useState(aaa);

    return (
        <div>
            {FAQList.map((faq, index) => {
                return (
                    <div key={faq.title}>
                        <b>{faq.title}</b>
                        {visible[index] == false
                        ? <ArrowDropDownIcon style={{float: 'right'}} onClick={() => {aaa[index]=true;setVisible([...aaa]);}}/>
                        : <ArrowDropUpIcon style={{float: 'right'}} onClick={() => {aaa[index]=false;setVisible([...aaa]);}}/>
                        }
                        <br /><br />
                        {visible[index] == true &&
                            <p>{faq.content}</p>
                        }
                        <br /><hr /><br />
                    </div>
                )
            })}
        </div>
    )
}

export default QnaBody;