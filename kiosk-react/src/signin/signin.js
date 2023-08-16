import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../button.css'
import './signin.css'

function Signin() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [selectedSize, setSelectedSize] = useState(null);
    const handleSizeClick = (size) => {
        setSelectedSize(size === selectedSize ? null : size);
    };
    const history = useNavigate();

    const formatPhoneNumber = (value) => {
        const digits = value.replace(/-/g, ''); // '-' 제거
        if (digits.length <= 3) {
            return digits;
        } else if (digits.length <= 7) {
            return `${digits.slice(0, 3)}-${digits.slice(3)}`;
        } else {
            return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
        }
    };

    const handleChangePhoneNumber = (e) => {
        const formattedValue = formatPhoneNumber(e.target.value);
        setPhoneNumber(formattedValue);
    };

    const signin = () => {
        const phoneNumberWithoutDash = phoneNumber.replace(/-/g, ''); // '-' 제거
        const validPhoneNumber = phoneNumberWithoutDash.substring(0, 11); // 최대 11자리로 고정
        alert("회원가입이 완료되었습니다.")
        history("/login")
        // TODO: 서버 전송 시 작성 로직
    };
    return (
        <>
            <body>
                <div className='signin'>
                    <section className='signin-title'>
                        <span>회원가입</span>
                    </section>
                    <section className='signin-form'>
                        <input
                            type="text"
                            placeholder="이름을 입력해주세요"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} // 값을 업데이트
                            className='name-input'
                        />
                        <input
                            type="tel"
                            placeholder="휴대폰 번호를 입력해주세요"
                            onChange={handleChangePhoneNumber} // 값을 업데이트
                            value={phoneNumber}
                            className='signin-phone-number-input'
                        />
                        <div className='size-choose'>
                            <div className='size-title'>사이즈</div>
                            <button
                                className={`size-button ${selectedSize === 'S' ? 'selected' : ''}`}
                                onClick={() => handleSizeClick('S')}>
                                S
                            </button>
                            <button
                                className={`size-button ${selectedSize === 'M' ? 'selected' : ''}`}
                                onClick={() => handleSizeClick('M')}>
                                M
                            </button>
                            <button
                                className={`size-button ${selectedSize === 'L' ? 'selected' : ''}`}
                                onClick={() => handleSizeClick('L')}>
                                L
                            </button>
                        </div>
                        <div className='personal-information'>
                            <input type="checkbox" id="checkbox" name="agreement" className='checkbox-agreement' />
                            <span>개인정보 취급 방침 동의</span>
                        </div>
                    </section>
                    <section className='signin-buttons'>
                        <Link to="/login">
                            <button className='white-button signin-cancel-button'>취소</button>
                        </Link>
                        <button className='green-button signin-confirm-button' onClick={signin}>회원가입</button>
                    </section>
                </div>
            </body>

        </>
    )
}

export default Signin;