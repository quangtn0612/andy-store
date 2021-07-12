// import axios from 'axios';
import { CHOOSE_WALLET_COVER, WALLET_ONCLICKED_ID, ON_KEY_UP, GET_WALLETS, WALLETS_ERROR } from './types';
const initialState = {
  wallets: [],
  currentItemOfWallet: {
    item: 'images/wallet/1.jpg',
    Charm: 'images/charm/0.png',
    Name: 'QUANG'
  },
  walletActiveId: '60dd6c274aa9257078ef0493', //FIRST ITEM
  loading: true
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_WALLET_COVER: {
      return {
        ...state,
        currentItemOfWallet: {
          ...state.currentItemOfWallet,
          item: action.payload //src
        }
      }
    }
    case WALLET_ONCLICKED_ID: {
      return {
        ...state,
        walletActiveId: action.payload
      }
    }
    case ON_KEY_UP: {
      return {
        ...state,
        currentItemOfWallet:{
          ...state.currentItemOfWallet,
          Name: action.payload
        }
      }
    }
    case GET_WALLETS: {
      return {
        ...state,
        wallets: action.payload,
        loading: false
      }
    }
    case WALLETS_ERROR: {
      return {
        loading: false,
        error: action.payload
      }
    }
    
    default:
      return state;
  }
}

export default walletReducer;