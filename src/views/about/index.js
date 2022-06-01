import Footer from "../../layouts/footer";
import Navbar from "../../layouts/header";
import "../../assets/css/About.css";
import { aboutPage } from "../../routers/routePath";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  MeetPeopleFive,
  MeetPeopleFour,
  MeetPeopleOne,
  MeetPeopleThree,
  MeetPeopleTwo,
} from "../../utils/images";
// import backSlide from "owl.carousel/dist/assets/owl.carousel.css"

export default function About() {
  // const settings = {
  //   centerMode: true,
  //   slidesToShow: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   centerPadding: "20",
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: "0",
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       slidesToShow: 2,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: "0",
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <div className="about">
      <Navbar activePageNavUrl={aboutPage} />
      <div className="main-div">
        <div className="main-banner">
          <div className="container-fluid">
            <OwlCarousel
              items={1}
              className="owl-carousel about-slider owl-theme"
              stagePadding={0}
              loop={false}
              margin={20}
              dots={false}
              nav={false}
              autoplay={false}
            // transitionStyle={backSlide}
            // animateOut='fadeOut'
            >
              <div className="item">
                <div className="row no-gutters">
                  <div className="col-lg-6 col-md-6 sol-sm-12 mt-5 pt-5 main-various">
                    <div className="various-topic">
                      <h3>Get to Know Us</h3>
                      <h4>
                        We’re here to help, <br />
                        <span>Feel free to ask Questions on</span> Various Topics.
                      </h4>
                      <div className="ux-design d-flex">
                        <a href="#">#UX Design</a>
                        <a href="#">#UX Design</a>
                        <a href="#">#UX Design</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6  col-md-6 sol-sm-12  mt-5 pt-5 main-various-icon">
                    <div className="various-icon">
                      <div className="first-row">
                        <img src={MeetPeopleOne} alt="kemi" />
                        <img src={MeetPeopleTwo} alt="andi" />
                        <img src={MeetPeopleThree} alt="park" />
                      </div>
                      <div className="Second-row">
                        <img src={MeetPeopleFour} alt="elviii" />
                        <img src={MeetPeopleFive} alt="Joshua" />
                        <img src={MeetPeopleFive} alt="Elvis" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row no-gutters">
                  <div className="col-lg-6 col-md-6 col-sm-12  pt-5 about-help-main">
                    <div className="about-help">
                      <h3>Don’t tell anyone 👀</h3>
                      <h4>
                        We’re here to help,
                        <br />
                        <span>Feel free to reach out</span>
                      </h4>
                      <p>
                        We exist to help people get answers to questions threy’ve
                        not found. Either that they cannot ask them or they do not
                        know to frame them, or the answers are not framed in a way
                        that cannot understand. Whether it’s creating AutoLayout
                        in
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 our-vission  ">
                    <div className="about-vision px-3 py-5">
                      <h5> Our Plan</h5>
                      <ul>
                        <li>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed in a way that cannot understand. Whether it’s
                          creating AutoLayout in
                        </li>
                        <li>
                          <span> Our mission</span> is to help people get answers
                          to questions threy’ve not found. Either that they cannot
                          ask them or they do not know to frame them, or the
                          answers are not framed in a way that cannot understand.
                          Whether it’s creating AutoLayout in
                        </li>
                        <li>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed in a way that cannot understand. Whether it’s
                          creating AutoLayout in
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row no-gutters">
                  <div className="col-lg-6 col-md-6 col-sm-12 mt-5 pt-5 about-help-main">
                    <div className="about-help">
                      <h3>Our Values</h3>
                      <h4>
                        We’re here to help,
                        <br />
                        <span>Feel free to reach out</span>
                      </h4>
                      <p>
                        We exist to help people get answers to questions threy’ve
                        not found. Either that they cannot ask them or they do not
                        know to frame them, or the answers are not framed in a way
                        that cannot understand. Whether it’s creating AutoLayout
                        in
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 our-vission-1 mt-4 ">
                    <div className="Humanity">
                      <div className="Humanity-1 d-flex">
                        <div className="Humanity-desc">
                          <h5>Humanity</h5>
                          <p>
                            We exist to help people get answers to questions
                            threy’ve not found. Either that they cannot ask them
                            or they do. Either that they cannot ask them or they
                            do. Either that they can or they do.
                          </p>
                        </div>
                        <div className="Humanity-desc">
                          <h5>Humanity</h5>
                          <p>
                            We exist to help people get answers to questions
                            threy’ve not found. Either that they cannot ask them
                            or they do. Either that they cannot ask them or they
                            do. Either that they can or they do.
                          </p>
                        </div>
                      </div>
                      <div className="Humanity-1 d-flex">
                        <div className="Humanity-desc">
                          <h5>Humanity</h5>
                          <p>
                            We exist to help people get answers to questions
                            threy’ve not found. Either that they cannot ask them
                            or they do. Either that they cannot ask them or they
                            do. Either that they can or they do.
                          </p>
                        </div>
                        <div className="Humanity-desc">
                          <h5>Humanity</h5>
                          <p>
                            We exist to help people get answers to questions
                            threy’ve not found. Either that they cannot ask them
                            or they do. Either that they cannot ask them or they
                            do. Either that they can or they do.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row no-gutters">
                  <div className="col-lg-6 col-md-6 col-sm-12 pt-5 about-help-main">
                    <div className="about-help">
                      <h3>Why we exist</h3>
                      <h4>
                        We’re here to help,
                        <br />
                        <span>Feel free to reach out</span>
                      </h4>
                      <p>
                        We exist to help people get answers to questions threy’ve
                        not found. Either that they cannot ask them or they do not
                        know to frame them, or the answers are not framed in a way
                        that cannot understand. Whether it’s creating AutoLayout
                        in
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 our-vission ">
                    <div className="about-vision px-3 py-5">
                      <h5> Our Vision </h5>
                      <ul>
                        <li>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed in a way that cannot understand. Whether it’s
                          creating AutoLayout in
                        </li>
                        <li>
                          <span> Our mission</span> is to help people get answers
                          to questions threy’ve not found. Either that they cannot
                          ask them or they do not know to frame them, or the
                          answers are not framed in a way that cannot understand.
                          Whether it’s creating AutoLayout in
                        </li>
                        <li>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed in a way that cannot understand. Whether it’s
                          creating AutoLayout in
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            {/* <div className="about-container">
              <div className="item">
                <div className="row no-gutters">
                  <div className="col-lg-6 col-md-6 sol-sm-12 mt-5 pt-5 main-various">
                    <div className="various-topic">
                      <h3>Get to Know Us</h3>
                      <h4>
                        We’re here to help, <br />
                        <span>Feel free to ask Questions on</span> Various Topics.
                      </h4>
                      <div className="ux-design d-flex">
                        <a href="#">#UX Design</a>
                        <a href="#">#UX Design</a>
                        <a href="#">#UX Design</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6  col-md-6 sol-sm-12  mt-5 pt-5 main-various-icon">
                    <div className="various-icon">
                      <div className="first-row">
                        <img src={MeetPeopleOne} alt="kemi" />
                        <img src={MeetPeopleTwo} alt="andi" />
                        <img src={MeetPeopleThree} alt="park" />
                      </div>
                      <div className="Second-row">
                        <img src={MeetPeopleFour} alt="elviii" />
                        <img src={MeetPeopleFive} alt="Joshua" />
                        <img src={MeetPeopleFive} alt="Elvis" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row no-gutters">
                  <div className="col-lg-6 col-md-6 col-sm-12  pt-5 about-help-main">
                    <div className="about-help">
                      <h3>Don’t tell anyone 👀</h3>
                      <h4>
                        We’re here to help,
                        <br />
                        <span>Feel free to reach out</span>
                      </h4>
                      <p>
                        We exist to help people get answers to questions threy’ve
                        not found. Either that they cannot ask them or they do not
                        know to frame them, or the answers are not framed in a way
                        that cannot understand. Whether it’s creating AutoLayout
                        in
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 our-vission  ">
                    <div className="about-vision px-3 py-5">
                      <h5> Our Plan</h5>
                      <ul>
                        <li>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed in a way that cannot understand. Whether it’s
                          creating AutoLayout in
                        </li>
                        <li>
                          <span> Our mission</span> is to help people get answers
                          to questions threy’ve not found. Either that they cannot
                          ask them or they do not know to frame them, or the
                          answers are not framed in a way that cannot understand.
                          Whether it’s creating AutoLayout in
                        </li>
                        <li>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed in a way that cannot understand. Whether it’s
                          creating AutoLayout in
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row no-gutters">
                  <div className="col-lg-6 col-md-6 col-sm-12 mt-5 pt-5 about-help-main">
                    <div className="about-help">
                      <h3>Our Values</h3>
                      <h4>
                        We’re here to help,
                        <br />
                        <span>Feel free to reach out</span>
                      </h4>
                      <p>
                        We exist to help people get answers to questions threy’ve
                        not found. Either that they cannot ask them or they do not
                        know to frame them, or the answers are not framed in a way
                        that cannot understand. Whether it’s creating AutoLayout
                        in
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 our-vission-1 mt-4 ">
                    <div className="Humanity">
                      <div className="Humanity-1 d-flex">
                        <div className="Humanity-desc">
                          <h5>Humanity</h5>
                          <p>
                            We exist to help people get answers to questions
                            threy’ve not found. Either that they cannot ask them
                            or they do. Either that they cannot ask them or they
                            do. Either that they can or they do.
                          </p>
                        </div>
                        <div className="Humanity-desc">
                          <h5>Humanity</h5>
                          <p>
                            We exist to help people get answers to questions
                            threy’ve not found. Either that they cannot ask them
                            or they do. Either that they cannot ask them or they
                            do. Either that they can or they do.
                          </p>
                        </div>
                      </div>
                      <div className="Humanity-1 d-flex">
                        <div className="Humanity-desc">
                          <h5>Humanity</h5>
                          <p>
                            We exist to help people get answers to questions
                            threy’ve not found. Either that they cannot ask them
                            or they do. Either that they cannot ask them or they
                            do. Either that they can or they do.
                          </p>
                        </div>
                        <div className="Humanity-desc">
                          <h5>Humanity</h5>
                          <p>
                            We exist to help people get answers to questions
                            threy’ve not found. Either that they cannot ask them
                            or they do. Either that they cannot ask them or they
                            do. Either that they can or they do.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row no-gutters">
                  <div className="col-lg-6 col-md-6 col-sm-12 pt-5 about-help-main">
                    <div className="about-help">
                      <h3>Why we exist</h3>
                      <h4>
                        We’re here to help,
                        <br />
                        <span>Feel free to reach out</span>
                      </h4>
                      <p>
                        We exist to help people get answers to questions threy’ve
                        not found. Either that they cannot ask them or they do not
                        know to frame them, or the answers are not framed in a way
                        that cannot understand. Whether it’s creating AutoLayout
                        in
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 our-vission ">
                    <div className="about-vision px-3 py-5">
                      <h5> Our Vision </h5>
                      <ul>
                        <li>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed in a way that cannot understand. Whether it’s
                          creating AutoLayout in
                        </li>
                        <li>
                          <span> Our mission</span> is to help people get answers
                          to questions threy’ve not found. Either that they cannot
                          ask them or they do not know to frame them, or the
                          answers are not framed in a way that cannot understand.
                          Whether it’s creating AutoLayout in
                        </li>
                        <li>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed in a way that cannot understand. Whether it’s
                          creating AutoLayout in
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <Slider className="about-slider" {...settings}>
              <div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 mt-5 pt-5 about-help-main">
                    <div className="about-help">
                      <h3>Why we exist</h3>
                      <h4>
                        We’re here to help,
                        <br />
                        <span>Feel free to reach out</span>
                      </h4>
                      <p>
                        We exist to help people get answers to questions
                        threy’ve not found. Either that they cannot ask them or
                        they do not know to frame them, or the answers are not
                        framed in a way that cannot understand. Whether it’s
                        creating AutoLayout in
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 our-vission mt-5 ">
                    <div className="about-vision px-3 py-5">
                      <h5> Our Vision </h5>
                      <ul>
                        <li>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them
                          or they do not know to frame them, or the answers are
                          not framed in a way that cannot understand. Whether
                          it’s creating AutoLayout in
                        </li>
                        <li>
                          <span> Our mission</span> is to help people get
                          answers to questions threy’ve not found. Either that
                          they cannot ask them or they do not know to frame
                          them, or the answers are not framed in a way that
                          cannot understand. Whether it’s creating AutoLayout in
                        </li>
                        <li>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them
                          or they do not know to frame them, or the answers are
                          not framed in a way that cannot understand. Whether
                          it’s creating AutoLayout in
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 mt-5 pt-5 about-help-main">
                    <div className="about-help">
                      <h3>Why we exist</h3>
                      <h4>
                        We’re here to help,
                        <br />
                        <span>Feel free to reach out</span>
                      </h4>
                      <p>
                        We exist to help people get answers to questions
                        threy’ve not found. Either that they cannot ask them or
                        they do not know to frame them, or the answers are not
                        framed in a way that cannot understand. Whether it’s
                        creating AutoLayout in
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 our-vission mt-5 ">
                    <div className="about-vision px-3 py-5">
                      <h5> Our Vision </h5>
                      <ul>
                        <li>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them
                          or they do not know to frame them, or the answers are
                          not framed in a way that cannot understand. Whether
                          it’s creating AutoLayout in
                        </li>
                        <li>
                          <span> Our mission</span> is to help people get
                          answers to questions threy’ve not found. Either that
                          they cannot ask them or they do not know to frame
                          them, or the answers are not framed in a way that
                          cannot understand. Whether it’s creating AutoLayout in
                        </li>
                        <li>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them
                          or they do not know to frame them, or the answers are
                          not framed in a way that cannot understand. Whether
                          it’s creating AutoLayout in
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 mt-5 pt-5 about-help-main">
                    <div className="about-help">
                      <h3>Why we exist</h3>
                      <h4>
                        We’re here to help,
                        <br />
                        <span>Feel free to reach out</span>
                      </h4>
                      <p>
                        We exist to help people get answers to questions
                        threy’ve not found. Either that they cannot ask them or
                        they do not know to frame them, or the answers are not
                        framed in a way that cannot understand. Whether it’s
                        creating AutoLayout in
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 our-vission mt-5 ">
                    <div className="about-vision px-3 py-5">
                      <h5> Our Vision </h5>
                      <ul>
                        <li>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them
                          or they do not know to frame them, or the answers are
                          not framed in a way that cannot understand. Whether
                          it’s creating AutoLayout in
                        </li>
                        <li>
                          <span> Our mission</span> is to help people get
                          answers to questions threy’ve not found. Either that
                          they cannot ask them or they do not know to frame
                          them, or the answers are not framed in a way that
                          cannot understand. Whether it’s creating AutoLayout in
                        </li>
                        <li>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them
                          or they do not know to frame them, or the answers are
                          not framed in a way that cannot understand. Whether
                          it’s creating AutoLayout in
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Slider> */}
          </div>
        </div>
        <Footer />
      </div>

    </div >
  );
}
