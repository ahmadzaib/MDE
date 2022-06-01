import { Link } from "react-router-dom";
import '../../assets/css/style.css'
import '../../assets/css/calendar.css'
import Navbar from "../../layouts/header";
import Footer from "../../layouts/footer";
import {
    archivePage,
    calenderweekPage
} from '../../routers/routePath'

export default function Archive() {
    return (
        <div className="archive">
            <Navbar />
            <div className="main-div">
                <div className="container calendar_main mt-xl-5 pt-xl-4">
                    <div className="row">
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <Link to={calenderweekPage} className="calendar_btn">
                                Jan
                            </Link>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <Link to={calenderweekPage} className="calendar_btn">
                                Feb
                            </Link>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <Link to={calenderweekPage} className="calendar_btn">
                                Mar
                            </Link>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <Link to={calenderweekPage} className="calendar_btn">
                                Apr
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <Link to={calenderweekPage} className="calendar_btn">
                                May
                            </Link>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <Link to={calenderweekPage} className="calendar_btn">
                                June
                            </Link>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <Link to={calenderweekPage} className="calendar_btn">
                                July
                            </Link>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <Link to={calenderweekPage} className="calendar_btn">
                                Aug
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <Link to={calenderweekPage} className="calendar_btn">
                                Sep
                            </Link>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <Link to={calenderweekPage} className="calendar_btn">
                                Oct
                            </Link>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <Link to={calenderweekPage} className="calendar_btn">
                                Nov
                            </Link>
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <Link to={calenderweekPage} className="calendar_btn">
                                Dec
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer activePageUrl={archivePage} />
            </div>

        </ div>
    )
}