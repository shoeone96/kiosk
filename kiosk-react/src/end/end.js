import { Link, useNavigate } from 'react-router-dom'
import './end.css'
import '../button.css'


function End() {

    const history = useNavigate();

    function goHome(){
        history("/login")
    }

    return (
        <body onClick={goHome}>
            <div className='end'>
                <div className='end-sentence'>이용해주셔서 감사합니다.</div>
            </div>
        </body>
    )
}

export default End;