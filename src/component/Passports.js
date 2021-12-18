import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";


function Passports(props) {
  const { choosePassportCover, passportOnClickedItem, passportCovers, passportActiveId } = props;

  return (
    <div>
      <h4>Pick your color</h4>
      <p>
        {passportCovers.length ? passportCovers.map(({ _id, src }) => (
          <img
            className={passportActiveId === _id ? 'PassportCover PassportCover-Clicked' : 'PassportCover'}
            src={src} width={60} height={60} key={_id} alt={_id}
            onClick={() => { choosePassportCover({ src }); passportOnClickedItem(_id) }} ></img>
        )) : <ClipLoader color={"rgb(255, 166, 0)"} loading={true} css={""} size={40}/> }
      </p>
    </div>
  )
}

export default Passports
