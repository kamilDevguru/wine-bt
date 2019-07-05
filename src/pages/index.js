import React from "react"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import BreadCrumb from "../components/breadCrumb"
import Intro from "../components/Intro"
import PriceQuote from "../components/priceQuote"
import Step from "../components/step"
import Snapshot from "../components/snapshot"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Hero />
    <BreadCrumb />
    <Row className="index__row">
      <Col className="index__intro" xl={8} lg={8} md={8} sm={12}>
        <Intro />
        <Step />
        <Snapshot />
      </Col>
      <Col className="index__quote" xl={4} lg={8} md={8} sm={12}>
        <PriceQuote />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
