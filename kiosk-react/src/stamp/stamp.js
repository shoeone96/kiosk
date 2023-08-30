import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import '../button.css'
import './stamp.css'
import { ReactComponent as Arrow } from './Arrow.svg'
import { ReactComponent as Plus } from './add_black_24dp.svg';
import { ReactComponent as Minus } from './remove_black_24dp.svg';

function Stamp() {
    //TODO: 추후 서버에서 받아오는 스탬프 개수로 변경 예정
    let nowStamp = useSelector((state) => state.user.totalStampCnt);
    const [useStamp, setUseStamp] = useState(0);
    const [volunteerId, setVolunteerId] = useState("")
    let token = useSelector((state) => state.user.token);
    const navigate = useNavigate();


    function minusUseStamp() {
        if (useStamp > 0) setUseStamp(stamp => stamp - 1);
    }

    function plusUseStamp() {
        if (useStamp < nowStamp) setUseStamp(stamp => stamp + 1);
    }

    function changeToCoupon() {
        if(useStamp === 0){
            alert("1개 이상의 스탬프를 이용해주세요");
        } else {
            axios({
                url: 'http://43.202.49.6:8080/api/v1/stamps/coupon',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                data: {
                    changeCnt: useStamp
                },
            })
                .then((res) => navigate("/discount-reward"))
                .catch((error) => console.log(error));
        }
    }


    function changeToTime() {
        if (volunteerId === "") {
            alert("1365 아이디를 입력해주세요");
        } else if(useStamp === 0){
            alert("1개 이상의 스탬프를 이용해주세요");
        } else {

            axios({
                url: 'http://43.202.49.6:8080/api/v1/stamps/time',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                data: {
                    changeCnt: useStamp
                },
            })
                .then((res) => navigate("/time-reward"))
                .catch((error) => console.log(error));

        }
    }


    return (
        <body>
            <div className='stamp'>
                <section className='stamp-word'>
                    <span className='stamp-explanation'>기부한 의류 한 벌 당 스탬프 한 개가 부여되며,<br />
                        10개의 스탬프 당 봉사시간 1시간 또는 업사이클링 상품 할인 코드로 변환할 수 있습니다.</span>
                </section>
                <section className='stamp-current'>
                    <div className='stamp-now'>
                        <span className='stamp-title'>보유 스탬프</span>
                        <div className='stamp-cnt'>
                            {nowStamp}개
                        </div>
                    </div>
                    <div className='arrow-space'>
                        <Arrow />
                    </div>
                    <div className='stamp-now'>
                        <span className='stamp-title'>변환할 스탬프</span>
                        <div className='change-stamp'>
                            <Minus onClick={minusUseStamp} />
                            <div className='stamp-cnt'>
                                {useStamp}개
                            </div>
                            <Plus onClick={plusUseStamp} />
                        </div>
                    </div>
                </section>
                <section className='stamp-usage'>
                    <input
                        type="text"
                        placeholder="1365 아이디를 입력해주세요."
                        value={volunteerId}
                        onChange={(e) => setVolunteerId(e.target.value)} // 값을 업데이트
                        className='volunteer-input'
                    />
                    <button onClick={() => changeToTime()} className='green-button donation-change-button'>봉사 점수로 스탬프 변환하기</button>
                    <button onClick={() => changeToCoupon()} className='green-button discount-change-button'>업사이클링 할인 코드 스탬프 변환하기</button>
                </section>
                <Link to="/main">
                    <button className='before-button'> 뒤로</button>
                </Link>
            </div>
        </body>
    )
}

export default Stamp;