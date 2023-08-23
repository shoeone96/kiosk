import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../button.css'
import './stamp.css'
import {ReactComponent as Arrow} from './Arrow.svg'
import { ReactComponent as Plus } from './add_black_24dp.svg';
import { ReactComponent as Minus } from './remove_black_24dp.svg';

function Stamp() {
    //TODO: 추후 서버에서 받아오는 스탬프 개수로 변경 예정
    const [nowStamp, setNowStamp] = useState(10);
    const [useStamp, setUseStamp] = useState(0);
    const [volunteerId, setVolunteerId] = useState("")
    const history = useNavigate();

    function changeToTime() {
        history("/time-reward");
    }

    function minusUseStamp(){
        if(useStamp > 0) setUseStamp(stamp => stamp -1);
    }

    function plusUseStamp(){
        if(useStamp < nowStamp) setUseStamp(stamp => stamp +1);
    }

    return (
        <body>
            <div className='stamp'>
                <section className='stamp-word'>
                    <span className='stamp-explanation'>기부한 의류 한 벌 당 스탬프 한 개가 부여되며,<br/>
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
                        <Arrow/>
                    </div>
                    <div className='stamp-now'>
                    <span className='stamp-title'>변환할 스탬프</span>
                        <div className='change-stamp'>
                            <Minus onClick={minusUseStamp}/>
                            <div className='stamp-cnt'>
                                {useStamp}개
                            </div>
                            <Plus onClick={plusUseStamp}/>
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
                    <Link to="/discount-reward">
                        <button className='green-button discount-change-button'>업사이클링 할인 코드 스탬프 변환하기</button>
                    </Link>
                </section>
                <Link to="/main">
                    <button className='before-button'> 뒤로</button>
                </Link>
            </div>
        </body>
    )
}

export default Stamp;