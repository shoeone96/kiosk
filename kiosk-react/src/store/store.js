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
        },
        productReset(state){
            return [];
        }
    }
})

let categories = createSlice ({
    name : 'categories',
    initialState : [{ type: '상의', status: false }, { type: '하의', status: false }, { type: '기타 의류', status: false }],
    reducers : {
        changeStatus(state, action){
            const type = action.payload;
            const index = state.findIndex(category => category.type === type);
            const condition = state[index].status;
            state[index].status = !condition;
        },
        categoriesReset(state){
            return [{ type: '상의', status: false }, { type: '하의', status: false }, { type: '기타 의류', status: false }];
        }
    }
})

let user = createSlice({
    name: 'user',
    initialState : {nickname : "", token : "", totalStampCnt:""},
    reducers : {
        getInformation:(state, action) => {
            state.nickname = action.payload.nickname;
            state.token = action.payload.token;
            state.totalStampCnt = action.payload.totalStampCnt;
        },
        userInfoReset: (state) =>{
            state.nickname = "";
            state.token = "";
            state.totalStampCnt = "";
        }
    }
})

export let {addProduct, removeProduct, updateProduct, plusCount, minusCount, productReset} = products.actions;
export let {changeStatus, categoriesReset} = categories.actions;
export let {getInformation, userInfoReset} = user.actions;

export default configureStore({
    reducer: {
        categories : categories.reducer,
        products: products.reducer,
        user: user.reducer
    }
})