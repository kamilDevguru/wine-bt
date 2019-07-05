import React from "react"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import BreadCrumb from "../components/breadCrumb"
import Intro from "../components/intro"
import PriceQuote from "../components/priceQuote"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Hero />
    <BreadCrumb />
    <Row className="index__row">
      <Col className="index__intro" lg={8} md={8} sm={12}>
        <Intro />
      </Col>
      <Col className="index__quote" lg={4} md={4} sm={12}>
        <PriceQuote />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
