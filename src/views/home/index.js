import { useEffect, useState } from "react";
import Footer from "../../layouts/footer";
import ModalOne from "../../modals/modalOne";
import ModalTwo from "../../modals/modalTwo";
import "../../assets/css/style.css";
import "../../assets/css/main.css";
import "../../assets/css/modal3.css";
import "../../assets/css/modal2.css";
import {
  diamonds,
  gitHub,
  js,
  people,
  peopleFour,
  peopleThree,
  peopleTwo,
  thursDay,
  upcomingEvent,
} from "../../utils/images";
import { homePage } from "../../routers/routePath";
import Navbar from "../../layouts/header";

export default function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowMeet, setModalShowMeet] = useState(false);
  const [toggleLeft, setToggleLeft] = useState(false);
  const toggle = (e) => {
    e.preventDefault();
    setToggleLeft((perv) => !perv);
  };

  const toggleTrue = (e) => {
    setToggleLeft(false);
  };

  return (
    <div className="home-sessions">
      <Navbar />
      <div className="main-div">
        <section className="parent-header">
          <div className="mde-content">
            {!toggleLeft ? (
              <div className="session-parent">
                <p className="session-text">Sessions</p>
                <div className="position-relative">
                  <i className="fal fa-search"></i>
                  <input
                    type="text"
                    className="input-session"
                    placeholder="Search for event..."
                  />
                </div>
                <p className="session-desc">
                  Here are some tailored events we <br />
                  made,
                  <span className="text-white"> just for you.</span>
                </p>
                <div className="parent-three-boxes">
                  <div className="github-box d-flex align-items-center justify-content-between flex-column">
                    <img
                      src={gitHub}
                      alt="Github Icon"
                      className="github-box-img"
                    />
                    <p className="github-box-text text-center">#UX Design</p>
                  </div>
                  <div className="github-box d-flex align-items-center justify-content-between flex-column">
                    <img
                      src={diamonds}
                      alt="Github Icon"
                      className="github-box-img"
                    />
                    <p className="github-box-text text-center">#UX Design</p>
                  </div>
                  <div className="github-box d-flex align-items-center justify-content-between flex-column">
                    <img
                      src={js}
                      alt="Github Icon"
                      className="github-box-img"
                    />
                    <p className="github-box-text text-center">#UX Design</p>
                  </div>
                </div>
              </div>
            ) : null}
            <div className={`news-side ${toggleLeft ? "slide-expand" : ""}`}>
              {/* <div className=""><i className="fas fa-chevron-right"></i></div>  */}
              <div className="parent-scroll">
                <div className="d-flex align-items-center justify-content-center">
                  {!toggleLeft ? (
                    <button
                      type="button"
                      className="left-arrow-button"
                      onClick={toggle}
                    >
                      <i className="fa text-white fa-chevron-left"></i>
                    </button>
                  ) : null}
                  {toggleLeft ? (
                    <button
                      type="button"
                      className="right-arrow-button"
                      onClick={toggleTrue}
                    >
                      <i className="fa text-white fa-chevron-left"></i>
                    </button>
                  ) : null}
                </div>
                <div className="flex-test">
                  <div className="thrusday-parent">
                    <div className="d-flex">
                      <div className="thru-inner-left position-relative">
                        <p className="text-thrusday m-0">Thrusday</p>
                        <p className="live-text">Live</p>
                        <h4 className="text-white d-inline mr-3">
                          Jan 7th, 2022
                        </h4>
                        <span className="grey-color">Friday, 10:00pm WAT</span>
                        <p className="grey-color thrusday-desc">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Perspiciatis, eligendi! Eaque, debitis natus
                          veniam nam, totam molestiae, rem quidem odit .{" "}
                          <a href="#" className="thrusday-read-more-btn">
                            Read More
                          </a>
                        </p>
                        {/* <img src="./assets/img/people.svg" alt="" /> */}
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="ml-2">
                            <img src={people} className="peoples-img" />
                            <img src={peopleTwo} className="peoples-img" />
                            <img src={peopleThree} className="peoples-img" />
                            <img src={peopleFour} className="peoples-img" />
                          </div>
                          <p
                            className="m-0 text-white ml-3 font-weight-bold"
                            style={{ fontSize: "1vw" }}
                          >
                            500+ going
                          </p>
                        </div>
                        <div className="mt-5 home-btns">
                          <button
                            className="btn-join button-animated btn-animated-join mr-3"
                            onClick={() => setModalShow(true)}
                          >
                            Join Now
                          </button>
                          <button
                            className="btn-event button-animated btn-animated-event"
                            onClick={() => setModalShowMeet(true)}
                          >
                            <span>View Event</span>
                          </button>
                        </div>
                      </div>
                      <div className="thru-inner-right">
                        <img
                          src={thursDay}
                          alt="thrusday"
                          className="thrusday-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="time-title-parent">
                    <div className="d-flex">
                      <div className="flex-50 pr-1">
                        <div className="parent-time">
                          <div className="justify-content-around row">
                            <div className="col-3 time-interior mr-4">
                              <p className="grey-color m-0">Days</p>
                              <h2 className="mb-0">04</h2>
                            </div>
                            <div className="col-3 time-interior mr-4">
                              <p className="grey-color m-0">Hours</p>
                              <h2 className="mb-0">12</h2>
                            </div>
                            <div className="col-3 time-interior">
                              <p className="grey-color m-0">Minutes</p>
                              <h2 className="mb-0">32</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-50 pl-1">
                        <div className="parent-time p-0 px-3">
                          <p
                            className="grey-color m-0 small"
                            style={{ fontSize: ".7vw" }}
                          >
                            Title :
                          </p>
                          <h6
                            className="text-white"
                            style={{ fontSize: "1.3vw" }}
                          >
                            Getting started with Figma; A designer’s First steps
                          </h6>
                          <div className="d-flex align-items-center flex-row">
                            <div className="designer-chip">
                              <p className="m-0"># UX Design</p>
                            </div>
                            <div className="designer-chip ml-2">
                              <p className="m-0"># UX Design</p>
                            </div>
                            <div className="designer-chip ml-2">
                              <p className="m-0"># UX Design</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-test2">
                  <div className="upcoming-events ml-5">
                    <h2 className="text-white">Upcoming Events</h2>
                    <div className="upcoming-event">
                      <div className="row">
                        <div className="col-7">
                          <h6
                            className="upcoming-event-title"
                            style={{ fontSize: "1.2vw" }}
                          >
                            Finding your niche as a creative...
                          </h6>
                          <div className="d-flex justify-content-between align-items-end flex-row mt-3">
                            <div className="">
                              <p
                                style={{ fontSize: "1vw" }}
                                className="text-white small m-0"
                              >
                                Jan 7th, 2022
                              </p>
                              <h6
                                style={{ fontSize: ".8vw" }}
                                className="m-0 upcoming-event-title small"
                              >
                                Friday, 10:00pm WAT
                              </h6>
                            </div>
                            <button className="mb-1 btn btn-upcoming-event">
                              RSVP
                            </button>
                          </div>
                        </div>
                        <div className="col-5">
                          <img src={upcomingEvent} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="upcoming-events ml-5 mt-2">
                    <div className="upcoming-event">
                      <div className="row">
                        <div className="col-7">
                          <h6
                            className="upcoming-event-title"
                            style={{ fontSize: "1.2vw" }}
                          >
                            Finding your niche as a creative...
                          </h6>
                          <div className="d-flex justify-content-between align-items-end flex-row mt-3">
                            <div className="">
                              <p
                                style={{ fontSize: "1vw" }}
                                className="text-white small m-0"
                              >
                                Jan 7th, 2022
                              </p>
                              <h6
                                style={{ fontSize: ".8vw" }}
                                className="m-0 upcoming-event-title small"
                              >
                                Friday, 10:00pm WAT
                              </h6>
                            </div>
                            <button className="mb-1 btn btn-upcoming-event">
                              RSVP
                            </button>
                          </div>
                        </div>
                        <div className="col-5">
                          <img src={upcomingEvent} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="upcoming-events ml-5 mt-2">
                    <div className="upcoming-event">
                      <div className="row">
                        <div className="col-7">
                          <h6
                            className="upcoming-event-title"
                            style={{ fontSize: "1.2vw" }}
                          >
                            Finding your niche as a creative...
                          </h6>
                          <div className="d-flex justify-content-between align-items-end flex-row mt-3">
                            <div className="">
                              <p
                                style={{ fontSize: "1vw" }}
                                className="text-white small m-0"
                              >
                                Jan 7th, 2022
                              </p>
                              <h6
                                style={{ fontSize: ".8vw" }}
                                className="m-0 upcoming-event-title small"
                              >
                                Friday, 10:00pm WAT
                              </h6>
                            </div>
                            <button className="mb-1 btn btn-upcoming-event">
                              RSVP
                            </button>
                          </div>
                        </div>
                        <div className="col-5">
                          <img src={upcomingEvent} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer activePageUrl={homePage} />
      </div>

      <ModalOne show={modalShow} onHide={() => setModalShow(false)} />
      <ModalTwo show={modalShowMeet} onHide={() => setModalShowMeet(false)} />
    </div>
  );
}
