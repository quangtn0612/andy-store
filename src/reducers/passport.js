// import axios from 'axios';
import {createReducer } from '@reduxjs/toolkit'
const initialState = {
  passportCovers: [],
  charms: [],
  currentItem: {
    PassportCover: 'images/passport/1.jpg',
    Charm: 'images/charm/0.png',
    Name: 'QUANG'
  },
  currentItemOfPassport: {
    item: 'images/passport/1.jpg',
    Charm: 'images/charm/1.png',
    Name: 'QUANG'
  },
  passportActiveId: '60dd90742364ee7a22c93bc5', //FIRST ITEM ID
  charmActiveId: '60dd90305b9a0f7a0dac61e9', //FIRST ITEM ID
  cartItems: []
};



// axios.get('http://localhost:8001/passports/')
// .then(res=>{
//   initialState.passportCovers= res.data
// })

const passportReducer = createReducer(initialState, {
  CHOOSE_PASSPORT_COVER: (state, action) => {state.currentItemOfPassport.item = action.payload},
  PASSPORT_ONCLICKED_ID: (state, action) => {state.passportActiveId = action.payload},
  CHOOSE_CHARM: (state, action) => {state.currentItemOfPassport.Charm = action.payload},
  CHARM_ONCLICKED_ID: (state, action) => {state.charmActiveId = action.payload},
  ON_KEY_UP: (state, action) => {state.currentItemOfPassport.Name= action.payload},
  UPDATE_CART:(state, action) => {state.cartItems.push(action.payload)},
  DELETE_ITEM: (state, action) => {state.cartItems.splice(action.payload, 1)}
})



export default passportReducer;