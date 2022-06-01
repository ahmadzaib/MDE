import Footer from "../../layouts/footer";
import { useState } from "react";
import Navbar from "../../layouts/header";
import '../../assets/css/style.css'
import '../../assets/css/calendar-week.css'
import { Link } from "react-router-dom";
import { archivePage } from "../../routers/routePath";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CalenderModal from "../../modals/calenderModal";
export default function CalenderWeek() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="calender-week">
            <Navbar />
            <div className="main-div">
                <div className="calender-week-content">
                    <br /><br />
                    <div className="container mb-xl-5 mb-4 px-5">
                        <div>
                            <Link to={archivePage} style={{ cursor: "pointer", textDecoration: "none" }} className="text-white m-0"><i className="fa fa-chevron-left mr-1 small"></i> Calendar</Link>
                            <h1 className="calendar-month-name mt-4">January</h1>
                        </div>
                        <div className="d-flex align-items-center mt-4 justify-content-start">
                            <div className="week-chip active">Week 1</div>
                            <div className="week-chip">Week 2</div>
                            <div className="week-chip">Week 3</div>
                            <div className="week-chip">Week 4</div>
                        </div>
                    </div>
                    <OwlCarousel items={3}
                        className="owl-carousel calendar-week-carousel owl-theme"
                        stagePadding={150}
                        loop={false}
                        margin={30}
                        dots={false}
                        nav={false}>
                        <div className="item bg-danger p-3" onClick={() => setModalShow(true)}>
                            <h1 className="calendar-week-item-title text-white">Wednesday</h1>
                            <p className="m-0 small text-muted">Jan 7th, 2022</p>
                            <div className="week-day-chip-main d-flex align-items-center">
                                <div className="week-day-chip">#UX Design</div>
                            </div>
                        </div>
                        <div className="item bg-danger p-3" onClick={() => setModalShow(true)}>
                            <h1 className="calendar-week-item-title text-white">Wednesday</h1>
                            <p className="m-0 small text-muted">Jan 7th, 2022</p>
                            <div className="week-day-chip-main d-flex align-items-center">
                                <div className="week-day-chip">#UX Design</div>
                            </div>
                        </div>
                        <div className="item bg-danger p-3" onClick={() => setModalShow(true)}>
                            <h1 className="calendar-week-item-title text-white">Wednesday</h1>
                            <p className="m-0 small text-muted">Jan 7th, 2022</p>
                            <div className="week-day-chip-main d-flex align-items-center">
                                <div className="week-day-chip">#UX Design</div>
                            </div>
                        </div>
                        <div className="item bg-danger p-3" onClick={() => setModalShow(true)}>
                            <h1 className="calendar-week-item-title text-white">Wednesday</h1>
                            <p className="m-0 small text-muted">Jan 7th, 2022</p>
                            <div className="week-day-chip-main d-flex align-items-center">
                                <div className="week-day-chip">#UX Design</div>
                            </div>
                        </div>
                        <div className="item bg-danger p-3" onClick={() => setModalShow(true)}>
                            <h1 className="calendar-week-item-title text-white">Wednesday</h1>
                            <p className="m-0 small text-muted">Jan 7th, 2022</p>
                            <div className="week-day-chip-main d-flex align-items-center">
                                <div className="week-day-chip">#UX Design</div>
                            </div>
                        </div>
                        <div className="item bg-danger p-3" onClick={() => setModalShow(true)}>
                            <h1 className="calendar-week-item-title text-white">Wednesday</h1>
                            <p className="m-0 small text-muted">Jan 7th, 2022</p>
                            <div className="week-day-chip-main d-flex align-items-center">
                                <div className="week-day-chip">#UX Design</div>
                            </div>
                        </div>
                        <div className="item bg-danger p-3" onClick={() => setModalShow(true)}>
                            <h1 className="calendar-week-item-title text-white">Wednesday</h1>
                            <p className="m-0 small text-muted">Jan 7th, 2022</p>
                            <div className="week-day-chip-main d-flex align-items-center">
                                <div className="week-day-chip">#UX Design</div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

                <Footer activePageUrl={archivePage} />
            </div>

            <CalenderModal show={modalShow}
                onHide={() => setModalShow(false)} />
        </div>
    )

}