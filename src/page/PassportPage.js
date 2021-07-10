import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row, Input, Button, Form } from 'reactstrap';
import Charms from '../component/Charms';
import PassportDisplay from '../component/PassportDisplay';
import Passports from '../component/Passports';
import './Style.css';
import {
  charmOnClickedItemAction,
  chooseCharmAction,
  choosePassportAction,
  onKeyUpAction,
  passportOnClickedItemAction,
  updateCartAction
} from '../actions/passport';

export default function PassportPage() {
  const passportCovers = useSelector(state => state.passport.passportCovers);
  const passportActiveId = useSelector(state => state.passport.passportActiveId);
  const charms = useSelector(state => state.passport.charms);
  const charmActiveId = useSelector(state => state.passport.charmActiveId);
  // const currentItem = useSelector(state => state.passport.currentItem);
  const currentItemOfPassport = useSelector(state => state.passport.currentItemOfPassport);

  const dispatch = useDispatch();
  const { Name, item, Charm } = currentItemOfPassport;

  const choosePassportCover = ({ src }) => {
    let action = choosePassportAction(src);
    dispatch(action);
  }

  const passportOnClickedItem = (id) => {
    let action = passportOnClickedItemAction(id);
    dispatch(action);
  }
  const chooseCharm = (event) => {
    let action = chooseCharmAction(event.target.src.slice(22,));
    dispatch(action);
  }

  const charmOnClickedItem = (id) => {
    let action = charmOnClickedItemAction(id);
    dispatch(action);
  }

  const onKeyUp = (event) => {
    let action = onKeyUpAction(event.target.value);
    dispatch(action);
  }
  const updateCart = () => {
    // console.log(currentItemOfPassport);
    let action = updateCartAction(currentItemOfPassport);
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