import React from "react"
import { Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import BreadCrumb from "../components/breadCrumb";
import Intro from "../components/intro";

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Hero />
    <BreadCrumb />
    <Row>
      <Col className="index__intro" lg={8} md={8} sm={12}>
        <Intro />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
