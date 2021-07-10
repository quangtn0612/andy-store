import React from 'react'

function Wallet(props) {
  const { wallets, walletActiveId, chooseWallet, walletOnClickedItem } = props;
  return (
    <div>
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
    </div>
  )
}

export default Wallet
