import Footer from "../../layouts/footer";
import Navbar from "../../layouts/header";
import { faqSection } from "../../utils/images";
import '../../assets/css/faq-section.css'
import { faqsPage } from "../../routers/routePath";


export default function Faqs() {
    return (
        <div className="faqs">
            <Navbar activePageNavUrl={faqsPage} />
            <div className="main-div">
                <div className="h-75 d-flex align-items-center justify-content-center faq_main_section pt-5 mt-4">
                    <div className="container mx-5">
                        <div className="row">
                            <div className="col-6 d-flex align-items-start justify-content-center flex-column">
                                <h1 className="faq-title">FAQs</h1>
                                <h1 className="faq-sub-title" style={{ color: "#B2B2B2" }}>Wondering who asked?</h1>
                                <h1 className="text-white faq-sub-title">Well, people talk.</h1>
                                <p className="small " style={{ color: "#CCCCCC", fontWeight: "lighter", fontSize: "1vw" }}>We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed in a way that cannot understand. Whether it’s creating AutoLayout in </p>
                                <div className="d-flex align-items-center">
                                    <div className="faq-chip">#UX Design</div>
                                    <div className="faq-chip">#UX Design</div>
                                    <div className="faq-chip">#UX Design</div>
                                </div>
                                <br /><br />
                                <div className="faq-search mt-5">
                                    <i className="fa fa-search"></i><input type="text" placeholder="Search for anything" />
                                </div>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-content-end">
                                <img src={faqSection} style={{ width: "30vw", height: "30vw" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}