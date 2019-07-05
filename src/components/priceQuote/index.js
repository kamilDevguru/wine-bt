import React from "react"
import { Button, Row } from "react-bootstrap"
import { navigate } from "gatsby"

import "./style.scss"

const BreadCrumb = (props) => {
  return (
    <div className="price-quote__container">
      <h1 className="price-quote__title">
        {props.title}
      </h1>
      {props.quotes.map((quote, index) => (
        <Row key={index} className="price-quote__item">
          <img src={quote.icon.resolutions.src} alt="mark" />
          <span className="price-quote__text">
            {quote.text}
          </span>
        </Row>
      ))}
      <Button
        className="price-quote__action"
        onClick={() => navigate(props.buttonLink)}
      >
        <img src={props.bottonIcon} alt="mark" />
        {props.buttonTitle}
      </Button>
    </div>
  )
}

export default BreadCrumb
