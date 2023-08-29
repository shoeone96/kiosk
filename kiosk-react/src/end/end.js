import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux'
import { productReset, categoriesReset } from '../store/store';
import './end.css'
import '../button.css'


function End() {

    const history = useNavigate();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(productReset());
        dispatch(categoriesReset());
        const timeout = setTimeout(() => {
            history("/");
        }, 5000); 

        return () => {
            clearTimeout(timeout);
        };
    }, [history]);
    

    function goHome(){
        dispatch(productReset());
        dispatch(categoriesReset());
        history("/")
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