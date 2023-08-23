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
                        <div className='product-arragement'>
                        {products.map((product) => (
                            <div className='donation-product'  key={product.id}>
                                <div className='product-name'>
                                    <span>{product.name}</span>
                                </div>
                                <div className='input-space'></div>
                                <div className='product-count'>
                                    <span>{product.count}</span>
                                </div>
                            </div>
                        ))}
                        </div>
                        <div className='total-count'>
                            <span>총 {totalCount}벌</span>
                        </div>                        
                    </div>
                    <div className='donation-container'>
                        {sizes.map((size) => (
                            <div className='container'>
                                <div className='input-entrance'></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Link to="/donation">
                <button className='before-button'>이전</button>
            </Link>
            <Link to="/end">
                <button className='next-button'>확인</button>
            </Link>
        </body>
    )
}

export default Input;