import React from "react"
import { Button, Row } from "react-bootstrap"

import "./style.scss"
import ActionMark from "./image/action-mark.png"
import QuoteMark from "./image/clock-mark.png"

const BreadCrumb = () => {
  return (
    <div className="price-quote__container">
      <h1 className="price-quote__title">
        Get your instant price quote
      </h1>
      <Row className="price-quote__item">
        <img src={QuoteMark} alt="mark" />
        <span className="price-quote__text">
          Get a personalised quote in minutes
        </span>
      </Row>
      <Row className="price-quote__item">
        <img src={QuoteMark} alt="mark" />
        <span className="price-quote__text">
          Market leading prices
        </span>
      </Row>
      <Button className="price-quote__action">
        <img src={ActionMark} alt="mark" />
        Request Quote
      </Button>
    </div>
  )
}

export default BreadCrumb
