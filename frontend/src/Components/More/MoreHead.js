import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { MenuItems } from '../Navbar/MenuItems';
import './MoreHead.css'

const Test = styled.b`
    color: coral;
`

const MoreHead = ({ render }) => {
    const currentURL = '/more/' + render.moreMenu;

    return(
        <div id="moreHead">
            {MenuItems[4].more.title.map((item, idx) =>
                <Link to={MenuItems[4].more.url[idx]} key={idx} className="title">
                    {MenuItems[4].more.url[idx] == currentURL
                        ? <Test>{MenuItems[4].more.title[idx]}</Test>
                        : MenuItems[4].more.title[idx]
                    }
                </Link>
            )}
        </div>
    )
}

export default MoreHead;
