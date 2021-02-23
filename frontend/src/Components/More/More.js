import MoreHead from './MoreHead';
import MoreBody from './MoreBody';

const More = ({ match }) =>{
    return (
        <>
            <MoreHead render={match.params}/>
            <MoreBody />
        </>
    )
}

export default More;