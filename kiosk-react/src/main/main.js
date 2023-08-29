import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { productReset, categoriesReset, userInfoReset } from '../store/store';
import { useDispatch, useSelector} from 'react-redux'
import './main.css'
import '../button.css'


function Main() {
    // const [username] =useState("동국대학교");
    const history = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    function resetAll() {
        dispatch(productReset());
        dispatch(categoriesReset());
        dispatch(userInfoReset());
    }
    function logout(){
        resetAll();
        history("/");
    }

    return (
        <body>
            <div className='main'>
                <section className='main-title'>
                    <span style={{ textDecoration: 'underline' }}>{user.nickname}</span>님, 안녕하세요.
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