import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../button.css'
import './donation.css'
import { addProduct, removeProduct, updateProduct, plusCount, minusCount } from '../store/store'

function Donation() {
    const prodcutCategory = [{ id: 1, name: '티셔츠' }, { id: 2, name: '맨투맨' }, { id: 3, name: '셔츠' }, { id: 4, name: '코트' }, { id: 5, name: '자켓' }, { id: 6, name: '집업' }, { id: 7, name: '청바지' }, { id: 8, name: '면바지' }, { id: 9, name: '트레이닝복' }];
    let totalProductIndex = 9;
    let products = useSelector((state) => state.products);
    let dispatch = useDispatch();
    const [isInputMode, setInputMode] = useState(false);
    const [inputValue, setInputValue] = useState('');


    function loadProduct(category, index) {
        dispatch(addProduct({ id: index, name: category, count: 1 }));
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleAddProduct() {
        if (inputValue.trim() !== '') {
            dispatch(addProduct({ id: ++totalProductIndex, name: inputValue, count: 1 }));
            setInputValue('');
            setInputMode(false);
        }
    }
    return (
        <>
            <body className='donation'>
                <div className='donation-grid-container'>
                    <section className='donation-title'>
                        <span className='donation-main-explanation'>기부하실 의류의 종류를 입력해주세요.</span> <br />
                        <span className='donation-sub-explanation'>기부 현황은 카메라를 통해 확인되오니, 정확한 수량을 입력해주시기 바랍니다.</span>
                    </section>
                    <section className='donation-categories'>
                        <div>
                            {prodcutCategory.map((category) => (
                                <button className='category-button green-button'
                                    onClick={() => loadProduct(category.name, category.id)}>{category.name}</button>
                            ))}
                        </div>
                        {isInputMode ? (
                            <div className='input-category'>
                                <input
                                    type='text'
                                    placeholder='의류 종류 입력'
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    className='input-box'
                                />
                                <button className='self-category-add-button' onClick={handleAddProduct}>추가</button>
                            </div>
                        ) : (
                            <button className='self-input-category-button white-button' onClick={() => setInputMode(true)}>직접 입력</button>
                        )}
                    </section>
                    <section className='donation-products'>
                        {products.map((product) => (
                            <div className='selected-product'>
                                <span className='selected-product-left-component'>
                                    <button onClick={() => dispatch(removeProduct(product.id))}>x</button>
                                    {product.name}
                                </span>
                                <div className='space'></div>
                                <span className='selected-product-right-component'>
                                    <button onClick={() => dispatch(minusCount(product.id))}>-</button>
                                    <span className='product-count'>{product.count}</span>
                                    <button onClick={() => dispatch(plusCount(product.id))}>+</button>
                                </span>
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