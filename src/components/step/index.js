import React from "react"
import { Button } from "react-bootstrap"

import "./style.scss"

const BreadCrumb = () => {
  return (
    <div className="breadcrumb__container">
      <a className="breadcrumb__link" href="#">Home</a>
      <span className="breadcrumb__marker">›</span>
      <a className="breadcrumb__link" href="#">Solutions</a>
      <span className="breadcrumb__marker">›</span>
      <a className="breadcrumb__link active" href="#">Wine</a>
    </div>
  )
}

export default BreadCrumb
