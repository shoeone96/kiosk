import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './login.css'
import '../button.css'


function Login() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0];

    function handleLogin() { }
    function handleSignUp() { }


    function handleNumberClick(number) {
        if (phoneNumber.length < 13) { // 최대 13자 (휴대폰 번호 11자 + 2개의 -)
            if (phoneNumber.length === 3 || phoneNumber.length === 8) {
                setPhoneNumber(prevPhoneNumber => prevPhoneNumber + '-' + number);
            } else {
                setPhoneNumber(prevPhoneNumber => prevPhoneNumber + number);
            }
        }
    }

    function handleClearClick() {
        if (phoneNumber.length === 5 || phoneNumber.length === 10) {
            setPhoneNumber(prevPhoneNumber => prevPhoneNumber.slice(0, -2));
        } else {
            setPhoneNumber(prevPhoneNumber => prevPhoneNumber.slice(0, -1));
        }
    }

    return (
        <body>
            <div className='login'>
            <div className="login-grid-container">
                <header className='login-grid-title'>
                    <span>옷깃</span>
                </header>
                <div className='login-grid-left'>
                    <div className="login-form">
                        <input
                            type="tel"
                            placeholder="휴대폰 번호를 입력해주세요"
                            value={phoneNumber}
                            className='login-phone-number-input'
                        />
                        <button className="login-button green-button" onClick={handleLogin}>
                            로그인
                        </button>
                        <Link to="/signin">
                            <button className="signin-button white-button" onClick={handleSignUp}>
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
                    <div><button className='clear-button' onClick={handleClearClick}>&larr;</button></div>
                </div>
            </div>
            </div>
        </body>
    )
}

export default Login;