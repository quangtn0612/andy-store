import React, { Component } from 'react';
import axios from 'axios';

export const DataContext = React.createContext();

export class DataProvider extends Component {
   constructor() {
      super();
      this.state = {
         cartItems: [],
         passportCovers: [],
         charms: [],
         wallets: [],
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

   componentDidMount() {
      axios.all([
         axios.get('http://localhost:8001/wallets/'),
         axios.get('http://localhost:8001/passports/'),
         axios.get('http://localhost:8001/charms/'),
      ])
         .then(
            axios.spread((walletsRes,passportsRes,charmsRes) => {
               this.setState({
                  wallets: walletsRes.data,
                  passportCovers: passportsRes.data,
                  charms: charmsRes.data
               })
            })
         )
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