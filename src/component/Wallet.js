import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function Wallet(props) {
  const { wallets, walletActiveId, chooseWallet, walletOnClickedItem } = props;
  return (
    <div>
      <h4>Pick your color</h4>
      <p>
        {wallets.length ? wallets.map(({ _id, src }) => (
          <img
            className={walletActiveId === _id ? 'PassportCover PassportCover-Clicked' : 'PassportCover'}
            src={src} alt={_id}
            width={60} height={60}
            key={_id}
            onClick={() => { chooseWallet({ _id, src }); walletOnClickedItem(_id) }}
          />
        )): <ClipLoader color={"rgb(255, 166, 0)"} loading={true} css={""} size={40}/> }
      </p>
    </div>
  )
}

export default Wallet
