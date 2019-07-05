import React from "react"
import { Carousel } from "react-bootstrap"

import "./style.scss"

class Testimonial extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;
    const { quotes } = this.props;

    return (
      <div className="testimonial__container">
        <Carousel
          activeIndex={index}
          direction={direction}
          className="testimonial__quote"
          controls={false}
          indicators={false}
          fade={true}
          slide={false}
          interval={10000}
          onSelect={this.handleSelect}
        >
          {quotes.map((quote, ix) => (
            <Carousel.Item key={ix}>
              <p>{quote.text.text}</p>
            </Carousel.Item>
          ))}
        </Carousel>
        <Carousel
          activeIndex={index}
          direction={direction}
          className="testimonial__person"
          controls={false}
          indicators={false}
          fade={true}
          slide={false}
          interval={10000}
          onSelect={this.handleSelect}
        >
          {quotes.map((quote, ix) => (
            <Carousel.Item key={ix}>
              <p>{quote.title}</p>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Testimonial
