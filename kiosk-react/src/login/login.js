import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import '../button.css'
import logo from './logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Arrow } from './Arrow.svg'
import { getInformation } from '../store/store';
import axios from 'axios';

function Login() {
    const [focusedInput, setFocusedInput] = useState(null);
    const history = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0];

    function handleLogin() {
        axios.post("http://43.202.49.6/api/v1/users/login",
            { phoneNumber: phoneNumber, password: password },
            { withCredentials: true }).then((res) => {
                if (res.data.resultCode === "SUCCESS") {
                    dispatch(getInformation(res.data.result));
                    console.log(user);
                    history("/main");
                } else {
                    alert("로그인 정보가 잘못되었습니다.");
                }
            }).catch((res) => console.log(res));
    }


    const handleInputFocus = (inputIndex) => {
        setFocusedInput(inputIndex);
        if (inputIndex === 1) {
            console.log('phone')
        } else if (inputIndex === 2) console.log('password')
    };

    function handleNumberClick(number) {
        if (focusedInput === 1) {
            if (phoneNumber.length < 13) { // 최대 13자 (휴대폰 번호 11자 + 2개의 -)
                if (phoneNumber.length === 3 || phoneNumber.length === 8) {
                    setPhoneNumber(prevPhoneNumber => prevPhoneNumber + '-' + number);
                } else {
                    setPhoneNumber(prevPhoneNumber => prevPhoneNumber + number);
                }
            }
        } else if (focusedInput === 2) {
            setPassword(prevPassword => prevPassword + number);
        }
    }

    function handleClearClick() {
        if (focusedInput === 1) {
            if (phoneNumber.length === 5 || phoneNumber.length === 10) {
                setPhoneNumber(prevPhoneNumber => prevPhoneNumber.slice(0, -2));
            } else {
                setPhoneNumber(prevPhoneNumber => prevPhoneNumber.slice(0, -1));
            }
        } else if (focusedInput === 2) {
            setPassword(prevPassword => prevPassword.slice(0, -1));
        }
    }

    function goHome() {
        history("/");
    }

    return (
        <body>
            <div className='login'>
                <div className="login-grid-container">
                    <header className='login-grid-title'>
                        <img src={logo} width={"289px"} height={"182px"} onClick={goHome}></img>
                    </header>
                    <div className='login-grid-left'>
                        <div className="login-form">
                            <input
                                type="tel"
                                placeholder="휴대폰 번호를 입력해주세요"
                                onFocus={() => handleInputFocus(1)}
                                value={phoneNumber}
                                className='login-phone-number-input'
                            />
                            <input
                                type="password"
                                placeholder="비밀 번호를 입력해주세요"
                                onFocus={() => handleInputFocus(2)}
                                value={password}
                                className='login-phone-number-input'
                            />
                            <button className="login-button green-button" onClick={handleLogin}>
                                로그인
                            </button>
                            <Link to="/signin">
                                <button className="signin-button white-button">
                                    회원 가입
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='login-grid-right'>
                        {num.map((number, index) => (
                            <div key={index}>
                                {number === '' ? (
                                    <button className='no-number'></button>
                                ) : (
                                    <button className='number-button' onClick={() => handleNumberClick(number)}>
                                        {number}
                                    </button>
                                )}
                            </div>
                        ))}
                        <div className='clear-button' >
                            <Arrow onClick={handleClearClick}></Arrow>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Login;



