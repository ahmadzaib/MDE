import {
  categoryIcon,
  messageIcon,
  profileIcon,
  stickerOne,
  VectorIcon,
  workIcon,
} from "../../utils/images";
import { proceedPage } from "../../routers/routePath";
import Footer from "../../layouts/footer";
import Navbar from "../../layouts/header";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

import "../../assets/css/Proceed.css";
import { useState } from "react";

export default function Proceed() {
  const [step, setStep] = useState(1);

  return (
    <div className="proceed">
      <Navbar />
      <div className="main-div">
        <div className="banner-mian proceed-content mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 ">
                <OwlCarousel
                  items={3}
                  className="owl-carousel proceed-slider owl-theme ml-5 pl-5"
                  loop={true}
                  nav={false}
                  dots={false}
                  autoplay={true}
                  slidesToScroll={1}
                  autoplayTimeout={3000}
                  infinite={true}
                  margin={0}
                >
                  <div className="img-slider-1">
                    <img src={stickerOne} alt="img" />
                  </div>
                  <div className="img-slider-2">
                    <img src={stickerOne} alt="img" />
                  </div>
                  <div className="img-slider-3">
                    <img src={stickerOne} alt="img" />
                  </div>
                  <div className="img-slider-4">
                    <img src={stickerOne} alt="img" />
                  </div>
                  <div className="img-slider-5">
                    <img src={stickerOne} alt="img" />
                  </div>
                  <div className="img-slider-6">
                    <img src={stickerOne} alt="img" />
                  </div>
                  <div className="img-slider-7">
                    <img src={stickerOne} alt="img" />
                  </div>
                </OwlCarousel>
              </div>
              <div className="col-lg-6 px-5 Need-main ">
                <div className="Need">
                  {step == 1 ? (
                    <div className="step-one">
                      <h1>
                        Need help?<span> Ask ‘d’ experts</span>
                      </h1>
                      <div className="pofile">
                        <img src={profileIcon} alt="nill" />{" "}
                        <input
                          type="text"
                          placeholder="Please tell us your name. We promise not to tell anyone"
                        />
                        <div className="vector">
                          <img
                            src={VectorIcon}
                            className="vecto-img"
                            alt="nill"
                          />
                        </div>
                      </div>
                      <div className="Message">
                        <img src={messageIcon} alt="nill" />
                        <input type="email" placeholder="Your email address" />
                      </div>
                      <div className="work">
                        <img src={workIcon} alt="nill" />
                        <input
                          type="text"
                          placeholder="Tell us about that jobs"
                        />
                      </div>
                      <Link to="#" onClick={() => setStep(2)}>
                        Proceed
                      </Link>
                    </div>
                  ) : (
                    <div className="step-two">
                      <h1>
                        Need help? <br /> <span> Enter ‘d’ Questions</span>
                      </h1>
                      <div className="Need-select">
                        <img src={categoryIcon} alt="nill" />{" "}
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected="" disabled="">
                            What Category does your query fall under?
                          </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="wrapper">
                        <textarea
                          name="the-textarea"
                          id="the-textarea"
                          maxlength="300"
                          placeholder="Start Typing..."
                          autofocus
                          row="8"
                        ></textarea>
                        <div id="the-count">
                          <span id="current">0</span>
                          <span id="maximum">/ 300 Characters</span>
                        </div>
                      </div>
                      <Link to="#">Submit</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="need-icon">
                  <Link to="#">
                    {" "}
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="far fa-envelope"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer activePageUrl={proceedPage} />
      </div>
    </div>
  );
}
