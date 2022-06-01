import { useState } from "react";
import {
  starIcon,
  unsplashIcon,
  userinterfaceIconFour,
  userinterfaceIconOne,
  userinterfaceIconThree,
  userinterfaceIconTwo,
} from "../../utils/images";
import "../../assets/css/Directory.css";
import Footer from "../../layouts/footer";
import { directoryPage } from "../../routers/routePath";
import Navbar from "../../layouts/header";
import ModalDirectory from "../../modals/directoryModal.js";
import { Link } from "react-router-dom";

export default function Directory() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="directory-main">
      <Navbar />
      <div className="main-div">
        <div className="main-banner directory-content mde-content pt-lg-0 mx-lg-3 px-lg-3 pt-xl-5 mx-xl-5 px-xl-5 ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-4">
                    <div className="user-inter px-lg-4 py-lg-5 px-md-3 py-md-2">
                      <h3>User Interface Design</h3>
                      <p>User Interface Design</p>
                      <div className="user-icon d-flex">
                        <img src={userinterfaceIconOne} alt="icon" />
                        <img src={userinterfaceIconTwo} alt="icon" />
                        <img src={userinterfaceIconThree} alt="icon" />
                        <img src={userinterfaceIconFour} alt="icon" />
                      </div>
                      <div className="user-dot"></div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="user-inter-des">
                      <h1>
                        Get ‘d’ right answers on{" "}
                        <span>User Interface Design</span>{" "}
                      </h1>
                      <div className="d-flex align-items-center flex-row designers">
                        <div className="designer-chip">
                          <Link to="/"># UX Design</Link>
                        </div>
                        <div className="designer-chip ml-2">
                          <Link to="/"># UX Design</Link>
                        </div>
                        <div className="designer-chip ml-2">
                          <Link to="/"># UX Design</Link>
                        </div>
                      </div>
                      <p className="pb-2">
                        We exist to help people get answers to questions
                        threy’ve not found. Either that they cannot ask them or
                        they do not know to frame them, or the answers are not
                        framed in a way that can be understood. Whether it’s
                        creating AutoLayout in Figma, to making Stir-Fry
                        Spaghettis-Don Corleone style, we are here to help you
                        get the answers you need.
                      </p>
                      <div className="d-flex align-items-center peoples-des justify-content-start">
                        <div className="ml-2 people-img">
                          <div>
                            <img src={unsplashIcon} className="" />
                          </div>
                          <div>
                            <img src={unsplashIcon} className="" />
                          </div>
                          <div>
                            <img src={unsplashIcon} className="" />
                          </div>
                          <div>
                            <img src={unsplashIcon} className="" />
                          </div>
                          <div>
                            <p
                              className="m-0 text-white font-weight-bold"
                              style={{ fontSize: "1vw" }}
                            >
                              <a href="#" onClick={() => setModalShow(true)}>
                                456 Questions answered
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="carer-trans d-flex justify-content-end">
                  <div className="career-icon d-flex">
                    <i className="fas fa-play"></i>
                    <i className="fas fa-play"></i>
                  </div>
                  <div className="career-data">
                    <p>Career Transitioning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer activePageUrl={directoryPage} />
      </div>

      <ModalDirectory show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
