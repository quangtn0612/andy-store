import React from 'react'


function Charms(props) {
  const { charmActiveId, chooseCharm, charmOnClickedItem, charms } = props;
  return (
    <div>
      <h4>Pick your charm</h4>
      <p>
        {charms.map(({ _id, src }) => (
          <img
            className={charmActiveId === _id ? 'PassportCover PassportCover-Clicked' : 'PassportCover'}
            src={src} width={60} height={60} key={_id} alt={_id}
            onClick={(event) => { chooseCharm(event); charmOnClickedItem(_id) }} ></img>
        ))}
      </p>
    </div>
  )
}

export default Charms
