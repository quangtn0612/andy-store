// import axios from 'axios';

const initialState = {
  passportCovers: [
    {
      _id: "60dd90742364ee7a22c93bc5",
      src: "images/passport/1.jpg",
      createdAt: "2021-07-01T09:52:52.480Z",
      updatedAt: "2021-07-01T09:52:52.480Z",
      __v: 0
    },
    {
      _id: "60dd90742364ee7a22c93bc6",
      src: "images/passport/2.jpg",
      createdAt: "2021-07-01T09:52:52.480Z",
      updatedAt: "2021-07-01T09:52:52.480Z",
      __v: 0
    },
    {
      _id: "60dd90742364ee7a22c93bc7",
      src: "images/passport/3.jpg",
      createdAt: "2021-07-01T09:52:52.480Z",
      updatedAt: "2021-07-01T09:52:52.480Z",
      __v: 0
    },
    {
      _id: "60dd90742364ee7a22c93bc8",
      src: "images/passport/4.jpg",
      createdAt: "2021-07-01T09:52:52.480Z",
      updatedAt: "2021-07-01T09:52:52.480Z",
      __v: 0
    },
    {
      _id: "60dd90742364ee7a22c93bc9",
      src: "images/passport/5.jpg",
      createdAt: "2021-07-01T09:52:52.481Z",
      updatedAt: "2021-07-01T09:52:52.481Z",
      __v: 0
    },
    {
      _id: "60dd90742364ee7a22c93bcc",
      src: "images/passport/8.jpg",
      createdAt: "2021-07-01T09:52:52.481Z",
      updatedAt: "2021-07-01T09:52:52.481Z",
      __v: 0
    },
    {
      _id: "60dd90742364ee7a22c93bca",
      src: "images/passport/6.jpg",
      createdAt: "2021-07-01T09:52:52.481Z",
      updatedAt: "2021-07-01T09:52:52.481Z",
      __v: 0
    },
    {
      _id: "60dd90742364ee7a22c93bcb",
      src: "images/passport/7.jpg",
      createdAt: "2021-07-01T09:52:52.481Z",
      updatedAt: "2021-07-01T09:52:52.481Z",
      __v: 0
    },
    {
      _id: "60dd90742364ee7a22c93bcd",
      src: "images/passport/9.jpg",
      createdAt: "2021-07-01T09:52:52.481Z",
      updatedAt: "2021-07-01T09:52:52.481Z",
      __v: 0
    },
    {
      _id: "60dd90742364ee7a22c93bcf",
      src: "images/passport/11.jpg",
      createdAt: "2021-07-01T09:52:52.481Z",
      updatedAt: "2021-07-01T09:52:52.481Z",
      __v: 0
    },
    {
      _id: "60dd90742364ee7a22c93bce",
      src: "images/passport/10.jpg",
      createdAt: "2021-07-01T09:52:52.481Z",
      updatedAt: "2021-07-01T09:52:52.481Z",
      __v: 0
    },
    {
      _id: "60dd90742364ee7a22c93bd1",
      src: "images/passport/13.jpg",
      createdAt: "2021-07-01T09:52:52.481Z",
      updatedAt: "2021-07-01T09:52:52.481Z",
      __v: 0
    },
    {
      _id: "60dd90742364ee7a22c93bd0",
      src: "images/passport/12.jpg",
      createdAt: "2021-07-01T09:52:52.481Z",
      updatedAt: "2021-07-01T09:52:52.481Z",
      __v: 0
    },
    {
      _id: "60dd90742364ee7a22c93bd2",
      src: "images/passport/14.jpg",
      createdAt: "2021-07-01T09:52:52.481Z",
      updatedAt: "2021-07-01T09:52:52.481Z",
      __v: 0
    },
    {
      _id: "60dd90742364ee7a22c93bd3",
      src: "images/passport/15.jpg",
      createdAt: "2021-07-01T09:52:52.481Z",
      updatedAt: "2021-07-01T09:52:52.481Z",
      __v: 0
    }
  ],
  charms: [
    {
      _id: "60dd90305b9a0f7a0dac61e9",
      src: "images/charm/0.png",
      createdAt: "2021-07-01T09:51:44.613Z",
      updatedAt: "2021-07-01T09:51:44.613Z",
      __v: 0
    },
    {
      _id: "60dd90305b9a0f7a0dac61ea",
      src: "images/charm/1.png",
      createdAt: "2021-07-01T09:51:44.613Z",
      updatedAt: "2021-07-01T09:51:44.613Z",
      __v: 0
    },
    {
      _id: "60dd90305b9a0f7a0dac61eb",
      src: "images/charm/2.png",
      createdAt: "2021-07-01T09:51:44.613Z",
      updatedAt: "2021-07-01T09:51:44.613Z",
      __v: 0
    },
    {
      _id: "60dd90305b9a0f7a0dac61ec",
      src: "images/charm/3.png",
      createdAt: "2021-07-01T09:51:44.613Z",
      updatedAt: "2021-07-01T09:51:44.613Z",
      __v: 0
    },
    {
      _id: "60dd90305b9a0f7a0dac61ed",
      src: "images/charm/4.png",
      createdAt: "2021-07-01T09:51:44.613Z",
      updatedAt: "2021-07-01T09:51:44.613Z",
      __v: 0
    },
    {
      _id: "60dd90305b9a0f7a0dac61ee",
      src: "images/charm/5.png",
      createdAt: "2021-07-01T09:51:44.613Z",
      updatedAt: "2021-07-01T09:51:44.613Z",
      __v: 0
    },
    {
      _id: "60dd90305b9a0f7a0dac61ef",
      src: "images/charm/6.png",
      createdAt: "2021-07-01T09:51:44.613Z",
      updatedAt: "2021-07-01T09:51:44.613Z",
      __v: 0
    },
    {
      _id: "60dd90305b9a0f7a0dac61f0",
      src: "images/charm/7.png",
      createdAt: "2021-07-01T09:51:44.614Z",
      updatedAt: "2021-07-01T09:51:44.614Z",
      __v: 0
    },
    {
      _id: "60dd90305b9a0f7a0dac61f1",
      src: "images/charm/8.png",
      createdAt: "2021-07-01T09:51:44.614Z",
      updatedAt: "2021-07-01T09:51:44.614Z",
      __v: 0
    },
    {
      _id: "60dd90305b9a0f7a0dac61f2",
      src: "images/charm/9.png",
      createdAt: "2021-07-01T09:51:44.614Z",
      updatedAt: "2021-07-01T09:51:44.614Z",
      __v: 0
    },
    {
      _id: "60dd90305b9a0f7a0dac61f3",
      src: "images/charm/10.png",
      createdAt: "2021-07-01T09:51:44.614Z",
      updatedAt: "2021-07-01T09:51:44.614Z",
      __v: 0
    },
    {
      _id: "60dd90305b9a0f7a0dac61f5",
      src: "images/charm/12_2.png",
      createdAt: "2021-07-01T09:51:44.614Z",
      updatedAt: "2021-07-01T09:51:44.614Z",
      __v: 0
    },
    {
      _id: "60dd90305b9a0f7a0dac61f4",
      src: "images/charm/11.png",
      createdAt: "2021-07-01T09:51:44.614Z",
      updatedAt: "2021-07-01T09:51:44.614Z",
      __v: 0
    },
    {
      _id: "60dd90305b9a0f7a0dac61f6",
      src: "images/charm/13_2.png",
      createdAt: "2021-07-01T09:51:44.614Z",
      updatedAt: "2021-07-01T09:51:44.614Z",
      __v: 0
    }
  ],
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
  passportActiveId: '60dd90742364ee7a22c93bc5', //FIRST ITEM
  charmActiveId: '60dd90305b9a0f7a0dac61e9', //FIRST ITEM
  cartItems: []
};


// axios.get('http://localhost:8001/passports/')
// .then(res=>{
//   initialState.passportCovers= res.data
// })

const passportReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_PASSPORT_COVER': {
      return {
        ...state,
        currentItemOfPassport: {
          ...state.currentItemOfPassport,
          item: action.payload //src
        }
      }
    }
    case 'PASSPORT_ONCLICKED_ID': {
      return {
        ...state,
        passportActiveId: action.payload
      }
    }
    case 'CHOOSE_CHARM': {
      return {
        ...state,
        currentItemOfPassport: {
          ...state.currentItemOfPassport,
          Charm: action.payload //src
        }
      }
    }
    case 'CHARM_ONCLICKED_ID': {
      return {
        ...state,
        charmActiveId: action.payload
      }
    }

    case 'ON_KEY_UP': {
      return {
        ...state,
        currentItemOfPassport:{
          ...state.currentItemOfPassport,
          Name: action.payload
        }
      }
    }
    case 'UPDATE_CART': {
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload)
      }
    }
    case 'DELETE_ITEM': {
      const TheOrder = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.slice(0, TheOrder).concat(state.cartItems.slice(TheOrder + 1, state.cartItems.length))
      }
    }
    default:
      return state;
  }
}

export default passportReducer;