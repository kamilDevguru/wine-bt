import React from "react"
// import { Link } from "gatsby"
import { Button } from "react-bootstrap"

import "./style.scss"

const Hero = () => {
  return (
    <div className="hero__container">
      <h1 className="hero__title">
        Export and ship wine to China
      </h1>
      <p className="hero__subtitle">
        Cstar is the digital wine fulfilment and logistics solution for China-bound exports
      </p>
      <Button className="hero__action">
        Schedule a Demo
      </Button>
    </div>
  )
}

export default Hero
