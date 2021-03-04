import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { MenuItems } from '../Navbar/MenuItems';
import './MoreHead.css'

const FontCoral = styled.b`
    color: coral;
`

const MoreHead = () => {
    const [moreMenu, setMoreMenu] = useState();
    
    // url의 pathname을 저장
    // pathname과 menu가 같으면 밑에서 FontCoral로 처리
    useEffect(() => {
        setMoreMenu(window.location.pathname);
    }, [window.location.pathname])
    
    return(
        <div id="moreHead">
            {MenuItems[3].more.title.map((item, idx) =>
                <Link to={MenuItems[3].more.url[idx]} key={idx} className="title">
                    {MenuItems[3].more.url[idx] == moreMenu
                        ? <FontCoral>{MenuItems[3].more.title[idx]}</FontCoral>
                        : MenuItems[3].more.title[idx]
                    }
                </Link>
            )}
        </div>
    )
}

export default MoreHead;
