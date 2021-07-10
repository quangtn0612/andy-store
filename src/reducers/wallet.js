// import axios from 'axios';

const initialState = {
  wallets: [
    {
      _id: "60dd6c274aa9257078ef0493",
      src: "images/wallet/1.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    },
    {
      _id: "60dd6c274aa9257078ef0494",
      src: "images/wallet/2.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    },
    {
      _id: "60dd6c274aa9257078ef0495",
      src: "images/wallet/3.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    },
    {
      _id: "60dd6c274aa9257078ef0496",
      src: "images/wallet/4.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    },
    {
      _id: "60dd6c274aa9257078ef0497",
      src: "images/wallet/5.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    },
    {
      _id: "60dd6c274aa9257078ef0498",
      src: "images/wallet/6.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    },
    {
      _id: "60dd6c274aa9257078ef0499",
      src: "images/wallet/7.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    },
    {
      _id: "60dd6c274aa9257078ef049a",
      src: "images/wallet/8.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    },
    {
      _id: "60dd6c274aa9257078ef049b",
      src: "images/wallet/9.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    },
    {
      _id: "60dd6c274aa9257078ef049c",
      src: "images/wallet/10.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    },
    {
      _id: "60dd6c274aa9257078ef049d",
      src: "images/wallet/11.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    },
    {
      _id: "60dd6c274aa9257078ef049e",
      src: "images/wallet/12.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    },
    {
      _id: "60dd6c274aa9257078ef049f",
      src: "images/wallet/13.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    },
    {
      _id: "60dd6c274aa9257078ef04a0",
      src: "images/wallet/14.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    },
    {
      _id: "60dd6c274aa9257078ef04a1",
      src: "images/wallet/15.jpg",
      createdAt: "2021-07-01T07:17:59.445Z",
      updatedAt: "2021-07-01T07:17:59.445Z",
      __v: 0
    }
  ],
  currentItemOfWallet: {
    item: 'images/wallet/1.jpg',
    Charm: 'images/charm/0.png',
    Name: 'QUANG'
  },
  walletActiveId: '60dd6c274aa9257078ef0493', //FIRST ITEM
};


// axios.get('http://localhost:8001/wallets/')
// .then(res=>{
//   initialState.walletCovers= res.data
// })

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