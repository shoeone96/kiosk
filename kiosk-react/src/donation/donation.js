import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../button.css'
import './donation.css'
import { addProduct, removeProduct, updateProduct, plusCount, minusCount, falseStatus, trueStatus, cancelCount } from '../store/store';
import { ReactComponent as Plus } from './add_black_24dp.svg';
import { ReactComponent as Minus } from './remove_black_24dp.svg';
import { ReactComponent as Cancel } from './cancel.svg';

function Donation() {
    const prodcutCategory = [{ id: 1, name: '상의' }, { id: 2, name: '하의' }, { id: 3, name: '기타 의류' }];
    let products = useSelector((state) => state.products);
    let dispatch = useDispatch();


    function loadProduct(category, index) {
        dispatch(addProduct({ id: index, name: category, count: 1 }));
        dispatch(trueStatus(category));
    }

    function minus(category, id, cnt){
        dispatch(minusCount(id));
        if(cnt == 1) dispatch(falseStatus(category));
    }

    function cancelProduct(category, id){
        dispatch(removeProduct(id));
        dispatch(falseStatus(category));
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
                                    <Cancel onClick={() => cancelProduct(product.name, product.id)}></Cancel>
                                    <span className='product-name'>{product.name}</span>
                                </div>
                                <div className='selected-product-right-component'>
                                    <div>
                                        <Minus onClick={() => minus(product.name, product.id, product.count)}></Minus>
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