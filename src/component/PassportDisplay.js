import React from 'react'
import { Col } from 'reactstrap';


function PassportDisplay(props) {
  const { Name, item, Charm } = props;
  return (
    <div>    
          <Col lg={4}>
             <img 
                src={item} 
                alt={item} 
                className="currentPassportCover" 
             />
             <img 
                src={Charm} 
                alt={Charm} 
                className="currentCharm" 
             />
             <p className="passCurrentName">{Name}</p>
          </Col>
    </div>
  )
}

export default PassportDisplay
