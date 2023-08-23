import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './home.css'
import '../button.css'
import logo from './logo-white.png'
import first from './home-first.png'
import second from './home-second.png'
import third from './home-third.png'


function Home() {

    const history = useNavigate();
    const [contentImage, setContentImage] = useState([{ img: first, exp: '‘옷깃’에 넣은 옷은' }, { img: second, exp: '지역 복지시설에\n기부되고,' }, { img: third, exp: '남은 옷은 업사이클링으로\n재활용됩니다!' }]);
    function goLogin(){
        history("/login")
    }
    return (

        <body className='home-body' onClick={goLogin}>
            <section className='home'>
                <div className='home-header'>
                    <div className='home-logo'>
                        <img className='white-logo' src={logo}></img>
                    </div>
                    <div className='home-title'>
                        <span>캠퍼스에서 만나는 <br />가장 편리한 의류 기부 서비스</span>
                    </div>
                </div>
                <div className='home-contents'>
                    {
                        contentImage.map((image) => (
                            <div className='home-content'>
                                <div className='home-image'>
                                    <img src={image.img}></img>
                                </div>
                                <div className='home-explanation'>
                                    <span>{image.exp.split('\n').map((sen) => (
                                        <span>{sen}<br></br></span>
                                    ))}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </body>

    )
}

export default Home;