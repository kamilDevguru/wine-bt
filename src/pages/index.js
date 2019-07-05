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
import { graphql } from "gatsby";

const IndexPage = ({data}) => {
  console.log('data :', data);
  const localeData = data.multi.edges.find(item => item.node.node_locale  === 'en-US'); // FIXME
  console.log('localeData :', localeData);

  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <Hero
        src={data.single.edges[0].node.heroImage.image.resolutions.src}
        title={localeData.node.title}
        subtitle={localeData.node.subtitle}
        buttonTitle={localeData.node.actionButton.title}
        buttonLink={localeData.node.actionButton.href}
      />
      <BreadCrumb />
      <Row className="index__row">
        <Col className="index__intro" xl={8} lg={8} md={8} sm={12}>
          <Intro
            services={localeData.node.serviceItems.shippingItem}
            description={localeData.node.pageDescription.text.text}
            companyMarks={localeData.node.companies.companyMarks}
          />
          <Step
            steps={localeData.node.stepOfShipping.steps}
          />
          <Snapshot
            title={localeData.node.snapshot.title}
            items={localeData.node.snapshot.stepItems}
          />
        </Col>
        <Col className="index__quote" xl={4} lg={8} md={8} sm={12}>
          <PriceQuote
            title={localeData.node.ctaBlock.title}
            buttonTitle={localeData.node.ctaBlock.action.title}
            buttonLink={localeData.node.ctaBlock.action.href}
            bottonIcon={localeData.node.ctaBlock.action.buttonIcon.resolutions.src}
            quotes={localeData.node.ctaBlock.priceQuotes.quoteItems}
          />
        </Col>
      </Row>
    </Layout>
  )}

export default IndexPage

export const pageQuery = graphql`
  {
    single: allContentfulTestPage(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          node_locale
          heroImage {
            image {
              resolutions {
                src
              }
            }
          }
        }
      }
    }
    multi: allContentfulTestPage {
      edges {
        node {
          node_locale
          title
          subtitle
          actionButton {
            title
            href
          }
          actionButton {
            title
            href
          }
          serviceItems {
            shippingItem {
              text
              icon {
                resolutions {
                  src
                }
              }
            }
          }
          pageDescription {
            text {
              text
            }
          }
          companies {
            companyMarks {
              mark {
                resolutions {
                  src
                }
              }
            }
          }
          ctaBlock {
            title
            action {
              title
              href
              buttonIcon {
                resolutions {
                  src
                }
              }
            }
            priceQuotes {
              quoteItems {
                text
                icon {
                  resolutions {
                    src
                  }
                }
              }
            }
          }
          
          stepOfShipping {
            steps {
              text
              icon {
                resolutions {
                  src
                }
              }
            }
          }

          snapshot {
            stepItems {
              text {
                text
              }
            }
            title
          }
        }
      }
    }
  }
`
