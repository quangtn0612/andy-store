export const choosePassportAction = (src) => {
  return {
    type: 'CHOOSE_PASSPORT_COVER',
    payload: src
  }
}
export const passportOnClickedItemAction = (id) => {
  return {
    type: 'PASSPORT_ONCLICKED_ID',
    payload: id
  }
}
export const chooseCharmAction = (src) => {
  return {
    type: 'CHOOSE_CHARM',
    payload: src
  }
}
export const charmOnClickedItemAction = (id) => {
  return {
    type: 'CHARM_ONCLICKED_ID',
    payload: id
  }
}
export const onKeyUpAction = (text) => {
  return {
    type: 'ON_KEY_UP',
    payload: text
  }
}
export const updateCartAction = (currentItem) => {
  return {
    type: 'UPDATE_CART',
    payload: currentItem
  }
}
export const deleteItemAction = (theOrder) => {
  return {
    type: 'DELETE_ITEM',
    payload: theOrder
  }
}
