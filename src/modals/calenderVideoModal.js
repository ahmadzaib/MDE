import Modal from 'react-bootstrap/Modal'
import { crossIcon } from '../utils/images'
import { ModalVideo } from '../utils/videos'
export default function CalenderVideoModal(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='video-modal'
            >
                <Modal.Body>
                    <br /><br /><br />
                    <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                        <span className='close_vide_button' onClick={props.onHide}>X</span>
                        <video style={{ height: "auto", width: "80%" }} controls>
                            <source src={ModalVideo} />
                        </video>
                    </div>
                </Modal.Body>

            </Modal>
        </>

    )
}