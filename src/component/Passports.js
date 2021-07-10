import React from 'react'



function Passports(props) {
  const { choosePassportCover, passportOnClickedItem, passportCovers, passportActiveId } = props;
  return (
    <div>
      { }
      <h4>Pick your color</h4>
      <p>
        {passportCovers.map(({ _id, src }) => (
          <img
            className={passportActiveId === _id ? 'PassportCover PassportCover-Clicked' : 'PassportCover'}
            src={src} width={60} height={60} key={_id} alt={_id}
            onClick={() => { choosePassportCover({ src }); passportOnClickedItem(_id) }} ></img>
        ))}
      </p>
    </div>
  )
}

export default Passports
