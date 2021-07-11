import React from 'react';
import { Table, Col, Row, Container, Form, FormGroup, Input, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import './Cart.css';
import { createAction } from '@reduxjs/toolkit'

export default function Cart() {
   const cartItems = useSelector(state => state.passport.cartItems);

   const dispatch = useDispatch();
   const deleteItem = (theOrder) => {
      let action = createAction('DELETE_ITEM');
      dispatch(action(theOrder));
   }
   
   return <Container>
      <Row>
         <Col>
            <div className="cartForm">

               <h3>Contact detail</h3>
               <Form>
                  <FormGroup>
                     <Input type="text" name="fname1" id="exampleEmail" placeholder="First Name" required />
                  </FormGroup>
                  <FormGroup>
                     <Input type="text" name="lname" id="exampleEmail" placeholder="Last Name" required />
                  </FormGroup>
                  <FormGroup>
                     <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                  </FormGroup>
                  <FormGroup>
                     <Input type="text" name="phoneno" id="exampleEmail" placeholder="Mobile Number" />
                  </FormGroup>
                  <FormGroup>
                     <Input type="text" name="address1" id="exampleEmail" placeholder="Address Line 1" />
                  </FormGroup>
                  <FormGroup>
                     <Input type="text" name="address2" id="exampleEmail" placeholder="Address Line 2" />
                  </FormGroup>
                  <FormGroup>
                     <Input type="text" name="suburb" id="exampleEmail" placeholder="Suburb" />
                  </FormGroup>
                  <FormGroup>
                     <Input type="select" name="select" id="State">
                        <option>NSW</option>
                        <option>VIC</option>
                        <option>ACT</option>
                        <option>QLD</option>
                        <option>WA</option>
                        <option>SA</option>
                        <option>TAS</option>
                        <option>NT</option>
                     </Input>
                  </FormGroup>
                  <FormGroup>
                     <Input type="text" name="state" id="exampleEmail" placeholder="State" />
                  </FormGroup>
                  <FormGroup>
                     <Input type="text" name="postcode" id="exampleEmail" placeholder="Postcode" />
                  </FormGroup>
                  <FormGroup>
                     <Button color="primary">Purchase</Button>
                  </FormGroup>
               </Form>
            </div>
         </Col>
         <Col lg={6}>
            <div className="cartForm">
               <h3>Order summary</h3>
               <Table>
                  <thead>
                     <tr>
                        <th>Item</th>
                        <th>Color</th>
                        <th>Charm</th>
                        <th>Name</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     {cartItems.map((item, id) => (
                        <tr>
                           <td>{item.item.split('/')[1]}</td>
                           <td><img src={item.item} width={40} height={40} alt={item.item} /></td>
                           <td><img src={item.Charm} width={40} height={40} alt={item.Charm} /></td>
                           <td><span className="cartText">{item.Name}</span></td>
                           <td><Button color="secondary" onClick={() => deleteItem(id)}>Delete</Button></td>
                        </tr>
                     ))}
                     <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total: <b>{cartItems.length}</b></td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </Col>
      </Row>
   </Container>

}
//currentItemOfPassport
//currentItemOfWallet