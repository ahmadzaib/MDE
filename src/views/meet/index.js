import Footer from "../../layouts/footer";
import Navbar from "../../layouts/header";
import "../../assets/css/meet.css";
import "../../assets/css/meet2.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { meetPage } from "../../routers/routePath";
import {
  diaIcon,
  gitIcon,
  js,
  MeetPeopleEIght,
  MeetPeopleFive,
  MeetPeopleFour,
  MeetPeopleOne,
  MeetPeopleSeven,
  MeetPeopleSIx,
  MeetPeopleThree,
  MeetPeopleTwo,
} from "../../utils/images";
import { useState } from "react";
export default function Meet() {
  const [towColumnLayout, setTwoColumnLayout] = useState(true);

  const oneColumn = (e) => {
    e.preventDefault();
    setTwoColumnLayout(false);
  };
  const twoColumn = (e) => {
    e.preventDefault();
    setTwoColumnLayout(true);
  };

  const settings = {
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        slidesToShow: 2,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="meet">
      <Navbar />
      <div className="main-div">
        <div className="banner-main meet-content-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 mt-4 ">
                <div className="meet-head">
                  <h1>Meet ‘d’ Experts</h1>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6  mt-4 ">
                <div className="meet-icons">
                  <a
                    href="#"
                    className={`${towColumnLayout ? "active" : ""}`}
                    onClick={twoColumn}
                  >
                    <i className="fas fa-grip-horizontal"></i>
                  </a>
                  <a
                    href="#"
                    className={`${!towColumnLayout ? "active" : ""}`}
                    onClick={oneColumn}
                  >
                    <i className="fas fa-ellipsis-h"></i>
                  </a>
                </div>
              </div>
            </div>
            {towColumnLayout ? (
              <div className="grid-view">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="cards mt-3 d-flex ">
                      <div className="card-img">
                        <img src={MeetPeopleOne} alt="sti" />
                      </div>
                      <div className="card-desc ml-4">
                        <h4>
                          Andikan Bassey <span> Product Designer</span>
                        </h4>
                        <p>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed well.
                        </p>
                        <div className="card-desc-icon d-flex !Im">
                          <img src={gitIcon} alt="icon" />
                          <img src={diaIcon} alt="icon" />
                          <img src={js} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="cards mt-3 d-flex ">
                      <div className="card-img">
                        <img src={MeetPeopleTwo} alt="sti" />
                      </div>
                      <div className="card-desc ml-4">
                        <h4>
                          Andikan Bassey <span> Product Designer</span>
                        </h4>
                        <p>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed well.
                        </p>
                        <div className="card-desc-icon d-flex !Im">
                          <img src={gitIcon} alt="icon" />
                          <img src={diaIcon} alt="icon" />
                          <img src={js} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="cards mt-3 d-flex ">
                      <div className="card-img">
                        <img src={MeetPeopleThree} alt="sti" />
                      </div>
                      <div className="card-desc ml-4">
                        <h4>
                          Andikan Bassey <span> Product Designer</span>
                        </h4>
                        <p>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed well.
                        </p>
                        <div className="card-desc-icon d-flex !Im">
                          <img src={gitIcon} alt="icon" />
                          <img src={diaIcon} alt="icon" />
                          <img src={js} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="cards mt-3 d-flex ">
                      <div className="card-img">
                        <img src={MeetPeopleFour} alt="sti" />
                      </div>
                      <div className="card-desc ml-4">
                        <h4>
                          Andikan Bassey <span> Product Designer</span>
                        </h4>
                        <p>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed well.
                        </p>
                        <div className="card-desc-icon d-flex !Im">
                          <img src={gitIcon} alt="icon" />
                          <img src={diaIcon} alt="icon" />
                          <img src={js} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="cards mt-3 d-flex ">
                      <div className="card-img">
                        <img src={MeetPeopleFive} alt="sti" />
                      </div>
                      <div className="card-desc ml-4">
                        <h4>
                          Andikan Bassey <span> Product Designer</span>
                        </h4>
                        <p>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed well.
                        </p>
                        <div className="card-desc-icon d-flex !Im">
                          <img src={gitIcon} alt="icon" />
                          <img src={diaIcon} alt="icon" />
                          <img src={js} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 ">
                    <div className="cards mt-3 d-flex ">
                      <div className="card-img">
                        <img src={MeetPeopleSIx} alt="sti" />
                      </div>
                      <div className="card-desc ml-4">
                        <h4>
                          Andikan Bassey <span> Product Designer</span>
                        </h4>
                        <p>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed well.
                        </p>
                        <div className="card-desc-icon d-flex !Im">
                          <img src={gitIcon} alt="icon" />
                          <img src={diaIcon} alt="icon" />
                          <img src={js} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 ">
                    <div className="cards mt-3 d-flex ">
                      <div className="card-img">
                        <img src={MeetPeopleSeven} alt="sti" />
                      </div>
                      <div className="card-desc ml-4">
                        <h4>
                          Andikan Bassey <span> Product Designer</span>
                        </h4>
                        <p>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed well.
                        </p>
                        <div className="card-desc-icon d-flex !Im">
                          <img src={gitIcon} alt="icon" />
                          <img src={diaIcon} alt="icon" />
                          <img src={js} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 ">
                    <div className="cards mt-3 d-flex ">
                      <div className="card-img">
                        <img src={MeetPeopleEIght} alt="sti" />
                      </div>
                      <div className="card-desc ml-4">
                        <h4>
                          Andikan Bassey <span> Product Designer</span>
                        </h4>
                        <p>
                          We exist to help people get answers to questions
                          threy’ve not found. Either that they cannot ask them or
                          they do not know to frame them, or the answers are not
                          framed well.
                        </p>
                        <div className="card-desc-icon d-flex !Im">
                          <img src={gitIcon} alt="icon" />
                          <img src={diaIcon} alt="icon" />
                          <img src={js} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="horizental-list-view">
                <Slider className="main-slider-meet mt-5" {...settings}>
                  <div className="item-meet">
                    <div className="card-1 mt-3">
                      <div className="card-img-1">
                        <img src={MeetPeopleOne} alt="sti" />
                      </div>
                      <div className="card-desc-1">
                        <h4>Software Engineer</h4>
                        <p>
                          Hi, I’m Samuel Weke, a Software Engineer based in Lagos,
                          Nigeria...
                        </p>
                        <div className="card-desc-icon-1 d-flex ">
                          <img src={gitIcon} alt="icon" />
                          <img src={diaIcon} alt="icon" />
                          <img src={js} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-meet">
                    <div className="card-2 mt-3 ">
                      <div className="card-img-1">
                        <img src={MeetPeopleTwo} alt="sti" />
                      </div>
                      <div className="card-desc-1">
                        <h4>User Experience Designer</h4>
                        <p>
                          Hi, I’m Samuel Weke, a Software Engineer based in Lagos,
                          Nigeria...
                        </p>
                        <div className="card-desc-icon-1 d-flex ">
                          <img src={gitIcon} alt="icon" />
                          <img src={diaIcon} alt="icon" />
                          <img src={js} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-meet">
                    <div className="card-3 mt-3 ">
                      <div className="card-img-1">
                        <img src={MeetPeopleThree} alt="sti" />
                      </div>
                      <div className="card-desc-1">
                        <h4>Product Designer</h4>
                        <p>
                          Hi, I’m Samuel Weke, a Software Engineer based in Lagos,
                          Nigeria...
                        </p>
                        <div className="card-desc-icon-1 d-flex ">
                          <img src={gitIcon} alt="icon" />
                          <img src={diaIcon} alt="icon" />
                          <img src={js} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-meet">
                    <div className="card-4 mt-3 ">
                      <div className="card-img-1">
                        <img src={MeetPeopleThree} alt="sti" />
                      </div>
                      <div className="card-desc-1">
                        <h4>Software Engineer</h4>
                        <p>
                          Hi, I’m Samuel Weke, a Software Engineer based in Lagos,
                          Nigeria...
                        </p>
                        <div className="card-desc-icon-1 d-flex ">
                          <img src={gitIcon} alt="icon" />
                          <img src={diaIcon} alt="icon" />
                          <img src={js} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-meet">
                    <div className="card-5 mt-3 ">
                      <div className="card-img-1">
                        <img src={MeetPeopleSIx} alt="sti" />
                      </div>
                      <div className="card-desc-1">
                        <h4>Product Designer</h4>
                        <p>
                          Hi, I’m Samuel Weke, a Software Engineer based in Lagos,
                          Nigeria...
                        </p>
                        <div className="card-desc-icon-1 d-flex ">
                          <img src={gitIcon} alt="icon" />
                          <img src={diaIcon} alt="icon" />
                          <img src={js} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            )}
          </div>
        </div>
        <Footer activePageUrl={meetPage} />
      </div>

    </div>
  );
}
