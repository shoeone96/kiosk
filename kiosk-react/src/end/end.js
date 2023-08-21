import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';
import './end.css'
import '../button.css'


function End() {

    const history = useNavigate();
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            history("/");
        }, 5000); 

        return () => {
            clearTimeout(timeout);
        };
    }, [history]);
    

    function goHome(){
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