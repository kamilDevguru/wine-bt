import React from "react"
import { Row } from "react-bootstrap"

import "./style.scss"

const BreadCrumb = (props) => {
  return (
    <Row className="step__container">

      <h2 className="step__title">
        Everything you need to ship wine to China
      </h2>
      <div className="step__sub-container">
        {props.steps.map((step, index) => (
          <div key={index} className="step__item">
            <img src={step.icon.resolutions.src} alt="mark" />
            <span className="step__text">
              {step.text}
            </span>
          </div>
        ))}
      </div>
    </Row>
  )
}

export default BreadCrumb
