import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';
import './timeReward.css'
import '../button.css'


function TimeReward() {

    const history = useNavigate();
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            history('/end');
        }, 5000); 

        return () => {
            clearTimeout(timeout);
        };
    }, [history]);

    function goEnd(){
        history('/end')
    }
    return (
        <body onClick={goEnd}>
            <section className='time-reward'>
                <span className='message'>스탬프 변환 신청 완료</span>
                <span className='message-detail'>1365 홈페이지 반영에는 최대 일주일이 소요될 수 있습니다.</span>
            </section>
        </body>
    )
}

export default TimeReward;