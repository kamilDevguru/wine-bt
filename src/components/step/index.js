import React from "react"

import ShipMark from "./image/ship-mark.png"
import "./style.scss"

const BreadCrumb = () => {
  return (
    <div className="step__container">
      <h2 className="step__title">
        Everything you need to ship wine to China
      </h2>
      <div className="step__sub-container">
        <div className="step__item">
          <img src={ShipMark} alt="mark" />
          <span className="step__text">
            Outbound freight forwarding by air or sea
          </span>
        </div>
        
        <div className="step__item">
          <img src={ShipMark} alt="mark" />
          <span className="step__text">
            Outbound freight forwarding by air or sea
          </span>
        </div>
        
        <div className="step__item">
          <img src={ShipMark} alt="mark" />
          <span className="step__text">
            Outbound freight forwarding by air or sea
          </span>
        </div>
        
        <div className="step__item">
          <img src={ShipMark} alt="mark" />
          <span className="step__text">
            Outbound freight forwarding by air or sea
          </span>
        </div>
        
      </div>
    </div>
  )
}

export default BreadCrumb
