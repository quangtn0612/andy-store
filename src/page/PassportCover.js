import React,{ Component } from 'react';
import { Container, Col, Row, Button, Input } from 'reactstrap';
import './Style.css';
import { DataContext } from '../context/DataContext'

export default class PassportCover extends Component{   
   static contextType = DataContext;
   
   render()
   {
      const { passportCovers, charms, choosePassportCover,
      onKeyUp, chooseCharm, passportOnClickedItem, charmOnClickedItem, 
      passportActiveId, charmActiveId} = this.context; //passport state
      
      const { Name, item, Charm } = this.context.currentItemOfPassport; //current item in cart

      
      return(
      <Container>
      <Row>
         <Col >
            <Row>
               <h4>Pick your color</h4>
               <p>
               {passportCovers.map(({ id, src })=>(
                  <img className={passportActiveId === id ? 'PassportCover PassportCover-Clicked':'PassportCover'} src={src} width={60} height={60} key={id} 
                  onClick={()=>{choosePassportCover({ id, src });passportOnClickedItem(id)}} ></img>
               ))}
               </p>
            </Row>
            <Row>
               <h4>Pick your charm</h4>
               <p>
               {charms.map(({ id, src })=>(
                  <img className={charmActiveId === id ? 'PassportCover PassportCover-Clicked':'PassportCover'} src={src} width={60} height={60} key={id} 
                  onClick={(event)=>{chooseCharm(event);charmOnClickedItem(id)}} ></img>
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
         <Col lg={4}>
         <img src={item} className="currentPassportCover"/>
         <img src={Charm} className="currentCharm"/>
         <p className="passCurrentName">{Name}</p>
         </Col>
      </Row>
      </Container>
      )
   }
}
