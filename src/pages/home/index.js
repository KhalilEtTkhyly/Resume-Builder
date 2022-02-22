import React, { useCallback, createRef, useEffect, useState } from 'react';
import Header from '../../sections/header'
// import Main from '../../sections/main'
import Template from "../../templates/1";
import { toPng } from 'html-to-image';
import {Card, Container, Row, Col, Button, Modal, Form} from 'react-bootstrap'

const ref = createRef()

function App() {

  const [show, setShow] = useState(false);
  const [fname, setfName] = useState("your name!");
  const [phone, setPhone] = useState("your name!");
  const [email, setEmail] = useState("your name!");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (val, field) => {
    switch (field) {
      case "name": {setfName(val.target.value); break};
      case "phone": {setPhone(val.target.value); break};
      case "email": {setEmail(val.target.value); break};
    }
  }

  const downloadCV = () => {
    toPng(ref.current, { cacheBust: true, width: 1300, height: 1500})
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
  });

  return (
    <>
        <Header />
        <Container>
            {/* <h1 ref={ref}>heello</h1> */}
            <>
              <Button variant="primary" onClick={handleShow}>
                Launch demo modal
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Personal Information:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e, "name")} type="text" placeholder="Full Name" />
                    <Form.Text className="text-muted">
                      Full name as written on your ID.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone #:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e, "phone")} type="text" placeholder="Full Name" />
                    <Form.Text className="text-muted">
                      Full name as written on your ID.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e, "email")} type="text" placeholder="Full Name" />
                    <Form.Text className="text-muted">
                      Full name as written on your ID.
                    </Form.Text>
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={downloadCV}>
                    Download
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
            <Template fname={fname} phone={phone} email={email} reference={ref} />
        </Container>
    </>
    );
}

export default App;
