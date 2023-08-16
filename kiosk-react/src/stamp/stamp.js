import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../button.css'
import './stamp.css'

function Stamp() {
    //TODO: 추후 서버에서 받아오는 스탬프 개수로 변경 예정
    const num = 3;
    const [volunteerId, setVolunteerId] = useState("")

    return (
        <>
            <body>
                <div className='stamp'>
                    <section className='stamp-word'>
                        <span className='stamp-title'>보유 스탬프</span><br />
                        <span className='stamp-explanation'>한 벌 당 스탬프 한 개가 부여되며, 10개의 스탬프를 모두 모으면 포인트 변환 신청을 할 수 있습니다. <br />
                            포인트 변환 신청 시 스탬프는 리셋됩니다.</span>
                    </section>
                    <section className='stamp-current'>
                        {Array.from({ length: 10 }, (_, index) => (
                            <div key={index}>
                                {index < num ? (
                                    <div className='stamp-yes'></div>
                                ) : (
                                    <div className='stamp-no'></div>
                                )}
                            </div>
                        ))}
                    </section>
                    <section className='stamp-usage'>
                        <input
                            type="text"
                            placeholder="1365 아이디를 입력해주세요."
                            value={volunteerId}
                            onChange={(e) => setVolunteerId(e.target.value)} // 값을 업데이트
                            className='volunteer-input'
                        />
                        <button className='green-button donation-change-button'>봉사 점수로 스탬프 변환하기</button>
                        <button className='green-button discount-change-button'>업사이클링 할인 코드 스탬프 변환하기</button>
                    </section>
                    <button className='before-button'> 뒤로</button>
                </div>
            </body>

        </>
    )
}

export default Stamp;