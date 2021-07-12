import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Col, Container, Row, Input, Button } from 'reactstrap';
import Wallet from '../component/Wallet';
import WalletDisplay from '../component/WalletDisplay';
import './Style.css';
import { createAction } from '@reduxjs/toolkit';
import { useState, useEffect } from 'react';
import { getWallets } from '../reducers/action/walletAction';

export default function WalletPage() {
   const dispatch = useDispatch();
   const wallets = useSelector(state => state.wallet.wallets);
   const { loading, error } = wallets;
   useEffect(() => {
      dispatch(getWallets())
   }, [dispatch])


   const walletActiveId = useSelector(state => state.wallet.walletActiveId);
   const currentItemOfWallet = useSelector(state => state.wallet.currentItemOfWallet);

   const { Name, item } = currentItemOfWallet;


   const chooseWallet = ({ src }) => {
      let action = createAction('CHOOSE_WALLET_COVER');
      dispatch(action(src));
   }
   const walletOnClickedItem = (id) => {
      let action = createAction('WALLET_ONCLICKED_ID');
      dispatch(action(id));
   }
   const onKeyUp = (event) => {
      let action = createAction('ON_KEY_UP');
      dispatch(action(event.target.value));
   }
   const updateCart = () => {
      let action = createAction('UPDATE_CART');
      dispatch(action(currentItemOfWallet));
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
               {loading ? "Loading..." : error ? error.message : ''}

               <Row>

                  <Wallet
                     wallets={wallets}
                     walletActiveId={walletActiveId}
                     chooseWallet={chooseWallet}
                     walletOnClickedItem={walletOnClickedItem}
                  />
               </Row>
               <Row>
                  <Form onSubmit={(e) => onSubmit(e)}>
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