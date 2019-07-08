import React from "react"
import { Row } from "react-bootstrap"

import "./style.scss"

const BreadCrumb = (props) => {
  return (
    <div className="snapshot__container">
      <Row>
        <h2 className="snapshot__title">
          {props.title}
        </h2>
      </Row>
      <Row>
        <ul className="snapshot__list">
          {props.items.map((item, index) => (
            <li key={index}>
              {item.text.text}
            </li>
          ))}
        </ul>
      </Row>
      <Row>
        <h3 className="snapshot__subtitle">
          Rich text block [h3]
        </h3>
      </Row>
      <Row>
        <p className="snapshot__text">
          China has cemented its position in the top five wine
          import markets over the past four years, currently
          sitting in fourth place behind Germany, the United
          Kingdom, then the United States. 
        </p>
      </Row>
    </div>
  )
}

export default BreadCrumb
