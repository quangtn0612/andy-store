import React, { Component } from 'react';
import { Container, Col, Row, Button, Input } from 'reactstrap';
import './Style.css';
import { DataContext } from '../context/DataContext';

export default class Wallet extends Component {
   static contextType = DataContext;
   render() {
      const { wallets, walletActiveId, onKeyUp, chooseWallet, walletOnClickedItem } = this.context; //passport state
      const { Name, item } = this.context.currentItemOfWallet; //current item in cart
      // console.log(wallets);
      return (
         <Container>
            <Row>
               <Col >
                  <Row>
                     <h4>Pick your color</h4>
                     <p>
                        {wallets.map(({ _id, src }) => (
                           <img 
                              className={walletActiveId === _id ? 'PassportCover PassportCover-Clicked' : 'PassportCover'} 
                              src={src} alt={_id}
                              width={60} height={60} 
                              key={_id}
                              onClick={() => { chooseWallet({ _id, src }); walletOnClickedItem(_id) }} 
                           />
                        ))
                        
                        }
                     </p>
                  </Row>
                  <Row>
                     <Input type="text" onKeyUp={(event) => onKeyUp(event)} placeholder={'Type your name'} />
                     {/* cart */}
                     <DataContext.Consumer>
                        {({ updateCart }) => <Button className="AddToCartButton" color="primary" onClick={updateCart}>Add to cart</Button>}
                     </DataContext.Consumer>
                  </Row>
               </Col>
               <Col lg={6}>
                  <img src={item} className="currentPassportCover" alt={item}/>
                  <p className="walletCurrentName">{Name}</p>
               </Col>




            </Row>
         </Container>
      )
   }
}
