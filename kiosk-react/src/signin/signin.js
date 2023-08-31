import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../button.css'
import './signin.css'
import axios from 'axios';

function Signin() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [selectedSize, setSelectedSize] = useState(null);
    const [agreementChecked, setAgreementChecked] = useState(false);

    const handleAgreementChange = (event) => {
        setAgreementChecked(event.target.checked);
    };

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
    const handlePassword = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    };

    const signin = () => {
        if (!agreementChecked) {
            alert("개인정보 취급 방침에 동의해주십시오")
        } else if (password.length !== 4 || !/^\d{4}$/.test(password)) {
            alert("비밀번호는 4자리 숫자로 입력해주세요.");
            setPassword("");
        } else {
            axios.post("http://43.202.49.6/api/v1/users/join",
                {
                    nickname: nickname,
                    password: password,
                    phoneNumber: phoneNumber,
                })
                .then((res) =>{
                    if(res.data.resultCode === "SUCCESS"){
                        alert("회원가입이 완료되었습니다.");
                        history("/login");
                    } else if(res.data.resultCode === "DUPLICATED_USERNAME"){
                        alert("중복된 닉네임입니다.");
                    } else if(res.data.resultCode === "PHONE_NUMBER"){
                        alert("이미 가입한 핸드폰 번호입니다.");
                    }
                });
                
            
            // TODO: 서버 전송 시 작성 로직
        }
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
                            placeholder="사용하실 닉네임을 입력해주세요"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            className='name-input'
                        />
                        <input
                            type="tel"
                            placeholder="휴대폰 번호를 입력해주세요"
                            onChange={handleChangePhoneNumber}
                            value={phoneNumber}
                            className='signin-phone-number-input'
                        />
                        <input
                            type="password"
                            placeholder="4자리 숫자 비밀번호를 입력해주세요"
                            onChange={handlePassword}
                            value={password}
                            className='signin-phone-number-input'
                        />
                        <div className='personal-information'>
                            <input type="checkbox"
                                id="checkbox"
                                name="agreement"
                                className='checkbox-agreement'
                                checked={agreementChecked}
                                onChange={handleAgreementChange}
                            />
                            <span>개인정보 취급 방침 동의</span>
                        </div>
                    </section>
                    <section className='signin-buttons'>
                        <Link to="/login">
                            <button className='white-button signin-cancel-button'>취소</button>
                        </Link>
                        <button className='green-button signin-confirm-button' onClick={signin} >회원가입</button>
                    </section>
                </div>
            </body>

        </>
    )
}

export default Signin;