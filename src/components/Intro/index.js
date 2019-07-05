import React from "react"
import { Row, Col } from "react-bootstrap"

import Mark from "./image/mark.png"
import CompanyMark from "./image/company-mark.png"
import "./style.scss"

const Intro = () => {
  return (
    <div className="intro__container">
      <h1 className="intro__title">
        Cstar makes shipping wine easy
      </h1>
      <Row className="intro__item-container">
        <Col sm={12} md={6} lg={4} className="intro__item">
          <img src={Mark} alt="mark" />
          <span className="intro__item-txt">Upfront price quotes</span>
        </Col>
        
        <Col sm={12} md={6} lg={5} className="intro__item">
          <img src={Mark} alt="mark" />
          <span className="intro__item-txt">Dedicated Account Manager</span>
        </Col>

        <Col sm={12} md={6} lg={3} className="intro__item">
          <img src={Mark} alt="mark" />
          <span className="intro__item-txt">Payment Escrow</span>
        </Col>

        <Col sm={12} md={6} lg={4} className="intro__item">
          <img src={Mark} alt="mark" />
          <span className="intro__item-txt">Warehousing and storage</span>
        </Col>

        <Col sm={12} md={6} lg={5} className="intro__item">
          <img src={Mark} alt="mark" />
          <span className="intro__item-txt">Qualified customs</span>
        </Col>
      </Row>
      <p className="intro__txt">
        It takes more than dashboards or digital marketplaces to be
        a true freight forwarding partner. Delivered via our secure
        cloud software platform, Cstar’s Operating System for Global
        Trade is a unique operating model that combines advanced tech
        and data analytics, logistics infrastructure, and hands-on supply chain expertise.
      </p>
      <Row className="intro__company-container">
        <Col className="intro__company-item" sm={12} md={6} lg={3}>
          <img src={CompanyMark} alt="company" />
        </Col>
        
        <Col className="intro__company-item" sm={12} md={6} lg={3}>
          <img src={CompanyMark} alt="company" />
        </Col>
        
        <Col className="intro__company-item" sm={12} md={6} lg={3}>
          <img src={CompanyMark} alt="company" />
        </Col>
        
        <Col className="intro__company-item" sm={12} md={6} lg={3}>
          <img src={CompanyMark} alt="company" />
        </Col>
        
        <Col className="intro__company-item" sm={12} md={6} lg={3}>
          <img src={CompanyMark} alt="company" />
        </Col>
        
        <Col className="intro__company-item" sm={12} md={6} lg={3}>
          <img src={CompanyMark} alt="company" />
        </Col>
      </Row>
    </div>
  )
}

export default Intro
