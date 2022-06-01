import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import { crossIcon, meetLogoIcon, modalImage, stickerOne } from '../utils/images'
export default function ModalTwo(props) {
    return (
        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modal-meet'
            >
                <Modal.Header>
                    <span className='close' onClick={props.onHide}><img src={crossIcon} alt="" /></span>
                </Modal.Header>
                <Modal.Body className='d-flex'>
                    <div className="Modal-data">
                        <h1>Getting Started with Figma; A Designer’s First Steps</h1>
                        <p>We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them
                            or they do not know to frame them, or the answers are not framed well. <br /> Either that they cannot ask
                            them or they do not know to frame them, or the answers are not framed well.</p>
                        <div className="attendance-main d-flex">
                            <div className="attendace-count">
                                <Link to="#">Attendees Count <span>134</span></Link>
                                <div className="asked-johns d-flex">
                                    <div className="asked-img">
                                        <img src={stickerOne} alt="img" />
                                    </div>
                                    <div className="asked-data ml-2">
                                        <h5>Adeyinka Johnson <span>Asked</span></h5>
                                        <p>Just now</p>
                                    </div>
                                </div>
                                <div className="asked-johns d-flex">
                                    <div className="asked-img">
                                        <img src={stickerOne} alt="img" />
                                    </div>
                                    <div className="asked-data ml-2">
                                        <h5>Adeyinka Johnson <span>Asked</span></h5>
                                        <p>Just now</p>
                                    </div>
                                </div>
                                <div className="asked-johns d-flex">
                                    <div className="asked-img">
                                        <img src={stickerOne} alt="img" />
                                    </div>
                                    <div className="asked-data ml-2">
                                        <h5>Adeyinka Johnson <span>Asked</span></h5>
                                        <p>Just now</p>
                                    </div>
                                </div>
                                <div className="asked-johns d-flex">
                                    <div className="asked-img">
                                        <img src={stickerOne} alt="img" />
                                    </div>
                                    <div className="asked-data ml-2">
                                        <h5>Adeyinka Johnson <span>Asked</span></h5>
                                        <p>Just now</p>
                                    </div>
                                </div>
                            </div>
                            <div className="attendace-Event">
                                <h5>Event’s Conferencing App:</h5>
                                <div className="zoom">
                                    <h3>Zoom</h3>
                                </div>
                                <div className="google-meet">
                                    <Link to="#"><img src={meetLogoIcon} alt="meet" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Modal-img">
                        <img src={modalImage} alt="" />
                        <Link to="#">Ask A Questions</Link>
                        <div className="main-dates  d-flex">
                            <div className="dates">
                                <div className="d-flex align-items-center">
                                    <h1>Thursday</h1>
                                    <p> <span>.</span> Live</p>
                                </div>
                                <div className="date d-flex">
                                    <h5>Jan 7th, 2022</h5>
                                    <span>Friday, 10:00pm WAT</span>
                                </div>

                            </div>
                            <div className="date-join">
                                <button><Link to="#">Join Now</Link></button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>

    )
}