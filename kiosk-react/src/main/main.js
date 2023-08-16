import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './main.css'
import '../button.css'


function Main() {
    const [username] =useState("hi");

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
                    <button className='green-button donation-button'>의류 기부하기</button>
                </section>
            </div>
        </body>
    )
}

export default Main;