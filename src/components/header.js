import React from "react"
import Logo from "../images/Logo.png"

const Header = () => (
  <header
    style={{
      background: `#FFFFFF`,
      height: `100px`,
    }}
  >
    <div
      style={{
        position: `absolute`,
        left: `100px`,
        top: `30px`
      }}
    >
      <img src={Logo} alt="logo" />
    </div>
  </header>
)

export default Header
