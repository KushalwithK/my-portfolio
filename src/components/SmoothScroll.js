import React from "react";
import { Power4 } from "gsap";
import gsap from "gsap";

export default class SmoothScroll extends React.Component {
  t1 = gsap.timeline();

  state = {
    height: window.innerHeight,
  };

  ro = new ResizeObserver((elements) => {
    for (let elem of elements) {
      const crx = elem.contentRect;
      console.log(crx);
      this.setState({
        height: crx.height,
      });
    }
  });

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    this.ro.observe(this.viewport);
  }

  onScroll = () => {
    gsap.to(this.viewport, 1, {
      y: -window.pageYOffset,
      ease: Power4.easeOut,
    });
  };

  render() {
    return (
      <>
        <div className="viewport" ref={(ref) => (this.viewport = ref)}>
          {this.props.children}
        </div>
        <div
          ref={(ref) => (this.fake = ref)}
          style={{
            height: this.state.height,
          }}
        />
      </>
    );
  }
}
