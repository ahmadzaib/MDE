import React from "react";
import { Link } from "react-router-dom";
import { Logo, Meet } from "../utils/images";
import Dropdown from 'react-bootstrap/Dropdown'
import {
    aboutPage,
    contactusPage,
    faqsPage,
    homePage,
    meetDExpertsPage,
    ourhelpPage,
    ourplanPage,
    ourvaluePage,

} from '../routers/routePath'

export default function Navbar({ activePageNavUrl }) {
    const linkClass = (linkUrl) =>
        activePageNavUrl === linkUrl ? "active" : ""
    return (
        <div className="navbar-parent">
            <div className="navbar-child1">
                <Link to={homePage}><img src={Logo} className="logo_img" alt="Logo" /></Link>
            </div>
            <div className="navbar-child2">
                <Link to={meetDExpertsPage}><img src={Meet} className="meet_img" alt="Logo" /></Link>
            </div>
            <div className="navbar-child3">
                <nav className="navbar navbar-expand p-0">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className={`nav-link pl-0 pt-0 pb-0 ${linkClass(aboutPage)}`} to={aboutPage}>About<span className="sr-only">(current)</span></Link>
                                {/* <Dropdown >
                                    <Dropdown.Toggle className="btn btn-secondary" id="dropdown-basic">

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Link className="dropdown-item" to={ourplanPage}>
                                            Our Plan
                                        </Link>
                                        <Link className="dropdown-item" to={ourhelpPage}>
                                            Our help
                                        </Link>
                                        <Link className="dropdown-item" to={ourvaluePage}>
                                            Our Value
                                        </Link>\
                                    </Dropdown.Menu>
                                </Dropdown> */}
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link pl-0 pt-0 pb-0 ${linkClass(faqsPage)}`} to={faqsPage}>FAQs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link pl-0 pt-0 pb-0 ${linkClass(contactusPage)}`} to={contactusPage}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}