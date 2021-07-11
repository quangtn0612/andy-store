// import axios from 'axios';

const initialState = {
  wallets: [],
  currentItemOfWallet: {
    item: 'images/wallet/1.jpg',
    Charm: 'images/charm/0.png',
    Name: 'QUANG'
  },
  walletActiveId: '60dd6c274aa9257078ef0493', //FIRST ITEM
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_WALLET_COVER': {
      return {
        ...state,
        currentItemOfWallet: {
          ...state.currentItemOfWallet,
          item: action.payload //src
        }
      }
    }
    case 'WALLET_ONCLICKED_ID': {
      return {
        ...state,
        walletActiveId: action.payload
      }
    }
    case 'ON_KEY_UP': {
      return {
        ...state,
        currentItemOfWallet:{
          ...state.currentItemOfWallet,
          Name: action.payload
        }
      }
    }
    default:
      return state;
  }
}

export default walletReducer;