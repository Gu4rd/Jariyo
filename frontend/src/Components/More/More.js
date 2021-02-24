import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MoreHead from './MoreHead';
import MoreBodyNotice from './MoreBody/MoreBodyNotice';
import MoreBodyEvent from './MoreBody/MoreBodyEvent';
import MoreBodyQna from './MoreBody/MoreBodyQna';

const MoreBody = () => {
    return (
        <>
            <Route path='/more/notice' component={MoreBodyNotice}></Route>
            <Route path='/more/event' component={MoreBodyEvent}></Route>
            <Route path='/more/qna' component={MoreBodyQna}></Route>
        </>
    )
}

const More = () =>{
    return (
        <>
            <MoreHead />
            <MoreBody />
        </>
    )
}

export default More;