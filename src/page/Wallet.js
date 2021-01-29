import React,{ Component } from 'react';
import { Container, Col, Row, Button, Input } from 'reactstrap';
import './Style.css';
import { DataContext } from '../context/DataContext';

export default class Wallet extends Component{   
   static contextType = DataContext;
   render()
   {
      const { wallets, walletActiveId, onKeyUp, chooseWallet, walletOnClickedItem } = this.context; //passport state
      
      const { Name, item } = this.context.currentItemOfWallet; //current item in cart
      
      return(
      <Container>
      <Row>
         <Col >
            <Row>
               <h4>Pick your color</h4>
               <p>
               {wallets.map(({ id, src })=>(
                  <img className={walletActiveId === id ? 'PassportCover PassportCover-Clicked':'PassportCover'} src={src} width={60} height={60} key={id} 
                  onClick={()=>{chooseWallet({ id, src });walletOnClickedItem(id)}} ></img>
               ))}
               </p>
            </Row>
            <Row>
               <Input type="text" onKeyUp={(event)=>onKeyUp(event)} placeholder={'Type your name'} />
               {/* cart */}
               <DataContext.Consumer>
                  {({ updateCart }) => <Button className="AddToCartButton" color="primary" onClick={ updateCart }>Add to cart</Button>}
               </DataContext.Consumer>
            </Row>
         </Col>
         <Col lg={6}>
         <img src={item} className="currentPassportCover"/>
         <p className="walletCurrentName">{Name}</p>
         </Col>

         
         

      </Row>
      </Container>
      )
   }
}
