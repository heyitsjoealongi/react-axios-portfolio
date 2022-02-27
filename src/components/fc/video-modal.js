import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Iframe from "react-iframe";

const VideoModal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <Button className="close" onClick={toggle}>
      <i className="ri-close-line"></i>
    </Button>
  );

  return (
    <>
      <Button className="play" onClick={toggle}>
        <i className="ri-play-line"></i>
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="modal-dialog-centered video-modal"
      >
        <ModalHeader toggle={toggle} close={closeBtn} />
        <ModalBody>
          <div className="embed-responsive embed-responsive-16by9">
            <Iframe
              url=""
              width="1280px"
              height="720px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              autoplay
              display="initial"
              className="embed-responsive-item"
            />
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default VideoModal;
