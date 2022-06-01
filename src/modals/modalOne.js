import Modal from 'react-bootstrap/Modal'
import { copyIcon, crossIcon, gitIcon, meetLogo } from '../utils/images'
export default function ModalOne(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='meet-modal-main'
            >
                <Modal.Header>
                    <span className='close' onClick={props.onHide}><img src={crossIcon} alt="" /></span>
                </Modal.Header>
                <Modal.Body>
                    <div className="main-meet d-flex">
                        <div className="meet-img">
                            <img src={meetLogo} alt="" />
                        </div>
                        <div className="meet-para">
                            <h3>Getting Started with Figma; A Designer’s First Steps</h3>
                            <p>We exist to help people get answers to questions threy’ve not found. Either that they cannot ask them
                                or they do not know to found. Either that they cannot ask them or they do not know to</p>
                        </div>
                    </div>
                    <div className="meet-link">
                        <h5>Here’s the link to your meeting</h5>
                        <p>Copy this link and send it to the people you want to join you on this session.</p>
                        <input type="text" placeholder="meet.google.com/fbs-gpwp-teu" /><img src={copyIcon} alt="meet" />
                    </div>
                </Modal.Body>
            </Modal>
        </>

    )
}