import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, Input, Button, Form } from "reactstrap";
import Charms from "../component/Charms";
import PassportDisplay from "../component/PassportDisplay";
import Passports from "../component/Passports";
import "./Style.css";
import { createAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import {
  getPassportCovers,
  getCharms,
} from "../reducers/action/passportAction";

export default function PassportPage() {
  const dispatch = useDispatch();
  const passportCovers = useSelector((state) => state.passport.passportCovers);
  const charms = useSelector((state) => state.passport.charms);

  useEffect(() => {
    dispatch(getPassportCovers());
    dispatch(getCharms());
  }, [dispatch]);

  const passportActiveId = useSelector(
    (state) => state.passport.passportActiveId
  );

  const charmActiveId = useSelector((state) => state.passport.charmActiveId);
  const currentItemOfPassport = useSelector(
    (state) => state.passport.currentItemOfPassport
  );

  const { Name, item, Charm } = currentItemOfPassport;

  const choosePassportCover = ({ src }) => {
    const action = createAction("CHOOSE_PASSPORT_COVER");
    dispatch(action(src));
  };

  const passportOnClickedItem = (id) => {
    const action = createAction("PASSPORT_ONCLICKED_ID");
    dispatch(action(id));
  };
  const chooseCharm = ({ src }) => {
    let action = createAction("CHOOSE_CHARM");
    dispatch(action(src));
  };

  const charmOnClickedItem = (id) => {
    let action = createAction("CHARM_ONCLICKED_ID");
    dispatch(action(id));
  };

  const onKeyUp = (event) => {
    let action = createAction("ON_KEY_UP");
    dispatch(action(event.target.value));
  };
  const updateCart = () => {
    let action = createAction("UPDATE_CART");
    dispatch(action(currentItemOfPassport));
  };
  const handleFocus = (event) => {
    event.target.select();
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Row>
        <Col>
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
                onChange={(event) => onKeyUp(event)}
                placeholder={"Type your name"}
                value={Name}
                onFocus={handleFocus}
                maxLength="8"
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

        <PassportDisplay Name={Name} item={item} Charm={Charm} />
      </Row>
    </Container>
  );
}
