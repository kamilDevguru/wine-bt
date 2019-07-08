import React from "react"
import { navigate } from "gatsby"
import { Button } from "react-bootstrap"

import "./style.scss"

const Hero = (props) => {
  return (
    <div className="hero__container">
      <img className="hero__image" src={props.src} alt="hero" />
      <div className="hero__cover">
        <h1 className="hero__title">
          {props.title}
        </h1>
        <p className="hero__subtitle">
          {props.subtitle}
        </p>
        <Button
          className="hero__action"
          onClick={() => navigate(props.buttonLink)}
        >
          {props.buttonTitle}
        </Button>
      </div>
    </div>
  )
}

export default Hero
