import './home.css';
import React, {Component} from 'react';

export default class extends Component {
  render() {
    return (
      <div data-mobile-nav-trigger-alignment="right" data-mobile-nav-align="left" data-mobile-nav-style="modern"
           data-mobile-nav-shceme="gray" data-mobile-header-scheme="gray" data-mobile-nav-breakpoint="1199">
        <div id="wrap">
          <header className="main-header main-header-overlay">
            <div className="mainbar-wrap">
              <div className="megamenu-hover-bg"></div>
              <div className="container-fluid mainbar-container">
                <div className="mainbar">
                  <div className="row mainbar-row align-items-lg-stretch px-4" style={{flexWrap: "wrap"}}>
                    <div className="col-auto">
                      <div className="navbar-header">
                        <a className="navbar-brand" href="/" rel="home">
										<span className="navbar-brand-inner">
											<img style={{width: "300px"}} className="logo-dark" src="./assets/media/im_logo_mail_sm.png"
                           alt="Island Mining"/>
											<img style={{width: "300px"}} className="logo-sticky" src="./assets/media/im_logo_mail_sm.png"
                           alt="Island Mining"/>
											<img style={{width: "300px"}} className="mobile-logo-default" src="./assets/media/im_logo_mail_sm.png"
                           alt="Island Mining"/>
											<img style={{width: "300px"}} className="logo-default" src="./assets/media/im_logo_mail_sm.png"
                           alt="Island Mining"/>
										</span>
                        </a>
                        <button type="button"
                                className="navbar-toggle collapsed nav-trigger style-mobile mobile-nav-trigger-cloned"
                                data-toggle="collapse" data-target="#main-header-collapse-clone" aria-expanded="false"
                                data-changeclassnames="{ &quot;html&quot;: &quot;mobile-nav-activated overflow-hidden&quot; }">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="bars">
											<span className="bar"></span>
											<span className="bar"></span>
											<span className="bar"></span>
										</span>
                        </button>
                      </div>
                    </div>
                    <div className="col">
                      <div className="collapse navbar-collapse" id="main-header-collapse">
                        <button type="button" className="navbar-toggle collapsed nav-trigger style-mobile"
                                data-toggle="collapse" data-target="#main-header-collapse" aria-expanded="false"
                                data-changeclassnames="{ &quot;html&quot;: &quot;mobile-nav-activated overflow-hidden&quot; }">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="bars">
											<span className="bar"></span>
											<span className="bar"></span>
											<span className="bar"></span>
										</span>
                        </button>
                        <ul id="primary-nav" className="main-nav nav align-items-lg-stretch justify-content-lg-start"
                            data-submenu-options="{ &quot;toggleType&quot;:&quot;fade&quot;, &quot;handler&quot;:&quot;mouse-in-out&quot; }">
                          <li>
                            <a href="#miningcoin" data-localscroll="true">
                              <span className="txt">Mining Coin</span>
                            </a>
                          </li>
                          <li>
                            <a href="#whitepaper" data-localscroll="true">
                              <span className="txt">Whitepaper</span>
                            </a>
                          </li>
                          <li>
                            <a href="#islandmining" data-localscroll="true">
                              <span className="txt">Island Mining</span>
                            </a>
                          </li>
                          <li>
                            <a href="#works" data-localscroll="true">
                              <span className="txt">Token Sale</span>
                            </a>
                          </li>
                          <li>
                            <a href="#roadmap" data-localscroll="true">
                              <span className="txt">Roadmap</span>
                            </a>
                          </li>
                          <li>
                            <a href="#team" data-localscroll="true">
                              <span className="txt">Team</span>
                            </a>
                          </li>
                          <li className="desktop-hidden">
                            <a href="/login" data-localscroll="true">
                              <span className="txt">Log In</span>
                            </a>
                          </li>
                          <li className="desktop-hidden">
                            <a href="/register" data-localscroll="true">
                              <span className="txt">Sign Up</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col text-right">
                      <div className="header-module">

                        <a href="/dashboard"
                           className="btn btn-default text-uppercase btn-sm circle btn-bordered border-thin px-2">
											<span>
												<span className="btn-txt">Logged in as aaa@gmail.com</span>
											</span>
                        </a>
                      </div>
                      <div className="header-module">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main id="content" className="content">
            <section className="vc_row bg-no-repeat fullheight d-flex align-items-center py-5"
                     style={{backgroundImage: "url(./assets/demo/bg/bg-75.svg)", backgroundPosition: "170% 110%"}}>
              <div className="lqd-particles-bg-wrap">
                <div className="ld-particles-container">
                  <div className="ld-particles-inner" id="particles-1559739661542-e9d04c39-a9eb" data-particles="true"
                       data-particles-options="{
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
}">
                    <canvas className="particles-js-canvas-el" width="1524" height="627" style={{width: "100%", height: "100%"}}/>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row d-flex flex-wrap align-items-center">
                  <div className="lqd-column col-lg-5 col-md-6">
                    <div className="ld-fancy-heading mask-text text-uppercase">
                      <h6 className="font-size-20 ltr-sp-01 ca-initvalues-applied split-text-applied"
                          data-split-text="true" data-custom-animations="true"
                          data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;, &quot;animationTarget&quot;:&quot;.split-inner&quot;, &quot;duration&quot;:&quot;1600&quot;, &quot;delay&quot;:100, &quot;easing&quot;:&quot;easeOutQuint&quot;, &quot;direction&quot;:&quot;forward&quot;, &quot;initValues&quot;:{&quot;translateY&quot;:60}, &quot;animations&quot;:{&quot;translateY&quot;:0}}"
                          data-split-options="{&quot;type&quot;:&quot;lines&quot;}"/>
                    </div>
                    <div className="ld-fancy-heading mask-text">
                      <h2 data-fittext="true"
                          data-fittext-options="{&quot;compressor&quot;:0.55,&quot;maxFontSize&quot;:&quot;60&quot;, &quot;minFontSize&quot;:&quot;48&quot;}"
                          data-split-text="true" data-custom-animations="true"
                          data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;, &quot;animationTarget&quot;:&quot;.split-inner&quot;, &quot;duration&quot;:&quot;1600&quot;, &quot;startDelay&quot;:&quot;200&quot;, &quot;delay&quot;:&quot;160&quot;, &quot;easing&quot;:&quot;easeOutQuint&quot;, &quot;direction&quot;:&quot;forward&quot;, &quot;initValues&quot;:{&quot;translateY&quot;:150}, &quot;animations&quot;:{&quot;translateY&quot;:0}}"
                          data-split-options="{&quot;type&quot;:&quot;lines&quot;}" style={{fontSize: "60px"}}
                          className="ca-initvalues-applied lqd-animations-done split-text-applied">
                      <span className="ld-fh-txt" ><div className="lqd-lines split-unit lqd-unit-animation-done"
                                                                style={{display: "block", textAlign: "start", position: "relative"}}><span
                        data-text=" Bringing" className="split-inner"><span
                        className="split-txt"> Bringing</span></span></div><div
                        className="lqd-lines split-unit lqd-unit-animation-done"
                        style={{display: "block", textAlign: "start", position: "relative"}}><span data-text="Mining into the"
                                                                                             className="split-inner"><span
                        className="split-txt">Mining into the</span></span></div><div
                        className="lqd-lines split-unit lqd-unit-animation-done"
                        style={{display: "block", textAlign: "start", position: "relative"}}><span data-text="Mainstream"
                                                                                             className="split-inner"><span
                        className="split-txt">Mainstream</span></span></div></span>
                      </h2>
                    </div>
                    <div className="ld-fancy-heading mask-text mb-4">
                      <p className="font-size-18 lh-165 ca-initvalues-applied lqd-animations-done split-text-applied"
                         data-split-text="true" data-custom-animations="true"
                         data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;,&quot;animationTarget&quot;:&quot;.split-inner&quot;,&quot;duration&quot;:&quot;1600&quot;,&quot;startDelay&quot;:&quot;650&quot;,&quot;delay&quot;:&quot;160&quot;,&quot;easing&quot;:&quot;easeOutQuint&quot;,&quot;direction&quot;:&quot;forward&quot;,&quot;initValues&quot;:{&quot;translateY&quot;:60},&quot;animations&quot;:{&quot;translateY&quot;:0}}"
                         data-split-options="{&quot;type&quot;:&quot;lines&quot;}">
                      <span className="ld-fh-txt" >
                        <div className="lqd-lines split-unit lqd-unit-animation-done" style={{display: "block", textAlign: "start", position: "relative"}}>
                          <span data-text="Island Mining is driving the next	generation of " className="split-inner">
                            <span className="split-txt"><strong>Island Mining</strong> is driving the next	generation of </span>
                          </span>
                        </div>
                        <div className="lqd-lines split-unit lqd-unit-animation-done" style={{display: "block", textAlign: "start", position: "relative"}}><span
                        data-text="cryptocurrency mining by making it accessible to " className="split-inner"><span
                        className="split-txt">cryptocurrency mining by making it accessible to </span></span></div><div
                        className="lqd-lines split-unit lqd-unit-animation-done"
                        style={{display: "block", textAlign: "start", position: "relative"}}>
                        <span data-text="everyone." className="split-inner">
                          <span className="split-txt">everyone.</span></span></div></span>
                      </p>
                    </div>
                    <div className="row">
                      <div className="lqd-column col-md-12 ca-initvalues-applied lqd-animations-done"
                           data-custom-animations="true"
                           data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;, &quot;animationTarget&quot;:&quot;all-childs&quot;, &quot;duration&quot;:&quot;1600&quot;, &quot;startDelay&quot;:&quot;1300&quot;, &quot;delay&quot;:&quot;160&quot;, &quot;easing&quot;:&quot;easeOutQuint&quot;, &quot;direction&quot;:&quot;forward&quot;, &quot;initValues&quot;:{&quot;translateY&quot;:40, &quot;opacity&quot;:0}, &quot;animations&quot;:{&quot;translateY&quot;:0, &quot;opacity&quot;:1}}">
                        <a href="https://www.islandmining.io/register"
                           className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin btn-gradient px-2 lqd-unit-animation-done"
                           style={{opacity: 1}}>
										<span>
											<span className="btn-gradient-bg"/>
											<span className="btn-txt">Join the Token Sale</span>
											<span className="btn-gradient-bg btn-gradient-bg-hover"/>
											<svg xmlns="http://www.w3.org/2000/svg"  xml_space="preserve" className="btn-gradient-border" width="100%" height="100%">
												<defs>
													<linearGradient id="svg-border-1" x1="0%" y1="0%" x2="100%" y2="0%">
														<stop offset="0%"/>
														<stop offset="100%"/>
													</linearGradient>
												</defs>
												<rect x="0.5" y="0.5" rx="30" ry="30" width="100%" height="100%" stroke="url(#svg-border-1)"/>
											</svg>
										</span>
                        </a>
                        <a href="https://docsend.com/view/y87qbwm"
                           className="btn btn-naked text-uppercase lqd-unit-animation-done" style={{opacity: 1}}>
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
            <section className="vc_row bg-no-repeat pt-10 pb-150" id="miningcoin"
                     style={{backgroundImage: "url(./assets/demo/bg/bg-76.svg)", backgroundPosition: "-90% 80%"}}>
              <div className="container">
                <div className="row ca-initvalues-applied" data-custom-animations="true"
                     data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;, &quot;animationTarget&quot;:&quot;all-childs&quot;, &quot;duration&quot;:&quot;1600&quot;, &quot;delay&quot;:&quot;160&quot;, &quot;easing&quot;:&quot;easeOutQuint&quot;, &quot;initValues&quot;:{&quot;translateY&quot;: 100, &quot;opacity&quot;:0}, &quot;animations&quot;:{&quot;translateY&quot;: 0, &quot;opacity&quot;:1}}">
                  <div className="lqd-column col-md-12 mb-60 will-change" style={{transition: "none 0s ease 0s", transform: "translateY(100px)", opacity: 0}}>
                    <header className="fancy-title">
                      <h6 className="text-uppercase">Introducing Mining Coin</h6>
                      <h2><strong>the simple token</strong> with a real use</h2>
                    </header>
                  </div>
                  <div className="lqd-column col-md-4 will-change"
                       style={{transition: "none 0s ease 0s", transform: "translateY(100px)", opacity: 0}}>
                    <div
                      className="iconbox text-left iconbox-xl iconbox-icon-image iconbox-shadow border-radius-5 px-5 pt-40 pb-55 mr-md-4 iconbox-icon-animating">
                      <div className="iconbox-icon-wrap">
									<span className="iconbox-icon-container mb-35">
										<svg xmlns="http://www.w3.org/2000/svg"  width="80"
                         height="80.16" viewBox="0 0 80 80.16"><defs xmlns="http://www.w3.org/2000/svg"><linearGradient
                      gradientUnits="userSpaceOnUse" id="grad946249" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%"
                                                                                                             stop-color="#f42958"/><stop
                      offset="100%" stop-color="#f42958"/></linearGradient></defs>
											<defs xmlns="http://www.w3.org/2000/svg">
												<linearGradient gradientUnits="userSpaceOnUse" id="grad231243" x1="0%" y1="0%" x2="0%"
                                        y2="100%">
													<stop offset="0%" stop-color="#f42958"/>
													<stop offset="100%" stop-color="#f42958"/>
												</linearGradient>
											</defs>
											<defs>
												<filter id="filter-seo-icon-1" x="427.5" y="1555" width="80" height="80.16"
                                filterUnits="userSpaceOnUse">
													<feImage preserveAspectRatio="none" x="427.5" y="1555" width="80" height="80.16"
                                   result="image"
                                   xlink_href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODAiIGhlaWdodD0iODAuMTYiIHZpZXdCb3g9IjAgMCA4MCA4MC4xNiI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHkxPSI0MC4wOCIgeDI9IjgwIiB5Mj0iNDAuMDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmU1MDZjIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZjNmEyYSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iODAiIGhlaWdodD0iODAuMTYiLz4KPC9zdmc+Cg==">
													</feImage>
													<feComposite result="composite" operator="in" in2="SourceGraphic">
													</feComposite>
													<feBlend result="blend" in2="SourceGraphic"/>
												</filter>
											</defs>
											<path fill="#fd5c4c" filter="url(#filter-seo-icon-1)"
                            d="M497.812,1583.44l9.688-.16v14.22l-14.063-.16v-11.09a20.127,20.127,0,0,0-6.562-2.27,37.855,37.855,0,0,0-6.875-.46,20.742,20.742,0,0,0-6.8,1.32,34.408,34.408,0,0,0-6.328,3.13,4.479,4.479,0,0,1,.234.55,5.359,5.359,0,0,1,.157.62,3.458,3.458,0,0,1,.078.63v0.7a7.3,7.3,0,0,1-.547,2.65,5.916,5.916,0,0,1-1.485,2.27,9.192,9.192,0,0,1-2.265,1.49,5.015,5.015,0,0,1-2.735.46,0.331,0.331,0,0,1-.39.08,0.752,0.752,0,0,0-.469,0,0.333,0.333,0,0,1-.391-0.08,0.2,0.2,0,0,0-.312,0,14.921,14.921,0,0,0-1.328,2.74c-0.366.99-.679,1.95-0.938,2.89a17.434,17.434,0,0,0-.547,3.05c-0.1,1.09-.156,2.1-0.156,3.04a27.029,27.029,0,0,0,.156,2.97,16.708,16.708,0,0,0,.625,2.97q0.469,1.56,1.016,2.97t1.328,3.12l10.938-.15v14.22l-14.063-.16v-9.84c-0.522-.84-1.042-1.77-1.562-2.82a26.385,26.385,0,0,1-1.485-3.75,42.767,42.767,0,0,1-1.172-4.45,25.175,25.175,0,0,1-.468-5.08c0-.73.024-1.56,0.078-2.5a20.267,20.267,0,0,1,.312-2.65c0.157-.84.364-1.72,0.625-2.66a19.488,19.488,0,0,1,.86-2.5l-12.188,11.87c0.208,0.42.337,0.71,0.391,0.86s0.129,0.4.234,0.71a2.763,2.763,0,0,1,.156.86v0.86a7.132,7.132,0,0,1-.546,2.73,6.911,6.911,0,0,1-1.485,2.27,8.55,8.55,0,0,1-2.187,1.56,8.417,8.417,0,0,1-5.547,0,8.119,8.119,0,0,1-2.266-1.56,6.861,6.861,0,0,1-1.484-2.27,7.078,7.078,0,0,1-.547-2.73,6.412,6.412,0,0,1,.547-2.74,9.959,9.959,0,0,1,1.484-2.26,5.307,5.307,0,0,1,2.266-1.57,12.14,12.14,0,0,1,2.734-.62,2.727,2.727,0,0,0,.781.16,2,2,0,0,1,.7.15,1.975,1.975,0,0,0,.781.16,0.967,0.967,0,0,1,.7.31l15.937-16.09a1.415,1.415,0,0,1-.156-0.39v-0.55a6.906,6.906,0,0,1,.547-2.81,8.069,8.069,0,0,1,1.484-2.27,5.481,5.481,0,0,1,2.266-1.48,12.158,12.158,0,0,1,2.734-.63,0.252,0.252,0,0,0,.313.08,0.343,0.343,0,0,1,.312,0,0.345,0.345,0,0,0,.313,0,0.251,0.251,0,0,1,.312.08L479.844,1565a1.159,1.159,0,0,1-.235-0.62c-0.053-.32-0.1-0.58-0.156-0.79s-0.1-.44-0.156-0.7a3.433,3.433,0,0,1-.078-0.7,6.89,6.89,0,0,1,.547-2.81,7.275,7.275,0,0,1,1.562-2.27,6.387,6.387,0,0,1,2.266-1.49,10.887,10.887,0,0,1,2.656-.62,11.11,11.11,0,0,1,2.812.62,6.431,6.431,0,0,1,2.266,1.49,7.4,7.4,0,0,1,1.563,2.27,6.956,6.956,0,0,1,.546,2.81,7.132,7.132,0,0,1-.546,2.73,5.6,5.6,0,0,1-1.563,2.19,11.231,11.231,0,0,1-2.266,1.48,4.967,4.967,0,0,1-2.812.47,1.236,1.236,0,0,1-.781.08c-0.313-.05-0.6-0.1-0.86-0.16a2.858,2.858,0,0,1-.7-0.23,6.217,6.217,0,0,0-.781-0.31l-12.031,12.03a24.19,24.19,0,0,0,2.5-.78,11.375,11.375,0,0,1,2.578-.63c0.884-.1,1.8-0.21,2.734-0.31a11.785,11.785,0,0,1,2.656,0,17.587,17.587,0,0,1,4.3.23c1.407,0.27,2.786.55,4.141,0.86a19.328,19.328,0,0,1,3.984,1.41c1.3,0.63,2.578,1.3,3.828,2.03h0v0.16Zm-11.562-23.75a7.718,7.718,0,0,1-.859.23,1.189,1.189,0,0,0-.7.55c-0.209.31-.39,0.57-0.546,0.78a1.554,1.554,0,0,0-.235.94,2.38,2.38,0,0,0,.235.86,1.92,1.92,0,0,0,.546.78c0.208,0.15.442,0.31,0.7,0.47a1.024,1.024,0,0,0,.859.08,1.363,1.363,0,0,0,1.016-.08c0.258-.16.493-0.32,0.7-0.47a1.95,1.95,0,0,0,.547-0.78,2.4,2.4,0,0,0,.234-0.86,1.561,1.561,0,0,0-.234-0.94q-0.236-.315-0.547-0.78a1.2,1.2,0,0,0-.7-0.55c-0.262-.05-0.6-0.13-1.016-0.23h0Zm-51.719,56.72c0.313-.11.625-0.21,0.938-0.32a1.62,1.62,0,0,0,.781-0.54,4.114,4.114,0,0,0,.469-0.71,2.675,2.675,0,0,0,.156-1.09,2.606,2.606,0,0,0-.156-0.78,1.382,1.382,0,0,0-.469-0.7c-0.21-.16-0.469-0.34-0.781-0.55a1.043,1.043,0,0,0-.938-0.16,0.868,0.868,0,0,0-.859.16,7.771,7.771,0,0,1-.781.55,1.213,1.213,0,0,0-.547.7,2.52,2.52,0,0,0-.157.78,2.619,2.619,0,0,0,.157,1.09,2.764,2.764,0,0,0,.547.71,2.268,2.268,0,0,0,.781.54c0.259,0.11.547,0.21,0.859,0.32h0Zm25.938,9.21v4.85l4.687-.16v-4.53l-4.687-.16h0Zm-0.157-32.81a6.411,6.411,0,0,1,.938-0.23,1.169,1.169,0,0,0,.781-0.55,7.424,7.424,0,0,0,.469-0.78,2.2,2.2,0,0,0,.156-0.94,3.433,3.433,0,0,0-.156-0.86,1.466,1.466,0,0,0-.469-0.78,6.263,6.263,0,0,0-.781-0.47,5.533,5.533,0,0,0-1.875,0,5.981,5.981,0,0,0-.781.47,1.442,1.442,0,0,0-.469.78,3.343,3.343,0,0,0-.156.86,2.172,2.172,0,0,0,.156.94,6.789,6.789,0,0,0,.469.78,1.16,1.16,0,0,0,.781.55,6.4,6.4,0,0,1,.937.23h0Zm42.5-.15v-4.54l-4.687-.15v4.84l4.687-.15h0Z"
                            transform="translate(-427.5 -1555)"/>
										</svg>
									</span>
                      </div>
                      <div className="contents">
                        <h3>Passive Mining</h3>
                        <p><span style={{fontSize: "18px", lineHeight: "30px"}}>Token holders share access to
											Island Mining’s hashing power based on their MNT holdings.</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="lqd-column col-md-4 will-change"
                       style={{transition: "none 0s ease 0s", transform: "translateY(100px)", opacity: 0}}>
                    <div
                      className="iconbox text-left iconbox-xl iconbox-icon-image iconbox-shadow border-radius-5 px-5 pt-40 pb-55 mx-md-2 iconbox-icon-animating">
                      <div className="iconbox-icon-wrap">
									<span className="iconbox-icon-container mb-45">
										<svg xmlns="http://www.w3.org/2000/svg"  width="79.5"
                         height="70.625" viewBox="0 0 79.5 70.625"><defs xmlns="http://www.w3.org/2000/svg"><linearGradient
                      gradientUnits="userSpaceOnUse" id="grad787375" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%"
                                                                                                             stop-color="#f42958"/><stop
                      offset="100%" stop-color="#f42958"/></linearGradient></defs>
											<defs xmlns="http://www.w3.org/2000/svg">
												<linearGradient gradientUnits="userSpaceOnUse" id="grad797996" x1="0%" y1="0%" x2="0%"
                                        y2="100%">
													<stop offset="0%" stop-color="#f42958"/>
													<stop offset="100%" stop-color="#f42958"/>
												</linearGradient>
											</defs>
											<defs>
												<filter id="filter-seo-icon-2" x="-0.5" y="0.688" width="80" height="70.625"
                                filterUnits="userSpaceOnUse">
													<feImage preserveAspectRatio="none" x="-0.5" y="0.6875" width="80" height="70.625"
                                   result="image"
                                   xlink_href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODAiIGhlaWdodD0iNzAuNjI1IiB2aWV3Qm94PSIwIDAgODAgNzAuNjI1Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI2xpbmVhci1ncmFkaWVudCk7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeTE9IjM1LjMxMyIgeDI9IjgwIiB5Mj0iMzUuMzEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZlNTA2YyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYzZhMmEiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjgwIiBoZWlnaHQ9IjcwLjYyNSIvPgo8L3N2Zz4K">
													</feImage>
													<feComposite result="composite" operator="in" in2="SourceGraphic">
													</feComposite>
													<feBlend result="blend" in2="SourceGraphic"/>
												</filter>
											</defs>
											<path filter="url(#filter-seo-icon-2)"
                            d="M-0.5.688h80V71.313h-80V0.688h0ZM74.813,5.375H4.188V19.594H74.813V5.375h0ZM4.188,66.625H74.813V24.281H4.188V66.625h0ZM32.469,14.75V10.063H27.781V14.75h4.688Zm-9.375,0V10.063H18.25V14.75h4.844Zm-9.531,0V10.063H8.875V14.75h4.688Z"
                            transform="translate(0 -0.688)"/>
										</svg>
									</span>
                      </div>
                      <div className="contents">
                        <h3>Hashing-power Backed</h3>
                        <p><span style={{fontSize: "18px", lineHeight: "30px"}}>MNT is backed by production from our cutting-edge SHA-256 ASIC miners at our mining facilities. </span></p>
                      </div>
                    </div>
                  </div>
                  <div className="lqd-column col-md-4 will-change"
                       style={{transition: "none 0s ease 0s", transform: "translateY(100px)", opacity: 0}}>
                    <div
                      className="iconbox text-left iconbox-xl iconbox-icon-image iconbox-shadow border-radius-5 px-5 pt-40 pb-55 ml-md-4 iconbox-icon-animating">
                      <div className="iconbox-icon-wrap">
									<span className="iconbox-icon-container mb-45">
										<svg xmlns="http://www.w3.org/2000/svg"  width="70.625"
                         height="70.781" viewBox="0 0 70.625 70.781"><defs xmlns="http://www.w3.org/2000/svg"><linearGradient
                      gradientUnits="userSpaceOnUse" id="grad85364" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%"
                                                                                                            stop-color="#f42958"/><stop
                      offset="100%" stop-color="#f42958"/></linearGradient></defs>
											<defs xmlns="http://www.w3.org/2000/svg">
												<linearGradient gradientUnits="userSpaceOnUse" id="grad51784" x1="0%" y1="0%" x2="0%" y2="100%">
													<stop offset="0%" stop-color="#f42958"/>
													<stop offset="100%" stop-color="#f42958"/>
												</linearGradient>
											</defs>
											<defs>
												<filter id="filter-seo-icon-3" x="0.688" y="0.844" width="70.625" height="70.781"
                                filterUnits="userSpaceOnUse">
													<feImage preserveAspectRatio="none" x="0.6875" y="0.84375" width="70.625" height="70.781"
                                   result="image"
                                   xlink_href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzAuNjI1IiBoZWlnaHQ9IjcwLjc4MSIgdmlld0JveD0iMCAwIDcwLjYyNSA3MC43ODEiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IHVybCgjbGluZWFyLWdyYWRpZW50KTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB5MT0iMzUuMzkxIiB4Mj0iNzAuNjI1IiB5Mj0iMzUuMzkxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZlNTA2YyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYzZhMmEiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjcwLjYyNSIgaGVpZ2h0PSI3MC43ODEiLz4KPC9zdmc+Cg==">
													</feImage>
													<feComposite result="composite" operator="in" in2="SourceGraphic">
													</feComposite>
													<feBlend result="blend" in2="SourceGraphic"/>
												</filter>
											</defs>
											<path filter='url(#filter-seo-icon-3)'
                            d="M66.625,1l4.688-.156V33.031a27.893,27.893,0,0,1-5.234,16.875A53.011,53.011,0,0,1,54.516,61.7a64.035,64.035,0,0,1-11.875,7.031,48.6,48.6,0,0,1-6.016,2.422l-0.781.469-0.781-.469a46.212,46.212,0,0,1-5.937-2.5,69.232,69.232,0,0,1-11.8-7.109A51.606,51.606,0,0,1,5.844,49.75,27.681,27.681,0,0,1,.688,33.188V0.844L5.375,1A13.835,13.835,0,0,0,6.469,6.313a13.055,13.055,0,0,0,3.047,4.531,16.093,16.093,0,0,0,4.531,3.047,11.706,11.706,0,0,0,5.547,1.016,11.314,11.314,0,0,0,5.391-1.016,16.128,16.128,0,0,0,4.531-3.047,13.122,13.122,0,0,0,3.047-4.531A13.881,13.881,0,0,0,33.656,1l4.688-.156a13.473,13.473,0,0,0,1.094,5.469,15.322,15.322,0,0,0,3.047,4.531,12.631,12.631,0,0,0,4.531,3.047,17.125,17.125,0,0,0,5.391,1.172,17.467,17.467,0,0,0,5.547-1.172,12.653,12.653,0,0,0,4.531-3.047,15.416,15.416,0,0,0,3.047-4.531A13.513,13.513,0,0,0,66.625.844V1ZM5.375,33.188A22.527,22.527,0,0,0,8.734,45.219a42.637,42.637,0,0,0,7.891,9.531,54.624,54.624,0,0,0,9.3,6.8,74.47,74.47,0,0,0,7.734,3.984V13.344a36.77,36.77,0,0,1-2.891,2.578,12.98,12.98,0,0,1-3.437,2.031,39.431,39.431,0,0,1-3.75,1.25,11.369,11.369,0,0,1-3.984.391,12,12,0,0,1-4.141-.391,38.983,38.983,0,0,1-3.75-1.25A12.77,12.77,0,0,1,8.344,16a35.726,35.726,0,0,1-2.969-2.656V33.188Zm61.25-.156V13.188A14.9,14.9,0,0,1,63.656,16,23.5,23.5,0,0,1,60.3,17.953a15.787,15.787,0,0,1-3.75,1.25,32.759,32.759,0,0,1-4.141.547,32.778,32.778,0,0,1-3.984-.547,13.916,13.916,0,0,1-3.75-1.328,36.985,36.985,0,0,1-3.437-2.031,12.647,12.647,0,0,1-2.891-2.656V65.531q2.966-1.406,7.812-3.984a46.007,46.007,0,0,0,9.375-6.719A43.374,43.374,0,0,0,63.344,45.3a23.412,23.412,0,0,0,3.281-12.422v0.156Z"
                            transform="translate(-0.688 -0.844)"/>
										</svg>
									</span>
                      </div>
                      <div className="contents">
                        <h3>Derisking Bitcoin</h3>
                        <p><span style={{fontSize: "18px", lineHeight: "30px"}}>Eliminating the need to invest in
											costly mining equipment with no guarantee of return.</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lqd-space visible-lg visible-md" style={{height: "200px"}}/>
                <div className="row d-flex flex-wrap align-items-center" id="whitepaper">
                  <div className="lqd-column col-md-6">
                    <div className="liquid-img-group-container lqd-parallax-images-8" data-custom-animations="true"
                         data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;, &quot;animationTarget&quot;:&quot;.liquid-img-group-single&quot;, &quot;duration&quot;:&quot;1600&quot;, &quot;delay&quot;:&quot;160&quot;, &quot;easing&quot;:&quot;easeOutQuint&quot;, &quot;direction&quot;:&quot;backward&quot;, &quot;initValues&quot;:{&quot;translateX&quot;:-85, &quot;opacity&quot;:0}, &quot;animations&quot;:{&quot;translateX&quot;:0, &quot;opacity&quot;:1}}">
                      <div className="liquid-img-group-inner">
                        <div className="liquid-img-group-single" data-shadow-style="4" data-roundness="8"
                             data-inview="true" data-animate-shadow="true">200px
                          <div className="liquid-img-group-img-container">
                            <div className="liquid-img-container-inner" data-parallax="true"
                                 data-parallax-from="{&quot;translateY&quot;:-10,&quot;translateX&quot;:0}"
                                 data-parallax-to="{&quot;translateY&quot;:71,&quot;translateX&quot;:-40}"
                                 data-parallax-options="{&quot;overflowHidden&quot;:false, &quot;easing&quot;:&quot;linear&quot;}">
                              <figure>
                                <a href="https://docsend.com/view/y87qbwm"><img src="./assets/media/whitepaper-2nd.jpg"
                                                                                alt="Working with Ave"/></a>
                              </figure>
                            </div>
                          </div>
                        </div>
                        <div className="liquid-img-group-single" data-shadow-style="4" data-roundness="8"
                             data-inview="true" data-animate-shadow="true">
                          <div className="liquid-img-group-img-container">
                            <div className="liquid-img-container-inner" data-parallax="true"
                                 data-parallax-from="{&quot;translateY&quot;:107}"
                                 data-parallax-to="{&quot;translateY&quot;:-134}"
                                 data-parallax-options="{&quot;overflowHidden&quot;:false,&quot;easing&quot;:&quot;linear&quot;}">
                              <figure>
                                <a href="https://docsend.com/view/y87qbwm"><img src="./assets/media/whitepaper-sct.jpg"
                                                                                alt="Working with Ave"/></a>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-custom-animations="true"
                       data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;, &quot;animationTarget&quot;:&quot;all-childs&quot;, &quot;duration&quot;:&quot;1600&quot;, &quot;delay&quot;:&quot;160&quot;, &quot;easing&quot;:&quot;easeOutQuint&quot;, &quot;direction&quot;:&quot;forward&quot;, &quot;initValues&quot;:{&quot;translateY&quot;:30, &quot;opacity&quot;:0}, &quot;animations&quot;:{&quot;translateY&quot;:0, &quot;opacity&quot;:1}}"
                       className="lqd-column col-md-5 col-md-offset-1">
                    <header className="fancy-title mb-50">
                      <h6 className="text-uppercase">Whitepaper</h6>
                      <h2 className="lh-1 mb-0" data-fittext="true"
                          data-fittext-options="{&quot;compressor&quot;:0.65, &quot;maxFontSize&quot;:&quot;72&quot;, &quot;minFontSize&quot;:&quot;48&quot;}"
                          style={{fontSize: "70.4615px"}}>
                        <strong>passive</strong> mining</h2>
                      <h2 className="lh-1 mb-0" data-fittext="true"
                          data-fittext-options="{&quot;compressor&quot;:0.65, &quot;maxFontSize&quot;:&quot;72&quot;, &quot;minFontSize&quot;:&quot;48&quot;}"
                          style={{fontSize: "70.4615px"}}>
                        <strong>real</strong> value</h2>
                    </header>
                    <p className="font-size-30 lh-105"><i>Mining shouldn't be difficult. That's why we created
                      Mining Coin.</i></p>
                    <p className="font-size-18 lh-15 mb-55">We help make cryptocurrency mining less scary by
                      providing a simple token that unlocks access to our mining facilities. When you earn
                      crypto, seamlessly trade it for fiat on our exchange or use it to purchase specially
                      designed mining machines for your own home.</p>
                    <a href="https://docsend.com/view/y87qbwm"
                       className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin btn-gradient font-weight-bold px-2">
								<span>
									<span className="btn-gradient-bg"/>
									<span className="btn-txt">Whitepaper v2.07</span>
									<span className="btn-gradient-bg btn-gradient-bg-hover"/>
									<svg xmlns="http://www.w3.org/2000/svg"  xml_space="preserve" className="btn-gradient-border" width="100%" height="100%">
										<defs>
											<linearGradient id="svg-border-2" x1="0%" y1="0%" x2="100%" y2="0%">
												<stop offset="0%"/>
												<stop offset="100%"/>
											</linearGradient>
										</defs>
										<rect x="0.5" y="0.5" rx="30" ry="30" width="100%" height="100%" stroke="url(#svg-border-2)">
										</rect>
									</svg>
								</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="vc_row pt-100 pb-100 bg-cover"
                     style={{backgroundImage: "url(./assets/demo/bg/bg-39.jpg)"}}>
              <div className="container">
                <div className="row">

                  <div className="lqd-column col-md-8 col-md-offset-2 text-center">

                    <h2 className="mt-0 mb-3 font-size-45 text-white">The MNT private sale whitelist is now open
                    </h2>
                    <p className="font-size-20 text-fade-white-07 mb-45">Our automated, SSL-encrypted KYC process
                      takes less than 5 minutes to complete</p>

                    <a href="https://www.islandmining.io/register"
                       className="btn btn-solid circle border-none px-2 font-size-15 font-weight-bold btn-white text-hover-white">
								<span>
									<span className="btn-txt">Start the KYC process</span>
									<span className="btn-gradient-bg bg-white"/>
									<span className="btn-gradient-bg btn-gradient-bg-hover"/>
								</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>


            <section className="vc_row pt-90 pb-20 bg-no-repeat" id="islandmining"
                     style={{backgroundImage: "url(./assets/demo/bg/bg-77.svg)", backgroundPosition: "500% 0%"}}>
              <div className="container">

                <div className="row d-flex flex-wrap align-items-center">

                  <div className="lqd-column col-md-5 mb-30" data-custom-animations="true"
                       data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;, &quot;animationTarget&quot;:&quot;all-childs&quot;, &quot;duration&quot;:&quot;1600&quot;, &quot;delay&quot;:&quot;160&quot;, &quot;easing&quot;:&quot;easeOutQuint&quot;, &quot;direction&quot;:&quot;forward&quot;, &quot;initValues&quot;:{&quot;translateY&quot;:30, &quot;opacity&quot;:0}, &quot;animations&quot;:{&quot;translateY&quot;:0, &quot;opacity&quot;:1}}">

                    <header className="fancy-title pr-md-4">
                      <h6 className="text-uppercase">Cloud Mining</h6>
                      <h2><strong>start mining passively</strong> with Island Mining</h2>
                    </header>

                    <p className="font-size-18 lh-15 mb-55">Mining Coin (MNT) token holders share access to Island
                      Mining’s hashing power. MNT holders receive a percentage of hashing power produced by
                      our facility, based on how many MNT tokens they currently hold.<br/><br/>Through IslandEX
                      Exchange, trade cryptocurrency for fiat. Hold cash at IslandEX or one of our affiliate
                      banks and use a prepaid debit card to easily spend earnings.</p>
                  </div>
                  <div className="lqd-column col-md-3 col-md-offset-1">

                    <div className="lqd-column-inner" data-parallax="true"
                         data-parallax-from="{&quot;translateY&quot;:-30}"
                         data-parallax-to="{&quot;translateY&quot;:120}"
                         data-parallax-options="{&quot;duration&quot;:&quot;2000&quot;, &quot;easing&quot;:&quot;linear&quot;, &quot;reverse&quot;:true, &quot;triggerHook&quot;:&quot;onEnter&quot;, &quot;overflowHidden&quot;: false}">

                      <div
                        className="iconbox text-left iconbox-round iconbox-lg iconbox-filled iconbox-filled iconbox-filled-hover iconbox-icon-image iconbox-shadow pt-50 pb-40 iconbox-icon-animating">
                        <div className="iconbox-icon-wrap">
										<span className="iconbox-icon-container mb-35">
											<svg xmlns="http://www.w3.org/2000/svg"  width="42.375"
                           height="45.188" viewBox="0 0 42.375 45.188"><defs xmlns="http://www.w3.org/2000/svg"><linearGradient
                        gradientUnits="userSpaceOnUse" id="grad909202" x1="0%" y1="0%" x2="0%" y2="100%"><stop
                        offset="0%" stop-color="#f42958"/><stop offset="100%"
                                                                      stop-color="#f42958"/></linearGradient></defs>
												<defs>
													<filter id="filter-seo-icon-4" x="0.813" y="0" width="42.375" height="45.188"
                                  filterUnits="userSpaceOnUse">
														<feImage preserveAspectRatio="none" x="0.8125" y="0" width="42.375" height="45.188"
                                     result="image"
                                     xlink_href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDIuMzc1IiBoZWlnaHQ9IjQ1LjE4OCIgdmlld0JveD0iMCAwIDQyLjM3NSA0NS4xODgiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IHVybCgjbGluZWFyLWdyYWRpZW50KTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB5MT0iMjIuNTk0IiB4Mj0iNDIuMzc1IiB5Mj0iMjIuNTk0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZlNTA2YyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYzZhMmEiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjQyLjM3NSIgaGVpZ2h0PSI0NS4xODgiLz4KPC9zdmc+Cg=="/>
														<feComposite result="composite" operator="in" in2="SourceGraphic"/>
														<feBlend result="blend" in2="SourceGraphic"/>
													</filter>
												</defs>
												<path filter="url(#filter-seo-icon-4)"
                              d="M26.313,28.406l-8.531-5.719L9.25,28.406V0H26.313V28.406h0Zm-14.25-5.25,5.719-3.937L23.5,23.156V2.813H12.063V23.156h0ZM43.188,2.813H29.031V5.625H40.375v36.75H3.625V5.625H6.438V2.813H0.813V45.188H43.188V2.813h0Z"
                              transform="translate(-0.813)"/>
											</svg>
										</span>
                        </div>
                        <div className="contents">
                          <h3>Cutting Edge Equipment</h3>
                          <p className="font-size-16 lh-165">Island Mining is constantly developing new ASIC
                            machines, with efficiency as our top priority. Users will never be reliant
                            on outdated miners.</p>
                        </div>
                      </div>
                      <div
                        className="iconbox text-left iconbox-round iconbox-lg iconbox-filled iconbox-filled iconbox-filled-hover iconbox-icon-image iconbox-shadow pt-50 pb-40 iconbox-icon-animating">
                        <div className="iconbox-icon-wrap">
										<span className="iconbox-icon-container mb-35">
											<svg xmlns="http://www.w3.org/2000/svg"  width="48"
                           height="42.375" viewBox="0 0 48 42.375"><defs xmlns="http://www.w3.org/2000/svg"><linearGradient
                        gradientUnits="userSpaceOnUse" id="grad179776" x1="0%" y1="0%" x2="0%" y2="100%"><stop
                        offset="0%" stop-color="#f42958"/><stop offset="100%"
                                                                      stop-color="#f42958"/></linearGradient></defs>
												<defs>
													<filter id="filter-seo-icon-6" x="0" y="0.813" width="48" height="42.375"
                                  filterUnits="userSpaceOnUse">
														<feImage preserveAspectRatio="none" x="0" y="0.8125" width="48" height="42.375"
                                     result="image"
                                     xlink_href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDIuMzc1IiB2aWV3Qm94PSIwIDAgNDggNDIuMzc1Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI2xpbmVhci1ncmFkaWVudCk7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeTE9IjIxLjE4OCIgeDI9IjQ4IiB5Mj0iMjEuMTg4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZlNTA2YyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYzZhMmEiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQyLjM3NSIvPgo8L3N2Zz4K"/>
														<feComposite result="composite" operator="in" in2="SourceGraphic"/>
														<feBlend result="blend" in2="SourceGraphic"/>
													</filter>
												</defs>
												<path filter="url(#filter-seo-icon-6)"
                              d="M0,0.813H48V43.188H0V0.813H0ZM45.188,9.25V3.625H37.781L44.438,9.25h0.75ZM24.656,17.781h8.25l6.656-5.625h-8.25l-6.656,5.625h0ZM19.219,9.25h8.25L20.813,3.625h-8.25L19.219,9.25h0ZM27,12.156H18.75l-6.656,5.625h8.25L27,12.156h0ZM31.781,9.25h8.25L33.375,3.625h-8.25L31.781,9.25h0ZM2.813,3.625V9.25h12L8.156,3.625H2.813Zm0,8.531v5.625H7.688l6.656-5.625H2.813ZM45.188,40.375V20.594H2.813V40.375H45.188Zm0-22.594V12.156H43.969l-6.656,5.625h7.875Z"
                              transform="translate(0 -0.813)"/>
											</svg>
										</span>
                        </div>
                        <div className="contents">
                          <h3>Secure Facilities</h3>
                          <p className="font-size-16 lh-165">We employ the highest standards of security in
                            our facilities, with our security team formerly developing software for the
                            US Department of Defense.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lqd-column col-md-3">

                    <div className="lqd-column-inner" data-parallax="true"
                         data-parallax-from="{&quot;translateY&quot;:50}"
                         data-parallax-to="{&quot;translateY&quot;:-130}"
                         data-parallax-options="{&quot;duration&quot;:&quot;2000&quot;, &quot;easing&quot;:&quot;linear&quot;, &quot;reverse&quot;:true, &quot;triggerHook&quot;:&quot;onEnter&quot;, &quot;overflowHidden&quot;: false}">

                      <div
                        className="iconbox text-left iconbox-round iconbox-lg iconbox-filled iconbox-filled iconbox-filled-hover iconbox-icon-image iconbox-shadow pt-50 pb-40 iconbox-icon-animating">
                        <div className="iconbox-icon-wrap">
										<span className="iconbox-icon-container mb-35">
											<svg xmlns="http://www.w3.org/2000/svg"  width="31.219"
                           height="48" viewBox="0 0 31.219 48"><defs xmlns="http://www.w3.org/2000/svg"><linearGradient
                        gradientUnits="userSpaceOnUse" id="grad249375" x1="0%" y1="0%" x2="0%" y2="100%"><stop
                        offset="0%" stop-color="#f42958"/><stop offset="100%"
                                                                      stop-color="#f42958"/></linearGradient></defs>
												<defs>
													<filter id="filter-seo-icon-5" x="0.344" y="0" width="31.219" height="48"
                                  filterUnits="userSpaceOnUse">
														<feImage preserveAspectRatio="none" x="0.34375" y="0" width="31.219" height="48"
                                     result="image"
                                     xlink_href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzEuMjE5IiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMzEuMjE5IDQ4Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI2xpbmVhci1ncmFkaWVudCk7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeTE9IjI0IiB4Mj0iMzEuMjE5IiB5Mj0iMjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmU1MDZjIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZjNmEyYSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzEuMjE5IiBoZWlnaHQ9IjQ4Ii8+Cjwvc3ZnPgo="/>
														<feComposite result="composite" operator="in" in2="SourceGraphic"/>
														<feBlend result="blend" in2="SourceGraphic"/>
													</filter>
												</defs>
												<path filter="url(#filter-seo-icon-5)"
                              d="M27.25,0a4.281,4.281,0,0,1,1.641.328,4.134,4.134,0,0,1,1.359.891,4.8,4.8,0,0,1,.938,1.359,3.026,3.026,0,0,1,.281,1.641l0.094,39.562a7.368,7.368,0,0,1-.375,1.641,3.156,3.156,0,0,1-.937,1.359,6.025,6.025,0,0,1-1.359.891A4.1,4.1,0,0,1,27.156,48H4.75a4.1,4.1,0,0,1-1.734-.328,5.993,5.993,0,0,1-1.359-.891,3.143,3.143,0,0,1-.937-1.359,7.287,7.287,0,0,1-.375-1.641L0.438,4.219A3,3,0,0,1,.719,2.578a4.77,4.77,0,0,1,.938-1.359A4.119,4.119,0,0,1,3.016.328,4.276,4.276,0,0,1,4.656,0H27.25ZM4.656,2.813a1.8,1.8,0,0,0-.562.094,0.754,0.754,0,0,0-.422.328,4.2,4.2,0,0,1-.328.469,0.514,0.514,0,0,0-.094.516L3.156,8.438H28.75L28.656,4.219A0.521,0.521,0,0,0,28.563,3.7a4,4,0,0,1-.328-0.469,0.754,0.754,0,0,0-.422-0.328,1.8,1.8,0,0,0-.562-0.094H4.656ZM28.75,11.25H3.156L3.25,33.844H28.656L28.75,11.25h0ZM27.156,45.188a1.632,1.632,0,0,0,.656-0.094,1.744,1.744,0,0,0,.422-0.328,1.436,1.436,0,0,0,.328-0.469c0.061-.155.125-0.328,0.188-0.516L28.656,36.75H3.25L3.156,43.781c0.062,0.188.125,0.36,0.188,0.516a1.392,1.392,0,0,0,.328.469,1.688,1.688,0,0,0,.422.328,1.622,1.622,0,0,0,.656.094H27.156Zm-9.75-4.219a3.6,3.6,0,0,1-.141-0.563,0.752,0.752,0,0,0-.281-0.469,1.923,1.923,0,0,0-.469-0.281,1.691,1.691,0,0,0-.609-0.094,2.045,2.045,0,0,0-.516.094,0.86,0.86,0,0,0-.469.281,3.142,3.142,0,0,0-.281.469,0.709,0.709,0,0,0-.047.563,0.592,0.592,0,0,0,.047.516,4.792,4.792,0,0,0,.281.422,1.112,1.112,0,0,0,.469.328,1.417,1.417,0,0,0,.516.141,1.177,1.177,0,0,0,.609-0.141,4.28,4.28,0,0,0,.469-0.328,0.733,0.733,0,0,0,.281-0.422,4.218,4.218,0,0,1,.141-0.516h0Z"
                              transform="translate(-0.344)"/>
											</svg>
										</span>
                        </div>
                        <div className="contents">
                          <h3>Integrated Crypto Exchange</h3>
                          <p className="font-size-16 lh-165">Island Mining currently has a Non-Banking
                            Financial Institution (NBFI) in Mongolia and a banking partner in Cayman
                            Islands, which allow us to provide these services out of the gate.</p>
                        </div>
                      </div>
                      <div
                        className="iconbox text-left iconbox-round iconbox-lg iconbox-filled iconbox-filled iconbox-filled-hover iconbox-icon-image iconbox-shadow pt-50 pb-40 iconbox-icon-animating">
                        <div className="iconbox-icon-wrap">
										<span className="iconbox-icon-container mb-35">
											<svg xmlns="http://www.w3.org/2000/svg"  width="48"
                           height="36.75" viewBox="0 0 48 36.75"><defs xmlns="http://www.w3.org/2000/svg"><linearGradient
                        gradientUnits="userSpaceOnUse" id="grad877332" x1="0%" y1="0%" x2="0%" y2="100%"><stop
                        offset="0%" stop-color="#f42958"/><stop offset="100%"
                                                                      stop-color="#f42958"/></linearGradient></defs>
												<defs>
													<filter id="filter-seo-icon-7" x="0" y="0.625" width="48" height="36.75"
                                  filterUnits="userSpaceOnUse">
														<feImage preserveAspectRatio="none" x="0" y="0.625" width="48" height="36.75" result="image"
                                     xlink_href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzYuNzUiIHZpZXdCb3g9IjAgMCA0OCAzNi43NSI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHkxPSIxOC4zNzUiIHgyPSI0OCIgeTI9IjE4LjM3NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZTUwNmMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmM2YTJhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSI0OCIgaGVpZ2h0PSIzNi43NSIvPgo8L3N2Zz4K"/>
														<feComposite result="composite" operator="in" in2="SourceGraphic"/>
														<feBlend result="blend" in2="SourceGraphic"/>
													</filter>
												</defs>
												<path filter="url(#filter-seo-icon-7)"
                              d="M16.781,3.438H48V37.375H0V3.438H8.625V0.625h8.156V3.438h0ZM45.188,34.563V14.781H40.781a6.936,6.936,0,0,1,.656,1.266,12.542,12.542,0,0,1,.469,1.406q0.187,0.7.328,1.453a8.139,8.139,0,0,1,.141,1.5,11,11,0,0,1-.891,4.406,11.446,11.446,0,0,1-6.047,6.047,10.984,10.984,0,0,1-4.406.891,10.645,10.645,0,0,1-4.359-.891,11.635,11.635,0,0,1-3.562-2.437,11.482,11.482,0,0,1-2.437-3.609,10.972,10.972,0,0,1-.891-4.406,12,12,0,0,1,.094-1.5,10.585,10.585,0,0,1,.281-1.453,8.381,8.381,0,0,1,.516-1.406,9.473,9.473,0,0,1,.7-1.266H2.813V34.563H45.188ZM39.563,20.406a7.951,7.951,0,0,0-.7-3.328,9.009,9.009,0,0,0-1.828-2.672,8.347,8.347,0,0,0-2.672-1.781,8.454,8.454,0,0,0-3.328-.656,8.216,8.216,0,0,0-3.234.656,8.916,8.916,0,0,0-2.719,1.781,7.95,7.95,0,0,0-1.828,2.672,8.768,8.768,0,0,0,0,6.656,7.949,7.949,0,0,0,1.828,2.672A8.889,8.889,0,0,0,27.8,28.188a8.189,8.189,0,0,0,3.234.656,8.427,8.427,0,0,0,3.328-.656,8.323,8.323,0,0,0,2.672-1.781,9.009,9.009,0,0,0,1.828-2.672,7.947,7.947,0,0,0,.7-3.328h0Zm-1.125-8.437h6.75V6.25H2.813v5.719H23.625A10.4,10.4,0,0,1,25.266,10.8a15.889,15.889,0,0,1,1.781-.891,9.251,9.251,0,0,1,1.922-.562,11.54,11.54,0,0,1,2.062-.187,11.312,11.312,0,0,1,2.109.188,10.571,10.571,0,0,1,1.922.563,12.033,12.033,0,0,1,1.781.891,11.792,11.792,0,0,1,1.594,1.172h0Z"
                              transform="translate(0 -0.625)"/>
											</svg>
										</span>
                        </div>
                        <div className="contents">
                          <h3>Frictionless User Experience</h3>
                          <p className="font-size-16 lh-165">Our partner institutions in Asia and Cayman work
                            with IslandEX to provide banking services and prepaid debit cards to
                            seamlessly convert and spend funds.</p>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="lqd-space visible-lg visible-md" style={{height: "200px"}}/>

                <div className="row d-flex flex-wrap align-items-center">
                  <a href="" className="col-md-5 col-sm-12">
                    <img src="./assets/media/falcon-4000.png" alt=""/>
                  </a>
                  <div data-custom-animations="true"
                       data-ca-options="{&quot;triggerHandler&quot;:&quot;inview&quot;, &quot;animationTarget&quot;:&quot;all-childs&quot;, &quot;duration&quot;:&quot;1600&quot;, &quot;delay&quot;:&quot;160&quot;, &quot;easing&quot;:&quot;easeOutQuint&quot;, &quot;direction&quot;:&quot;forward&quot;, &quot;initValues&quot;:{&quot;translateY&quot;:30, &quot;opacity&quot;:0}, &quot;animations&quot;:{&quot;translateY&quot;:0, &quot;opacity&quot;:1}}"
                       className="lqd-column col-md-5 col-sm-12 col-md-offset-1">

                    <header className="fancy-title mb-50">
                      <h6 className="text-uppercase">Mining Innovation</h6>
                      <h2>we're creating the<strong> next generation mining machine</strong></h2>
                    </header>

                    <p className="font-size-30 lh-105"><i>Our mandate is to bring crypto mining into every home.</i>
                    </p>

                    <p className="font-size-18 lh-15 mb-55">Our liquid-immersion cooled mining machines are easy to
                      use, silent, and more energy efficient than existing machines on the market.</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        <div className="collapse navbar-collapse navbar-collapse-clone" id="main-header-collapse-clone">
          <button type="button" className="navbar-toggle collapsed nav-trigger style-mobile" data-toggle="collapse"
                  data-target="#main-header-collapse-clone" aria-expanded="false"
                  data-changeclassnames="{ &quot;html&quot;: &quot;mobile-nav-activated overflow-hidden&quot; }">
            <span className="sr-only">Toggle navigation</span>
            <span className="bars">
											<span className="bar"></span>
											<span className="bar"></span>
											<span className="bar"></span>
										</span>
          </button>
          <div className="navbar-collapse-inner">
            <ul id="primary-nav" className="main-nav nav align-items-lg-stretch justify-content-lg-start"
                data-submenu-options="{ &quot;toggleType&quot;:&quot;fade&quot;, &quot;handler&quot;:&quot;mouse-in-out&quot; }">
              <li>
                <a href="#miningcoin" data-localscroll="true">
                  <span className="txt">Mining Coin</span>
                </a>
              </li>
              <li>
                <a href="#whitepaper" data-localscroll="true">
                  <span className="txt">Whitepaper</span>
                </a>
              </li>
              <li>
                <a href="#islandmining" data-localscroll="true">
                  <span className="txt">Island Mining</span>
                </a>
              </li>
              <li>
                <a href="#works" data-localscroll="true">
                  <span className="txt">Token Sale</span>
                </a>
              </li>
              <li>
                <a href="#roadmap" data-localscroll="true">
                  <span className="txt">Roadmap</span>
                </a>
              </li>
              <li>
                <a href="#team" data-localscroll="true">
                  <span className="txt">Team</span>
                </a>
              </li>
              <li className="desktop-hidden">
                <a href="/login" data-localscroll="true">
                  <span className="txt">Log In</span>
                </a>
              </li>
              <li className="desktop-hidden">
                <a href="/register" data-localscroll="true">
                  <span className="txt">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section className="vc_row pt-50 pb-50" id="works">
          <div className="container">

            <div className="row">

              <div className="lqd-column col-md-6 col-md-offset-3 mb-55">

                <header className="fancy-heading text-center">
                  <h6 className="font-size-12 text-uppercase ltr-sp-2 mt-0 mb-3 opacity-05">MNT Token Offering
                  </h6>
                  <h2 className="font-size-40 my-0">Token Offering details</h2>
                </header>

              </div>
            </div>
            <div className="row d-flex flex-wrap align-items-center">

              <div className="lqd-column col-md-4 col-xs-12 mb-4 mb-md-0">

                <h2 className="font-size-36 mt-0">MNT private sale is now open.</h2>
                <p className="font-size-17 lh-175 pr-md-4 mb-30">Apply for the whitelist now. Our automated,
                  SSL-encrypted KYC process takes less than 5 minutes to complete.</p>

                <a href="https://www.islandmining.io/register"
                   className="btn btn-solid circle btn-bordered border-thin btn-gradient px-3">
								<span>
									<span className="btn-gradient-bg"></span>
									<span className="btn-txt">Start KYC now</span>
									<span className="btn-icon">
										<i className="fa fa-long-arrow-right"></i>
									</span>
									<span className="btn-gradient-bg btn-gradient-bg-hover"></span>
									<svg xmlns="http://www.w3.org/2000/svg"  xml_space="preserve" className="btn-gradient-border" width="100%" height="100%">
										<defs>
											<linearGradient id="svg-border-5c79175df082b" x1="0%" y1="0%" x2="100%" y2="0%">
												<stop offset="0%"></stop>
												<stop offset="100%"></stop>
											</linearGradient>
										</defs>
										<rect x="0.5" y="0.5" rx="30" ry="30" width="100%" height="100%" stroke="url(#svg-border-5c79175df082b)"></rect>
									</svg>
								</span>
                </a>

              </div>
              <div className="lqd-column col-md-8 col-xs-12">
                <div className="lqd-column-inner border-athens-gray border-radius-5 pt-50 pb-25 px-2 px-md-5">
                  <div className="row">
                    <div className="lqd-column col-md-10 col-md-offset-1 mb-35">
                      <div className="countdown text-arapawa is-countdown" data-fittext="true"
                           data-fittext-options="{ &quot;compressor&quot;: 0.75, &quot;minFontSize&quot;: 60, &quot;maxFontSize&quot;: 60 }"
                           data-plugin-countdown="true"
                           data-countdown-options="{&quot;until&quot;:&quot;2019-12-1&quot;}"
                           style={{fontSize: '60px'}}><span className="countdown-row"><span
                        className="countdown-section"><span className="countdown-amount">34</span><span
                        className="countdown-period">Days</span></span><span className="countdown-sep">:</span><span
                        className="countdown-section"><span className="countdown-amount">7</span><span
                        className="countdown-period">Hours</span></span><span className="countdown-sep">:</span><span
                        className="countdown-section"><span className="countdown-amount">46</span><span
                        className="countdown-period">Minutes</span></span><span className="countdown-sep">:</span><span
                        className="countdown-section"><span className="countdown-amount">19</span><span
                        className="countdown-period">Seconds</span></span></span></div>
                    </div>
                    <div className="lqd-column col-md-4 col-xs-6">
                      <p>
                        <span className="font-size-16 text-arapawa">Private Sale:</span><br/>
                        <span className="font-size-16 opacity-06">$10,000,000 USD</span>
                      </p>
                    </div>
                    <div className="lqd-column col-md-4 col-xs-6">
                      <p>
                        <span className="font-size-16 text-arapawa">Hard Cap:</span><br/>
                        <span className="font-size-16 opacity-06">$90,000,000 USD</span>
                      </p>
                    </div>
                    <div className="lqd-column col-md-4 col-xs-6">
                      <p>
                        <span className="font-size-16 text-arapawa">Payment:</span><br/>
                        <span className="font-size-16 opacity-06">BTC, ETH, LTC, USD</span>
                      </p>
                    </div>
                    <div className="lqd-column col-md-4 col-xs-6">
                      <p>
                        <span className="font-size-16 text-arapawa">Private Sale Open:</span><br/>
                        <span className="font-size-16 opacity-06">Oct 12, 2019 15:00 UTC</span>
                      </p>
                    </div>
                    <div className="lqd-column col-md-4 col-xs-6">
                      <p>
                        <span className="font-size-16 text-arapawa">Private Sale Close:</span><br/>
                        <span className="font-size-16 opacity-06">Nov 30, 2019 14:59 UTC</span>
                      </p>
                    </div>
                    <div className="lqd-column col-md-4 col-xs-6">
                      <p>
                        <span className="font-size-16 text-arapawa">Public Sale Start:</span><br/>
                        <span className="font-size-16 opacity-06">February 2020</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="roadmap" className="roadmap vc_row pt-50 pb-50 mt-50 mb-50 bg-cover" data-parallax="true"
                 data-parallax-options="{&quot;parallaxBG&quot;:true}" style={{backgroundImage: "url(./assets/demo/bg/bg-40.jpg)"}}>;
          <div className="container">
            <div className="row">
              <div className="lqd-column col-md-6 col-md-offset-3 px-md-5 mb-20">
                <header className="fancy-heading text-center">
                  <h2 className="mt-0 font-size-44 text-white">Roadmap</h2>
                </header>
              </div>
              <div className="lqd-column col-md-8 col-md-offset-2">
                <div className="one-roadmap" data-custom-animations="true"
                     data-ca-options="{&quot;triggerHandler&quot;: &quot;inview&quot;, &quot;animationTarget&quot;: &quot;.one-roadmap-item&quot;, &quot;duration&quot;: 1200, &quot;delay&quot;: 150, &quot;easing&quot;: &quot;easeOutQuint&quot;, &quot;initValues&quot;: { &quot;translateY&quot;: 50, &quot;translateZ&quot;: -150, &quot;rotateX&quot;: -95, &quot;opacity&quot;: 0 }, &quot;animations&quot;: { &quot;translateY&quot;: 0, &quot;translateZ&quot;: 0, &quot;rotateX&quot;: 0, &quot;opacity&quot;: 1 }}">
                  <div className="one-roadmap-inner">
                    <div className="one-roadmap-item text-white">
                      <span className="one-roadmap-bar"></span>
                      <div className="one-roadmap-info">
                        <h6><strong>Q1 2019</strong></h6>
                        <p>-&nbsp;&nbsp;Island Mining core team formed<br/>-&nbsp;&nbsp;Whitepaper
                          v1.0 completed</p>
                      </div>
                      <span className="one-roadmap-mark">
											<i className="fa fa-check font-size-16"></i>
										</span>
                    </div>
                    <div className="one-roadmap-item text-white">
                      <span className="one-roadmap-bar"></span>
                      <div className="one-roadmap-info">
                        <h6><strong>Q2 2019</strong></h6>
                        <p>Partnership agreements with:<br/>-&nbsp;&nbsp;Cayman Islands
                          bank<br/>-&nbsp;&nbsp;Japan-based semiconductor
                          consultants<br/>-&nbsp;&nbsp;Canadian liquid immersion-cooling engineers
                        </p>
                      </div>
                      <span className="one-roadmap-mark">
											<i className="fa fa-check font-size-16"></i>
										</span>
                    </div>
                    <div className="one-roadmap-item text-white">
                      <span className="one-roadmap-bar"></span>
                      <div className="one-roadmap-info">
                        <h6><strong>August 2019</strong></h6>
                        <p>-&nbsp;&nbsp;Began development of liquid-cooled ASIC
                          miners<br/>-&nbsp;&nbsp;Whitepaper v2.0 completed</p>
                      </div>
                      <span className="one-roadmap-mark">
											<i className="fa fa-check font-size-16"></i>
										</span>
                    </div>
                    <div className="one-roadmap-item text-white">
                      <span className="one-roadmap-bar"></span>
                      <div className="one-roadmap-info">
                        <h6>September 2019</h6>
                        <p><strong>-&nbsp;&nbsp;Initiate token sale Seed
                          Round</strong><br/>-&nbsp;&nbsp;Begin expansion of Mongolia mining
                          facility (Mine A)</p>
                      </div>
                      <span className="one-roadmap-mark">
										</span>
                    </div>
                    <div className="one-roadmap-item text-white">
                      <span className="one-roadmap-bar"></span>
                      <div className="one-roadmap-info">
                        <h6>November 2019</h6>
                        <p><strong>-&nbsp;&nbsp;Initiate token sale Private Round
                          (Japan)</strong><br/>-&nbsp;&nbsp;Launch cloud mining platform</p>
                      </div>
                      <span className="one-roadmap-mark">
										</span>
                    </div>
                    <div className="one-roadmap-item text-white">
                      <span className="one-roadmap-bar"></span>
                      <div className="one-roadmap-info">
                        <h6>December 2019</h6>
                        <p>-&nbsp;&nbsp;IslandEX wallet and exchange development begins</p>
                      </div>
                      <span className="one-roadmap-mark">
										</span>
                    </div>
                    <div className="one-roadmap-item text-white">
                      <span className="one-roadmap-bar"></span>
                      <div className="one-roadmap-info">
                        <h6>Q1 2020</h6>
                        <p><strong>-&nbsp;&nbsp;Initiate token sale Pre-Sale Round + Public Sale 1 +
                          2</strong><br/>-&nbsp;&nbsp;Begin construction of Canada facility
                          (Mine B)<br/>-&nbsp;&nbsp;Falcon Series liquid-cooled ASIC miner
                          launch<br/>-&nbsp;&nbsp;Launch IslandEX wallet and exchange</p>
                      </div>
                      <span className="one-roadmap-mark">
										</span>
                    </div>
                    <div className="one-roadmap-item text-white">
                      <span className="one-roadmap-bar"></span>
                      <div className="one-roadmap-info">
                        <h6>Q2 2020</h6>
                        <p><strong>-&nbsp;&nbsp;Token sale completed and Mining Coin tokens
                          unlocked</strong><br/>-&nbsp;&nbsp;Begin construction of US Mine
                          (Mine C)<br/>-&nbsp;&nbsp;Shipping starts for Liquid-cooled Falcon
                          Industrial Series<br/>-&nbsp;&nbsp;Launch global fiat/crypto banking
                          services</p>
                      </div>
                      <span className="one-roadmap-mark">
										</span>
                    </div>
                    <div className="one-roadmap-item text-white">
                      <span className="one-roadmap-bar"></span>
                      <div className="one-roadmap-info">
                        <h6>Q3 2020</h6>
                        <p>-&nbsp;&nbsp;Large-scale expansion of mines<br/>-&nbsp;&nbsp;Field testing
                          Liquid-cooled Falcon Home Miners</p>
                      </div>
                      <span className="one-roadmap-mark">
										</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="roadmap_gradient">

          </div>
        </section>
        <section id="team" className="vc_row pt-20 pb-80">
          <div className="container">
            <div className="row">
              <div className="lqd-column col-md-6 col-md-offset-3 mb-70">
                <header className="fancy-heading text-center">
                  <h2 className="font-size-40 my-0">Our Team</h2>
                </header>
              </div>
            </div>
            <div className="row">

              <div className="lqd-column col-md-3 col-sm-6">

                <div className="ld-tm d-flex flex-column text-center px-md-3">
                  <div className="ld-tm-img mb-3 text-center">
                    <figure>
                      <img className="square" src="/assets/media/Christopher-SQ.jpg" alt="Christopher Filiatrault"/>
                    </figure>
                  </div>
                  <div className="ld-tm-info">
                    <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Christopher Filiatrault
                    </h3>
                    <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">Founder &amp; CEO
                    </h6>
                    <p className="opacity-06">Bitcoin pioneer and entrepreneur in Japan for 35 years.
                      Responsible for the first Bitcoin ATMs in Japan and previously raised over $30
                      million for crypto projects.</p>
                    <ul className="ld-tm-social social-icon branded-text mt-3">
                      <li><a href="https://www.linkedin.com/in/christopher-filiatrault/"><i
                        className="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lqd-column col-md-3 col-sm-6">
                <div className="ld-tm d-flex flex-column text-center px-md-3">
                  <div className="ld-tm-img mb-3 text-center">
                    <figure>
                      <img className="square" src="./assets/media/Arakawa-SQ.png" alt="Muneya Arakawa"/>
                    </figure>
                  </div>
                  <div className="ld-tm-info">
                    <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Muneya Arakawa</h3>
                    <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">CTO</h6>
                    <p className="opacity-06">Japanese engineer with 25 years in the semiconductor business.
                      Founded Silicon International (Japan) 25 years ago. His deep knowledge of
                      semiconductors and his international connections are now focused on Island
                      Mining.</p>
                    <ul className="ld-tm-social social-icon branded-text mt-3">
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lqd-column col-md-3 col-sm-6">

                <div className="ld-tm d-flex flex-column text-center px-md-3">
                  <div className="ld-tm-img mb-3 text-center">
                    <figure>
                      <img className="square" src="./assets/media/ChrisMarsh-SQ.png" alt="Chris Marsh"/>
                    </figure>
                  </div>
                  <div className="ld-tm-info">
                    <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Chris Marsh</h3>
                    <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">CFO</h6>
                    <p className="opacity-06">Experienced fund manager, registered CMA with Masters Degree
                      from London Business School. CEO of Blockchain Foundry, the team behind Syscoin
                      (SYS)</p>
                    <ul className="ld-tm-social social-icon branded-text mt-3">
                      <li><a href="https://www.linkedin.com/in/chris-marsh-ba8395137"><i
                        className="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lqd-column col-md-3 col-sm-6">
                <div className="ld-tm d-flex flex-column text-center px-md-3">
                  <div className="ld-tm-img mb-3 text-center">
                    <figure>
                      <img className="square" src="./assets/media/Case-SQ.png" alt="Case Lewis"/>
                    </figure>
                  </div>
                  <div className="ld-tm-info">
                    <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Case Lewis</h3>
                    <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">COO</h6>
                    <p className="opacity-06">Blockchain and cryptocurrency expert, and previously director,
                      project manager, and technical advisor to numerous publicly-listed companies.
                    </p>
                    <ul className="ld-tm-social social-icon branded-text mt-3">
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="lqd-column col-md-3 col-sm-6">
                <div className="ld-tm d-flex flex-column text-center px-md-3">
                  <div className="ld-tm-img mb-3 text-center">
                    <figure>
                      <img className="square" src="./assets/media/NaokoSinger-SQ.png" alt="Naoko Singer"/>
                    </figure>
                  </div>
                  <div className="ld-tm-info">
                    <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Naoko Singer</h3>
                    <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">Japan Liaison
                    </h6>
                    <p className="opacity-06">Bilingual and skilled in international trade and business,
                      leads Island Mining's Japanese business alliances.</p>
                    <ul className="ld-tm-social social-icon branded-text mt-3">
                      <li><a href="https://www.linkedin.com/in/naokosinger1126"><i className="fa fa-linkedin"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lqd-column col-md-3 col-sm-6">

                <div className="ld-tm d-flex flex-column text-center px-md-3">
                  <div className="ld-tm-img mb-3 text-center">
                    <figure>
                      <img className="square" src="./assets/media/Samir-SQ.png" alt="Samir Bandali"/>
                    </figure>
                  </div>
                  <div className="ld-tm-info">
                    <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Samir Bandali</h3>
                    <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">Chief Strategy
                      Officer</h6>
                    <p className="opacity-06">Mr. Bandali will lead the design and development of strategies
                      which activate and strengthen a connection between our products and investors to
                      drive profitable company growth in a dynamic and competitive environment. With a
                      wealth of experience in international relations.</p>
                    <ul className="ld-tm-social social-icon branded-text mt-3">
                      <li><a href="https://www.linkedin.com/in/samir-bandali-033041123"><i
                        className="fa fa-linkedin"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lqd-column col-md-3 col-sm-6">
                <div className="ld-tm d-flex flex-column text-center px-md-3">
                  <div className="ld-tm-img mb-3 text-center">
                    <figure>
                      <img className="square" src="./assets/media/Sergelen-SQ.png" alt="Sergelen Tsogtbayar"/>
                    </figure>
                  </div>
                  <div className="ld-tm-info">
                    <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Sergelen Tsogtbayar</h3>
                    <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">Mongolia
                      Engineering Lead</h6>
                    <p className="opacity-06">Civil engineer and Deputy CEO of Erchim Tusul LLC, the largest
                      engineering firm in Mongolia. Worked on Mongolia’s largest bitcoin mining
                      facility.</p>
                    <ul className="ld-tm-social social-icon branded-text mt-3">
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lqd-column col-md-3 col-sm-6">
                <div className="ld-tm d-flex flex-column text-center px-md-3">
                  <div className="ld-tm-img mb-3 text-center">
                    <figure>
                      <img className="square" src="./assets/media/Neil-SQ.png" alt="Neil Wright"/>
                    </figure>
                  </div>
                  <div className="ld-tm-info">
                    <h3 className="ld-tm-name size-sm font-weight-semibold mb-3">Neil Wright</h3>
                    <h6 className="ld-tm-pos text-uppercase ltr-sp-175 font-weight-bold mb-3">Security Lead
                    </h6>
                    <p className="opacity-06">Neil Wright is the Co-Founder and CTO of a cybersecurity
                      software company that developed products for the US Department of Defense and
                      the US Intelligence Community. Neil holds an MSc in Information Systems and a
                      BSc from West Point Military Academy.</p>
                    <ul className="ld-tm-social social-icon branded-text mt-3">
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <footer className="main-footer pt-50 pb-50" style={{backgroundImage: "url(./assets/demo/bg/bg-40.jpg)"}}>
          <div className="container">
            <div className="row d-flex flex-wrap">
              <div className="lqd-column col-md-3 col-sm-6">
                <div className="d-flex justify-content-center flex-column">
                  <figure className="text-center mb-4">
                    <img src="./assets/media/logo_sq.png" alt="Virtus"/>
                  </figure>
                  <ul className="social-icon social-icon-lg d-flex justify-content-center">
                    <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="lqd-column col-md-3 col-sm-6">
                <h3 className="widget-title mb-30 mt-0 text-white font-size-15 text-uppercase ltr-sp-2">Navigation
                </h3>
                <ul className="lqd-custom-menu reset-ul font-size-14 lh-2">
                  <li className="mb-1"><a href="#miningcoin">Mining Coin</a></li>
                  <li className="mb-1"><a href="#whitepaper">Whitepaper</a></li>
                  <li className="mb-1"><a href="#islandmining">What We Do</a></li>
                  <li className="mb-1"><a href="#works">Token Sale</a></li>
                  <li className="mb-1"><a href="#roadmap">Roadmap</a></li>
                  <li className="mb-1"><a href="#team">Team</a></li>
                  <li className="mb-1"><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="lqd-column col-md-3 col-sm-6">
                <h3 className="widget-title mb-30 mt-0 text-white font-size-15 text-uppercase ltr-sp-2">Contact Us
                </h3>
                <ul className="lqd-custom-menu reset-ul font-size-14 lh-2">
                  <li className="mb-1"><a href="info@islandmining.io">info@islandmining.io</a></li>
                  <br/>
                  <li className="mb-1"><a href="#">Grand Cayman,</a></li>
                  <li className="mb-1"><a href="#">Cayman Islands</a></li>
                  <li className="mb-1"><a href="#">KY1-1003</a></li>
                </ul>
              </div>
              <div className="lqd-column col-md-3 col-sm-6">
                <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css"/>
                  <div id="mc_embed_signup">
                    <form action="/signup" method="post" id="mc-embedded-subscribe-form"
                          name="mc-embedded-subscribe-form"
                          className="validate" target="_blank" noValidate="">
                      <div id="mc_embed_signup_scroll">
                        <label htmlFor="mce-EMAIL" className="widget-title mb-30 text-white font-size-12 text-uppercase ltr-sp-2">
                          Subscribe to our Mailing List
                        </label>
                        <input type="email" value="" name="email" className="email input-email w-100" id="mce-EMAIL" placeholder="email address" required=""/>
                          <div style={{position: 'absolute', left: '-5000px', ariaHidden: "true"}}>
                            <input type="text" name="b_bce954e7f6aba08eb6414eff1_59f6b8c7f9" tabIndex="-1" value=""/>
                          </div>
                          <div className="clear mt-30">
                            <button className="btn btn-solid circle btn-bordered border-thin btn-gradient px-3">
                              <span>
                                <span className="btn-gradient-bg"></span>
                                <span className="btn-txt">Subscribe</span>
                                <span className="btn-icon">
                                  <i className="fa fa-long-arrow-right"></i>
                                </span>
                                <span className="btn-gradient-bg btn-gradient-bg-hover"></span>
                                <svg xmlns="http://www.w3.org/2000/svg"  xml_space="preserve" className="btn-gradient-border" width="100%" height="100%">
                                  <defs>
                                    <linearGradient id="svg-border-5c79175df082b" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%"></stop>
                                      <stop offset="100%"></stop>
                                    </linearGradient>
                                  </defs>
                                  <rect x="0.5" y="0.5" rx="30" ry="30" width="100%" height="100%" stroke="url(#svg-border-5c79175df082b)"></rect>
                                </svg>
                              </span>
                            </button>
                          </div>
                      </div>
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </footer>

        {/*<script src="./assets/vendors/jquery.min.js"></script>*/}
        {/*<script src="./assets/js/theme-vendors.js"></script>*/}
        {/*<script src="./assets/js/theme.min.js"></script>*/}
        {/*<script src="./assets/js/liquidAjaxMailchimp.min.js"></script>*/}


      </div>
  )
  }
  }