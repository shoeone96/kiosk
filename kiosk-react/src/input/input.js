import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import './input.css'
import '../button.css'


function Input() {

    let products = useSelector((state) => state.products);
    const totalCount = products.reduce((sum, product) => sum + product.count, 0);
    let categories = useSelector((state) => state.categories);
    let token = useSelector((state) => state.user.token);
    const navigate = useNavigate();

    function accumulate() {
        axios({
            url: 'http://43.202.49.6/api/v1/stamps/accumulate',
            // url: 'http://localhost:8080/api/v1/stamps/accumulate',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            data: {
                changeCnt: totalCount
            },
        }).then((res) => navigate("/end"))
        .catch((error) => console.log(error));
    }

    return (
        <body>
            <section className='input'>
                <div className='input-grid-container'>
                    <div className='title'>
                        의류 종류에 맞춰 투입구에 의류를 넣어주세요.
                    </div>
                    <div className='donation-count'>
                        <div className='product-arragement'>
                            {products.map((product) => (
                                <div className='donation-product' key={product.id}>
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
                        {categories.map((category) => (
                            <div className='container'>
                                <div
                                    className={category.status ? 'input-entrance' : 'non-input-entrance'}
                                ></div>
                                <span className='input-size'>{category.type}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Link to="/donation">
                <button className='before-button'>이전</button>
            </Link>
            <button onClick={accumulate} className='next-button'>확인</button>
        </body>
    )
}


export default Input;