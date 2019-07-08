import React from "react"
import { Row, Col } from "react-bootstrap"
import classNames from "classnames"

import "./style.scss"

const Intro = (props) => {
  return (
    <div className="intro__container">
      <Row>
        <h1 className="intro__title">
          Cstar makes shipping wine easy
        </h1>
      </Row>
      <Row className="intro__item-container">
        {props.services.map((service, index) => (
          <Col key={index} sm={12} md={6} lg={index % 3 === 1 ? 5 : index % 3 === 2 ? 3 : 4} className="intro__item">
            <img src={service.icon.resolutions.src} alt="mark" />
            <span className="intro__item-txt">{service.text}</span>
          </Col>
        ))}
      </Row>
      <Row>
        <p className="intro__txt">
          {props.description}
        </p>
      </Row>
      <Row className="intro__company-container">
        {props.companyMarks.map((com, index) => (
          <Col
            key={index}
            className={
              classNames(
                "intro__company-item",
                { "intro__first-item": !(index % 3)},
              )
            }
            sm={4}
            md={4}
            lg={4}
          >
            <img src={com.mark.resolutions.src} alt="company" />
          </Col>          
        ))}
      </Row>
    </div>
  )
}

export default Intro
