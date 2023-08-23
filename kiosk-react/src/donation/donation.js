import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../button.css'
import './donation.css'
import { addProduct, removeProduct, updateProduct, plusCount, minusCount } from '../store/store';
import { ReactComponent as Plus } from './add_black_24dp.svg';
import { ReactComponent as Minus } from './remove_black_24dp.svg';
import { ReactComponent as Cancel } from './cancel.svg';

function Donation() {
    const prodcutCategory = [{ id: 1, name: '반소매 상의' }, { id: 2, name: '긴소매 상의' }, { id: 3, name: '반바지' }, { id: 4, name: '긴바지' }, { id: 5, name: '외투' }, { id: 6, name: '기타' }];
    let products = useSelector((state) => state.products);
    let dispatch = useDispatch();


    function loadProduct(category, index) {
        dispatch(addProduct({ id: index, name: category, count: 1 }));
    }

    return (
        <>
            <body className='donation'>
                <div className='donation-grid-container'>
                    <section className='donation-title'>
                        <span className='donation-main-explanation'>기부하실 의류의 종류를 입력해주세요.</span> <br />
                        <span className='donation-sub-explanation'>찢어진 의류는 기부가 불가합니다.</span>
                    </section>
                    <section className='donation-categories'>
                        <div>
                            {prodcutCategory.map((category) => (
                                <button className='category-button green-button'
                                    onClick={() => loadProduct(category.name, category.id)}>{category.name}</button>
                            ))}
                        </div>
                    </section>
                    <section className='donation-products'>
                        {products.map((product) => (
                            <div className='selected-product'>
                                <div className='selected-product-left-component'>
                                    <Cancel onClick={() => dispatch(removeProduct(product.id))}></Cancel>
                                    <span className='product-name'>{product.name}</span>
                                </div>
                                <div className='selected-product-right-component'>
                                    <div>
                                        <Minus onClick={() => dispatch(minusCount(product.id))}></Minus>
                                    </div>
                                    <div className='product-count'>
                                        <span>{product.count}</span>
                                    </div>
                                    <div>
                                        <Plus onClick={() => dispatch(plusCount(product.id))}></Plus>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                    <div>
                        <Link to="/main">
                            <button className='before-button'>뒤로</button>
                        </Link>
                        <Link to="/input">
                            <button className='next-button'>다음</button>
                        </Link>
                    </div>
                </div>
            </body>

        </>
    )
}


export default Donation;