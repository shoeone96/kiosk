import { configureStore, createSlice } from '@reduxjs/toolkit'

let products = createSlice({
    name: 'products',
    initialState : [],
    reducers : {
        addProduct(state, action){
            const newProduct = action.payload;
            const existingProductIndex = state.findIndex(item => item.id === newProduct.id);
            
            if (existingProductIndex !== -1) {
                state.splice(existingProductIndex, 1); // 기존 아이템 삭제
            } else state.push(action.payload);
        },
        removeProduct(state, action){
            return state.filter(product => product.id != action.payload)
        },
        updateProduct(state, action){
            const [id, count] = action.payload;
            const productIndex = state.findIndex(product => product.id === id);
            const name = state[productIndex].name;
            if(productIndex !== -1){
                state[productIndex] = {id, name, count}
            }
        },
        plusCount(state, action){
            const productIndex = state.findIndex(product => product.id === action.payload);
            const product = state[productIndex];
            product.count++;
        },
        minusCount(state, action){
            const productIndex = state.findIndex(product => product.id === action.payload);
            const selectedProduct = state[productIndex];
            if(selectedProduct.count === 1) {
                return state.filter(product => product.id != selectedProduct.id)
            } else selectedProduct.count--;
        }
    }
})

export let {addProduct, removeProduct, updateProduct, plusCount, minusCount} = products.actions;


export default configureStore({
    reducer: {
        products: products.reducer
    }
})