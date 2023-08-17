import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './input.css'
import '../button.css'


function Input() {
    
    let products = useSelector((state) => state.products);
    let [sizes] = useState(['S', 'M', 'L']);
    const totalCount = products.reduce((sum, product) => sum + product.count, 0);

    return (
        <body>
            <section className='input'>
                <div className='input-grid-container'>
                    <div className='title'>
                        조명이 켜진 투입구에 의류를 넣어주세요.
                    </div>
                    <div className='donation-count'>
                        {products.map((product) => (
                            <div className='donation-product'  key={product.id}>
                                <span>{product.name}</span>
                                <div className='input-space'></div>
                                <span>{product.count}</span>
                            </div>
                        ))}
                        <span className='total-count'>총 {totalCount}벌</span>
                    </div>
                    <div className='donation-container'>
                        {sizes.map((size) => (
                            <div className='container'>
                                <div className='input-entrance'></div>
                                <span className='input-size'>{size}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Link to="/donation">
                <button className='before-button'>이전</button>
            </Link>
            <button className='next-button'>다음</button>
        </body>
    )
}

export default Input;