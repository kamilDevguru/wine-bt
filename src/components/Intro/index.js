import React from "react"
import { Row, Col } from "react-bootstrap"

import "./style.scss"

const Intro = (props) => {
  return (
    <div className="intro__container">
      <h1 className="intro__title">
        Cstar makes shipping wine easy
      </h1>
      <Row className="intro__item-container">
        {props.services.map((service, index) => (
          <Col sm={12} md={6} lg={index % 3 === 1 ? 5 : index % 3 === 2 ? 3 : 4} className="intro__item">
            <img src={service.icon.resolutions.src} alt="mark" />
            <span className="intro__item-txt">{service.text}</span>
          </Col>
        ))}
      </Row>
      <p className="intro__txt">
        {props.description}
      </p>
      <Row className="intro__company-container">
        {props.companyMarks.map(com => (
          <Col className="intro__company-item" sm={12} md={6} lg={3}>
            <img src={com.mark.resolutions.src} alt="company" />
          </Col>          
        ))}
      </Row>
    </div>
  )
}

export default Intro
