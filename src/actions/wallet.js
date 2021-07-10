export const chooseWalletAction = (src) => {
  return {
    type: 'CHOOSE_WALLET_COVER',
    payload: src
  }
}
export const walletOnClickedItemAction = (id) => {
  return {
    type: 'WALLET_ONCLICKED_ID',
    payload: id
  }
}
export const onKeyUpAction = (text) => {
  return {
    type: 'ON_KEY_UP',
    payload: text
  }
}