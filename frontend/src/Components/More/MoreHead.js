import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { MenuItems } from '../Navbar/MenuItems';
import './MoreHead.css'

const Test = styled.b`
    color: coral;
`

const MoreHead = () => {
    const [moreMenu, setMoreMenu] = useState();

    useEffect(() => {
        setMoreMenu(window.location.pathname);
    }, [window.location.pathname])
    
    return(
        <div id="moreHead">
            {MenuItems[3].more.title.map((item, idx) =>
                <Link to={MenuItems[3].more.url[idx]} key={idx} className="title">
                    {MenuItems[3].more.url[idx] == moreMenu
                        ? <Test>{MenuItems[3].more.title[idx]}</Test>
                        : MenuItems[3].more.title[idx]
                    }
                </Link>
            )}
        </div>
    )
}

export default MoreHead;
