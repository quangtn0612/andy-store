import React from 'react'

function WalletDisplay(props) {
  const { item, Name } = props
  return (
    <div>
      <img src={item} className="currentPassportCover" alt={item}/>
                  <p className="walletCurrentName">{Name}</p>
    </div>
  )
}

export default WalletDisplay
