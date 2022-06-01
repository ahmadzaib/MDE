import Footer from "../../layouts/footer";
import Navbar from "../../layouts/header";
import '../../assets/css/About1.css'
export default function OurPlan() {
    return (
        <div className="our-plan">
            <Navbar />
            <div className="main-banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-5 pt-5 about-help-main">
                            <div className="about-help">
                                <h3>Don’t tell anyone 👀</h3>
                                <h4>We’re here to help,<br /><span>Feel free to reach out</span></h4>
                                <p>We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed in a way that cannot understand. Whether it’s creating AutoLayout in</p>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 our-vission mt-5 ">
                            <div className="about-vision px-3 py-5">
                                <h5> Our Plan</h5>
                                <ul>
                                    <li>We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed in a way that cannot understand. Whether it’s creating AutoLayout in</li>
                                    <li><span> Our mission</span> is to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed in a way that cannot understand. Whether it’s creating AutoLayout in</li>
                                    <li>We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed in a way that cannot understand. Whether it’s creating AutoLayout in</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}