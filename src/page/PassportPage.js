import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import Charms from '../component/Charms';
import CustomerName from '../component/CustomerName';
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
            <CustomerName
              onKeyUp={onKeyUp}
              updateCart={updateCart}
              Name={Name}
            />
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