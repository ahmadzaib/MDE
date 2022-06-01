import Accordion from 'react-bootstrap/Accordion'
import '../../assets/css/Faqaccor.css'
import Footer from '../../layouts/footer'
import Navbar from '../../layouts/header'
export default function MeetDExperts() {
    return (
        <div className="meet-d-experts">
            <Navbar />
            <div className='main-div'>
                <div className="main-banner mt-xl-4 ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 mt-2">
                                <div className="feild-search">
                                    <i className="fal fa-search"></i>
                                    <input type="Search" placeholder="Search for anything" />
                                </div>
                                <Accordion className='mt-5' defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What is Meet D Experts all about?</Accordion.Header>
                                        <Accordion.Body>
                                            We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What is Meet D Experts all about?</Accordion.Header>
                                        <Accordion.Body>
                                            We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>What is Meet D Experts all about?</Accordion.Header>
                                        <Accordion.Body>
                                            We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>What is Meet D Experts all about?</Accordion.Header>
                                        <Accordion.Body>
                                            We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What is Meet D Experts all about?</Accordion.Header>
                                        <Accordion.Body>
                                            We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>What is Meet D Experts all about?</Accordion.Header>
                                        <Accordion.Body>
                                            We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="col-lg-4 mt-5">
                                <div className="accor-img">
                                    <img src="../new pages/assets/img/faq-section.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}