import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {
   constructor() {
      super();
      this.state = {
         cartItems: [],
         passportCovers: [
            {
               id: 1,
               src: 'images/passport/1.jpg'
            },
            {
               id: 2,
               src: 'images/passport/2.jpg'
            },
            {
               id: 3,
               src: 'images/passport/3.jpg'
            },
            {
               id: 4,
               src: 'images/passport/4.jpg'
            },
            {
               id: 5,
               src: 'images/passport/5.jpg'
            },
            {
               id: 6,
               src: 'images/passport/6.jpg'
            },
            {
               id: 7,
               src: 'images/passport/7.jpg'
            },
            {
               id: 8,
               src: 'images/passport/8.jpg'
            },
            {
               id: 9,
               src: 'images/passport/9.jpg'
            },
            {
               id: 10,
               src: 'images/passport/10.jpg'
            },
            {
               id: 11,
               src: 'images/passport/11.jpg'
            },
            {
               id: 12,
               src: 'images/passport/12.jpg'
            },
            {
               id: 13,
               src: 'images/passport/13.jpg'
            },
            {
               id: 14,
               src: 'images/passport/14.jpg'
            },
            {
               id: 15,
               src: 'images/passport/15.jpg'
            }
         ],
         charms: [
            {
               id: 0,
               src: 'images/charm/0.png'
            },
            {
               id: 1,
               src: 'images/charm/1.png'
            },
            {
               id: 2,
               src: 'images/charm/2.png'
            },
            {
               id: 3,
               src: 'images/charm/3.png'
            },
            {
               id: 4,
               src: 'images/charm/4.png'
            },
            {
               id: 5,
               src: 'images/charm/5.png'
            },
            {
               id: 6,
               src: 'images/charm/6.png'
            },
            {
               id: 7,
               src: 'images/charm/7.png'
            },
            {
               id: 8,
               src: 'images/charm/8.png'
            },
            {
               id: 9,
               src: 'images/charm/9.png'
            },
            {
               id: 10,
               src: 'images/charm/10.png'
            },
            {
               id: 11,
               src: 'images/charm/11.png'
            },
            {
               id: 12,
               src: 'images/charm/12_2.png'
            },
            {
               id: 13,
               src: 'images/charm/13_2.png'
            }
         ],
         wallets: [
            {
               id: 1,
               src: 'images/wallet/1.jpg'
            },
            {
               id: 2,
               src: 'images/wallet/2.jpg'
            },
            {
               id: 3,
               src: 'images/wallet/3.jpg'
            },
            {
               id: 4,
               src: 'images/wallet/4.jpg'
            },
            {
               id: 5,
               src: 'images/wallet/5.jpg'
            },
            {
               id: 6,
               src: 'images/wallet/6.jpg'
            },
            {
               id: 7,
               src: 'images/wallet/7.jpg'
            },
            {
               id: 8,
               src: 'images/wallet/8.jpg'
            },
            {
               id: 9,
               src: 'images/wallet/9.jpg'
            },
            {
               id: 10,
               src: 'images/wallet/10.jpg'
            },
            {
               id: 11,
               src: 'images/wallet/11.jpg'
            },
            {
               id: 12,
               src: 'images/wallet/12.jpg'
            },
            {
               id: 13,
               src: 'images/wallet/13.jpg'
            },
            {
               id: 14,
               src: 'images/wallet/14.jpg'
            },
            {
               id: 15,
               src: 'images/wallet/15.jpg'
            }
         ],
         // currentItem: {
         //    PassportCover: 'images/passport/1.jpg',
         //    Charm: 'images/charm/0.png',
         //    Name: 'QUANG'
         // },
         currentItemOfPassport: {
            item: 'images/passport/1.jpg',
            Charm: 'images/charm/1.png',
            Name: 'QUANG'
         },
         currentItemOfWallet: {
            item: 'images/wallet/1.jpg',
            Charm: 'images/charm/0.png',
            Name: 'QUANG'
         },
         PassportCover: 'images/passport/1.jpg',
         wallet: 'images/wallet/1.jpg',
         Charm: 'images/charm/1.png',

         passportActiveId: 1,
         walletActiveId: 1,
         charmActiveId: 1
      }
      this.choosePassportCover = this.choosePassportCover.bind(this);
      this.chooseCharm = this.chooseCharm.bind(this);
      this.chooseWallet = this.chooseWallet.bind(this);
      this.onKeyUp = this.onKeyUp.bind(this);

      this.passportOnClickedItem = this.passportOnClickedItem.bind(this);
      this.walletOnClickedItem = this.walletOnClickedItem.bind(this);
      this.charmOnClickedItem = this.charmOnClickedItem.bind(this);

      this.updateCart = this.updateCart.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
   }


   choosePassportCover({ id, src }) {
      // const { cartItems } = this.state;
      this.setState({
         currentItemOfPassport: {
            ...this.state.currentItemOfPassport,
            item: src
         }
      })
   }
   chooseWallet({ id, src }) {
      // const { cartItems } = this.state;
      this.setState({
         currentItemOfWallet: {
            ...this.state.currentItemOfWallet,
            item: src
         }
      })
   }

   chooseCharm(event) {
      this.setState({
         currentItemOfPassport: {
            ...this.state.currentItemOfPassport,
            Charm: event.target.src.slice(22,)
         }
      })
   }
   onKeyUp(event) {
      this.setState({
         currentItemOfPassport: {
            ...this.state.currentItemOfPassport,
            Name: event.target.value
         },
         currentItemOfWallet: {
            ...this.state.currentItemOfWallet,
            Name: event.target.value
         }

      })
   }
   passportOnClickedItem(id) {
      this.setState({
         passportActiveId: id
      })
   }
   walletOnClickedItem(id) {
      this.setState({
         walletActiveId: id
      })
   }
   charmOnClickedItem(id) {
      this.setState({
         charmActiveId: id
      })
   }

   updateCart(item) {
      let currentTab = item.target.baseURI.split('/').slice(3, 4).toString(); //get the current tab (passport or wallet)
      if (currentTab !== 'wallet') {
         this.setState(state => {
            return {
               cartItems: state.cartItems.concat(this.state.currentItemOfPassport)
            }
         })
      }
      else {
         this.setState(state => {
            return {
               cartItems: state.cartItems.concat(this.state.currentItemOfWallet)
            }
         })
      }
      console.log(currentTab);
   }

   deleteItem(id) {
      this.setState({
         cartItems:
            this.state.cartItems.slice(0, id).concat(this.state.cartItems.slice(id + 1, this.state.cartItems.length))

      })
   }
   render() {
      const {
         passportCovers, charms, wallets,             // img src
         passportActiveId, walletActiveId, charmActiveId, //active id
         currentItemOfPassport, currentItemOfWallet,      //current item chose
         cartItems
      } = this.state;

      const { onKeyUp, onPassportTab, onWalletTab,    //onChange
         chooseCharm, choosePassportCover, chooseWallet,    //chose item ui/ux
         passportOnClickedItem, charmOnClickedItem, walletOnClickedItem,   //onClick item
         updateCart, deleteItem   //update, delete item in cart
      } = this;

      return <DataContext.Provider value={{
         passportCovers, charms, wallets,    // img src
         passportActiveId, charmActiveId, walletActiveId,   //active id
         currentItemOfPassport, currentItemOfWallet,  //current item chose
         onKeyUp, onPassportTab, onWalletTab,    //onChange
         chooseCharm, chooseWallet, choosePassportCover, //chose item ui/ux
         updateCart, deleteItem,    //update, delete item in cart
         passportOnClickedItem, walletOnClickedItem, charmOnClickedItem,   //onClick item
         cartItems

      }}>
         {this.props.children}
      </DataContext.Provider>
   }
}