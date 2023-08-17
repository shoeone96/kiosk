import { Link } from 'react-router-dom'
import './discountReward.css'
import '../button.css'


function DiscountReward() {


    return (
        <body>
            <section className='discount-reward'>
                <div>
                    <span className='message'>상품 할인 코드를 스캔하세요!</span><br />
                    <span className='message-detail'>
                        재발급 불가하오니, 스마트폰 카메라로 촬영해주세요.<br />
                        할인 코드는 옷깃 온라인 스토어에서 사용하실 수 있습니다.</span>
                </div>
                <div className='coupon'>
                    ADFEES1391DDPSCWTRD8
                </div>
                <Link to="/end">
                    <button className='next-button'>다음</button>
                </Link>
            </section>

        </body>
    )
}

export default DiscountReward;