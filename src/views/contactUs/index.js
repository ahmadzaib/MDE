import Footer from "../../layouts/footer";
import Navbar from "../../layouts/header";
import "../../assets/css/Contactus.css";
import { contactusPage } from "../../routers/routePath";
import {
  contactUsIconFour,
  contactUsIconOne,
  contactUsIconThree,
  contactUsIconTwo,
} from "../../utils/images";
export default function ContactUs() {
  return (
    <div className="contact-us">
      <Navbar activePageNavUrl={contactusPage} />
      <div className="main-div">
        <div className="main-banner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 pt-5 main-contact">
                <div className="contact-us">
                  <h3>Contact Us</h3>
                  <h4>
                    We’re here to help, <br />
                    <span> Feel free to reach out</span>
                  </h4>
                  <p>
                    We exist to help people get answers to questions threy’ve
                    not found. Either that they cannot ask them or they do not
                    know to frame them, or the answers are not framed in a way
                    that cannot understand. Whether it’s creating AutoLayout in
                  </p>
                </div>
              </div>
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-5  col-md-5 col-sm-5 pt-5 main-contact-1">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="contact-us-link">
                      {/* <i className="fab fa-linkedin-in"></i> */}
                      <img src={contactUsIconOne} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="contact-us-link">
                      {/* <i className="far fa-envelope"></i> */}
                      <img src={contactUsIconTwo} alt="" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="contact-us-link">
                      {/* <i className="fab fa-twitter"></i> */}
                      <img src={contactUsIconThree} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="contact-us-link">
                      {/* <i className="fab fa-instagram"></i> */}
                      <img src={contactUsIconFour} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
