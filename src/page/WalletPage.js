import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Col, Container, Row, Input, Button } from 'reactstrap';
import Wallet from '../component/Wallet';
import WalletDisplay from '../component/WalletDisplay';
import './Style.css';
import {
   updateCartAction,
} from '../actions/passport';
import {
   chooseWalletAction,
   walletOnClickedItemAction,
   onKeyUpAction
} from '../actions/wallet';

export default function WalletPage() {
   const wallets = useSelector(state => state.wallet.wallets);
   const walletActiveId = useSelector(state => state.wallet.walletActiveId);
   const currentItemOfWallet = useSelector(state => state.wallet.currentItemOfWallet);

   const { Name, item } = currentItemOfWallet;

   const dispatch = useDispatch();

   const chooseWallet = ({ src }) => {
      let action = chooseWalletAction(src);
      dispatch(action);
   }
   const walletOnClickedItem = (id) => {
      let action = walletOnClickedItemAction(id);
      dispatch(action);
   }
   const onKeyUp = (event) => {
      let action = onKeyUpAction(event.target.value);
      dispatch(action);
   }
   const updateCart = () => {
      let action = updateCartAction(currentItemOfWallet);
      dispatch(action);
   }
   const handleFocus = (event) => {
      event.target.select();
   }
   const onSubmit = (event) => {
      event.preventDefault();
   }
   return (
      <Container>
         <Row>
            <Col >
               <Row>
                  <Wallet
                     wallets={wallets}
                     walletActiveId={walletActiveId}
                     chooseWallet={chooseWallet}
                     walletOnClickedItem={walletOnClickedItem}
                  />
               </Row>
               <Row>
                  <Form onSubmit={(e)=>onSubmit(e)}>
                     <Input
                        type="text"
                        onChange={event => onKeyUp(event)}
                        placeholder={'Type your name'}
                        value={Name}
                        onFocus={handleFocus}
                     />
                     <Button
                        type="submit"
                        className="AddToCartButton"
                        color="primary"
                        onClick={updateCart}
                     >
                        Add to cart
                     </Button>
                  </Form>
                  
               </Row>
            </Col>
            <Col lg={6}>
               <WalletDisplay
                  item={item}
                  Name={Name}
               />
            </Col>
         </Row>
      </Container>
   )
}