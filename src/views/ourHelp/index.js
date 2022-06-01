import Footer from "../../layouts/footer";
import Navbar from "../../layouts/header";
import '../../assets/css/About2.css'
import { MeetPeopleFive, MeetPeopleFour, MeetPeopleOne, MeetPeopleThree, MeetPeopleTwo } from "../../utils/images";
export default function OurHelp() {
    return (
        <div className="ourhelp">
            <Navbar />
            <div className="main-banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 sol-sm-12 mt-5 pt-5 main-various">
                            <div className="various-topic">
                                <h3>Get to Know Us</h3>
                                <h4>We’re here to help,<span>Feel free to ask Questions on</span>  Various Topics.</h4>
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
            </div>
            <Footer />
        </div>
    )
}