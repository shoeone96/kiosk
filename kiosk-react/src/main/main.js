import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './main.css'
import '../button.css'


function Main() {
    const [username] =useState("동국대학교");
    const history = useNavigate();
    function logout(){
        history("/");
    }

    return (
        <body>
            <div className='main'>
                <section className='main-title'>
                    <span style={{ textDecoration: 'underline' }}>{username}</span>님, 안녕하세요.
                </section>
                <section className='main-buttons'>
                    <Link to="/stamp">
                        <button className='green-button stamp-check-button'>보유 스탬프 확인</button>
                    </Link>
                    <Link to="/donation">
                        <button className='green-button donation-button'>의류 기부하기</button>
                    </Link>
                </section>
                <div>
                    <button onClick={logout}className='white-button logout-button'>로그아웃</button>
                </div>
            </div>
        </body>
    )
}

export default Main;