import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row, Input, Button, Form } from 'reactstrap';
import Charms from '../component/Charms';
import PassportDisplay from '../component/PassportDisplay';
import Passports from '../component/Passports';
import './Style.css';
import { createAction } from '@reduxjs/toolkit'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function PassportPage() {
  const [passportCovers, setPassportCovers] = useState([]);
  const [charms, setCharms] = useState([]);

  useEffect(() => {
    axios.all([
      axios.get('http://localhost:8001/passports/'),
      axios.get('http://localhost:8001/charms/')
    ])
      .then(axios.spread((res1, res2) => {
        setPassportCovers(res1.data);
        setCharms(res2.data);
      }));
  }, [])

  const passportActiveId = useSelector(state => state.passport.passportActiveId);
  const charmActiveId = useSelector(state => state.passport.charmActiveId);
  const currentItemOfPassport = useSelector(state => state.passport.currentItemOfPassport);

  const dispatch = useDispatch();

  const { Name, item, Charm } = currentItemOfPassport;

  const choosePassportCover = ({ src }) => {
    const action = createAction('CHOOSE_PASSPORT_COVER');
    dispatch(action(src))
  }

  const passportOnClickedItem = (id) => {
    const action = createAction('PASSPORT_ONCLICKED_ID')
    dispatch(action(id));
  }
  const chooseCharm = (event) => {
    let action = createAction('CHOOSE_CHARM');
    dispatch(action(event.target.src.slice(22,)));
  }

  const charmOnClickedItem = (id) => {
    let action = createAction('CHARM_ONCLICKED_ID');
    dispatch(action(id));
  }

  const onKeyUp = (event) => {
    let action = createAction('ON_KEY_UP');
    dispatch(action(event.target.value));
  }
  const updateCart = () => {
    // console.log(currentItemOfPassport);
    let action = createAction('UPDATE_CART');
    dispatch(action(currentItemOfPassport));
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
            <Passports
              choosePassportCover={choosePassportCover}
              passportOnClickedItem={passportOnClickedItem}
              passportCovers={passportCovers}
              passportActiveId={passportActiveId}
            />
          </Row>
          <Row>
            <Charms
              charms={charms}
              charmActiveId={charmActiveId}
              chooseCharm={chooseCharm}
              charmOnClickedItem={charmOnClickedItem}
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
                Add to cart</Button>
            </Form>

          </Row>
        </Col>

        <PassportDisplay
          Name={Name}
          item={item}
          Charm={Charm}
        />
      </Row>
    </Container>
  )
}