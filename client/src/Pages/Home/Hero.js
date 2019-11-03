import React from "react";
import bg_75 from "../../assets/demo/bg/bg-75.svg";
import Particles from "react-particles-js";
import BitcoinPNG from "../../assets/img/misc/bitcoin.png";
var defaults = {
  particles: {
    number: {
      value: 4
    },
    color: {
      value: ["#fdc14c"]
    },
    shape: {
      type: "image",
      image: {
        src: BitcoinPNG,
        width: 500,
        height: 500
      }
    },
    opacity: {
      value: 0.36076771369474264,
      random: true,
      anim: {
        enable: true,
        speed: 0.3,
        opacity_min: 0.06496617698410762,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: true,
        size_min: 52
      }
    },
    move: {
      enable: true,
      direction: "none",
      speed: 1,
      random: true,
      out_mode: "out"
    }
  },
  interactivity: {}
};

function Hero() {
  return (
    <section
      className="vc_row bg-no-repeat fullheight d-flex align-items-center py-5"
      style={{
        backgroundImage: `url(${bg_75})`,
        backgroundPosition: "170% 110%"
      }}
    >
      <div className="lqd-particles-bg-wrap">
        <Particles params={defaults} />
        {/*<div className='ld-particles-container'>
          <div className='ld-particles-inner' id='particles-1559739661542-e9d04c39-a9eb' data-particles='true'
               data-particles-options='{
&quot;particles&quot;: {
&quot;number&quot;: {
&quot;value&quot;: 4
},
&quot;color&quot;: {
&quot;value&quot;: [
&quot;#fdc14c&quot;
]
},
&quot;shape&quot;: {
&quot;type&quot;: &quot;image&quot;,
&quot;image&quot;: {
&quot;src&quot;: &quot;./assets/img/misc/bitcoin.png&quot;,
&quot;width&quot;: 500,
&quot;height&quot;: 500
}
},
&quot;opacity&quot;:{&quot;value&quot;:0.36076771369474264,&quot;random&quot;:true,&quot;anim&quot;:{&quot;enable&quot;:true,&quot;speed&quot;:0.3,&quot;opacity_min&quot;:0.06496617698410762,&quot;sync&quot;:false}},
&quot;size&quot;: {
&quot;value&quot;: 10,
&quot;random&quot;: true,
&quot;anim&quot;: {
&quot;enable&quot;: true,
&quot;size_min&quot;: 52
}
},
&quot;move&quot;: {
&quot;enable&quot;: true,
&quot;direction&quot;: &quot;none&quot;,
&quot;speed&quot;: 1,
&quot;random&quot;: true,
&quot;out_mode&quot;: &quot;out&quot;
}
},
&quot;interactivity&quot;: []
}'>
            <canvas className='particles-js-canvas-el' width='1524' height='627' style={{width: '100%', height: '100%'}}/>
          </div>
        </div>*/}
      </div>
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center">
          <div className="lqd-column col-lg-5 col-md-6">
            <div className="ld-fancy-heading mask-text text-uppercase">
              <h6
                className="font-size-20 ltr-sp-01 ca-initvalues-applied split-text-applied"
                data-split-text="true"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview", "animationTarget":".split-inner", "duration":"1600", "delay":100, "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":60}, "animations":{"translateY":0}}'
                data-split-options='{"type":"lines"}'
              />
            </div>
            <div className="ld-fancy-heading mask-text">
              <h2
                data-fittext="true"
                data-fittext-options='{"compressor":0.55,"maxFontSize":"60", "minFontSize":"48"}'
                data-split-text="true"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview", "animationTarget":".split-inner", "duration":"1600", "startDelay":"200", "delay":"160", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":150}, "animations":{"translateY":0}}'
                data-split-options='{"type":"lines"}'
                style={{ fontSize: "60px" }}
                className="ca-initvalues-applied lqd-animations-done split-text-applied"
              >
                <span className="ld-fh-txt">
                  <div
                    className="lqd-lines split-unit lqd-unit-animation-done"
                    style={{
                      display: "block",
                      textAlign: "start",
                      position: "relative"
                    }}
                  >
                    <span data-text=" Bringing" className="split-inner">
                      <span className="split-txt"> Bringing</span>
                    </span>
                  </div>
                  <div
                    className="lqd-lines split-unit lqd-unit-animation-done"
                    style={{
                      display: "block",
                      textAlign: "start",
                      position: "relative"
                    }}
                  >
                    <span data-text="Mining into the" className="split-inner">
                      <span className="split-txt">Mining into the</span>
                    </span>
                  </div>
                  <div
                    className="lqd-lines split-unit lqd-unit-animation-done"
                    style={{
                      display: "block",
                      textAlign: "start",
                      position: "relative"
                    }}
                  >
                    <span data-text="Mainstream" className="split-inner">
                      <span className="split-txt">Mainstream</span>
                    </span>
                  </div>
                </span>
              </h2>
            </div>
            <div className="ld-fancy-heading mask-text mb-4">
              <p
                className="font-size-18 lh-165 ca-initvalues-applied lqd-animations-done split-text-applied"
                data-split-text="true"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview","animationTarget":".split-inner","duration":"1600","startDelay":"650","delay":"160","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":60},"animations":{"translateY":0}}'
                data-split-options='{"type":"lines"}'
              >
                <span className="ld-fh-txt">
                  <div
                    className="lqd-lines split-unit lqd-unit-animation-done"
                    style={{
                      display: "block",
                      textAlign: "start",
                      position: "relative"
                    }}
                  >
                    <span
                      data-text="Island Mining is driving the next	generation of "
                      className="split-inner"
                    >
                      <span className="split-txt">
                        <strong>Island Mining</strong> is driving the next
                        generation of{" "}
                      </span>
                    </span>
                  </div>
                  <div
                    className="lqd-lines split-unit lqd-unit-animation-done"
                    style={{
                      display: "block",
                      textAlign: "start",
                      position: "relative"
                    }}
                  >
                    <span
                      data-text="cryptocurrency mining by making it accessible to "
                      className="split-inner"
                    >
                      <span className="split-txt">
                        cryptocurrency mining by making it accessible to{" "}
                      </span>
                    </span>
                  </div>
                  <div
                    className="lqd-lines split-unit lqd-unit-animation-done"
                    style={{
                      display: "block",
                      textAlign: "start",
                      position: "relative"
                    }}
                  >
                    <span data-text="everyone." className="split-inner">
                      <span className="split-txt">everyone.</span>
                    </span>
                  </div>
                </span>
              </p>
            </div>
            <div className="row">
              <div
                className="lqd-column col-md-12 ca-initvalues-applied lqd-animations-done"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview", "animationTarget":"all-childs", "duration":"1600", "startDelay":"1300", "delay":"160", "easing":"easeOutQuint", "direction":"forward", "initValues":{"translateY":40, "opacity":0}, "animations":{"translateY":0, "opacity":1}}'
              >
                <a
                  href="https://www.islandmining.io/register"
                  className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin btn-gradient px-2 lqd-unit-animation-done"
                  style={{ opacity: 1 }}
                >
                  <span>
                    <span className="btn-gradient-bg" />
                    <span className="btn-txt">Join the Token Sale</span>
                    <span className="btn-gradient-bg btn-gradient-bg-hover" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xml_space="preserve"
                      className="btn-gradient-border"
                      width="100%"
                      height="100%"
                    >
                      <defs>
                        <linearGradient
                          id="svg-border-1"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" />
                          <stop offset="100%" />
                        </linearGradient>
                      </defs>
                      <rect
                        x="0.5"
                        y="0.5"
                        rx="30"
                        ry="30"
                        width="100%"
                        height="100%"
                        stroke="url(#svg-border-1)"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  href="https://docsend.com/view/y87qbwm"
                  className="btn btn-naked text-uppercase lqd-unit-animation-done"
                  style={{ opacity: 1 }}
                >
                  <span>
                    <span className="btn-txt">Read the Whitepaper</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
