import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { playIcon } from '../utils/images'
import CalenderVideoModal from './calenderVideoModal';
export default function CalenderModal(props) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='week-day-modal'
            >
                <Modal.Body>
                    <div className="d-flex align-items-start justify-content-between">
                        <div>
                            <h1 className="calendar-month-name">Thursday</h1>
                            <div className="m-0 text-white">Jan 7th, 2022</div>
                        </div>
                        <div className="">
                            <p className="m-0 week-day-chip">#UX Design</p>
                        </div>
                    </div>

                    <p className="m-0 text-white mt-5">
                        We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them or they do not know to frame them, or the answers are not framed well... <span className="calendar-month-name">Read more</span>
                    </p>

                    <div className="d-flex align-items-center">
                        <div className="play-video-button mt-4" onClick={() => setModalShow(true)} style={{ cursor: "pointer" }} data-dismiss="modal">
                            <img src={playIcon} alt="" />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <CalenderVideoModal show={modalShow}
                onHide={() => setModalShow(false)} />
        </>

    )
}