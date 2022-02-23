import React, { useCallback, createRef, useEffect, useState } from 'react';
import Header from '../../sections/header'
// import Main from '../../sections/main'
import Template from "../../templates/1";
import { toPng } from 'html-to-image';
import {Card, Container, Row, Col, Button, Modal, Form} from 'react-bootstrap'

function App() {
  const ref = createRef()

  /** Model variables */
  const [Model1, Model1Show] = useState(false);
  const [Model2, Model2Show] = useState(false);
  const [educationIndex, setEducationIndex] = useState(0); 

  /** personal info variables */  
  const [fname, setfName] = useState("your name!");
  const [phone, setPhone] = useState("888-999-5555");
  const [email, setEmail] = useState("myemail@mail.com");
  const [overview, setOverview] = useState("I am a reserved but ambitious young professional seeking a career that fits my professional skills, personality, and murderous tendencies. My good birth, excellent education and phenomenal mathematical faculty have allowed me to advance the prospects of several criminal enterprises.");

  /** education variables */  
  const [major, setMajor] = useState(["Computer Science",""]);
  const [sname, setsName] = useState([""]);
  const [slocation, setsLocation] = useState(["Rabat, Morocco",""]);
  const [schoolStartDate, setSchoolStartDate] = useState(["August 2012",""]);
  const [schoolEndDate, setSchoolEndDate] = useState(["May 2015",""]);
  const [refresh, setRefresh] = useState(true)
  
  const handleModel1Close = () => Model1Show(false);
  const handleModel1Show = () => Model1Show(true);

  const handleModel2Close = () => Model2Show(false);
  const handleModel2Show = () => Model2Show(true);

  const handleChange = (val, field) => {
    switch (field) {
      case "name": {setfName(val.target.value); break};
      case "phone": {setPhone(val.target.value); break};
      case "email": {setEmail(val.target.value); break};
      case "overview": {setOverview(val.target.value); break};
    }

    switch (field) {
      case "major": {setMajor(changeAtIndex(educationIndex, major, val.target.value)); break};
      case "sname": {setsName(changeAtIndex(educationIndex, sname, val.target.value)); break};
      case "slocation": {setsLocation(changeAtIndex(educationIndex, slocation, val.target.value)); break};
      case "schoolStartDate": {setSchoolStartDate(changeAtIndex(educationIndex, schoolStartDate, val.target.value)); break};
      case "schoolEndDate": {setSchoolEndDate(changeAtIndex(educationIndex, schoolEndDate, val.target.value)); break};
    }
  }

  const changeAtIndex = (i, arr, val) => {
    setRefresh(!refresh)
    let newArr = arr
    newArr[i] = val
    return newArr
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
              <Button variant="primary" onClick={handleModel1Show}>
                Launch demo modal
              </Button>
              {/** 
               * first Model for collecting personal information!
               */}
              <Modal show={Model1} onHide={handleModel1Close} animation={true}>
                <Modal.Header closeButton>
                  <Modal.Title>Personal Information:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e, "name")} type="text" placeholder="Full Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone #:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e, "phone")} type="text" placeholder="Phone #" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e, "email")} type="text" placeholder="Email Address" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Overview about yourself:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e, "overview")} as="textarea" rows={3} />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleModel1Close}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={() => {handleModel1Close(); handleModel2Show()}}>
                    Next
                  </Button>
                </Modal.Footer>
              </Modal>
              {/** 
               * Second Model for collecting education information!
               */}
              <Modal show={Model2} onHide={handleModel2Close} animation={true}>
                <Modal.Header closeButton>
                  <Modal.Title>Education:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>School Name:</Form.Label>
                    <Form.Control value={sname[educationIndex]} onChange={(e) => handleChange(e, "sname")} type="text" placeholder="Oxford University" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>School location:</Form.Label>
                    <Form.Control value={slocation[educationIndex]} onChange={(e) => handleChange(e, "slocation")} type="text" placeholder="San Fr, CA" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Row>
                      <Col>
                        <Form.Label>Start Date:</Form.Label>
                        <Form.Control value={schoolStartDate[educationIndex]} onChange={(e) => handleChange(e, "schoolStartDate")} type="text" placeholder="ex: 2012" />
                      </Col>
                      <Col>
                        <Form.Label>End date:</Form.Label>
                        <Form.Control value={schoolEndDate[educationIndex]} onChange={(e) => handleChange(e, "schoolEndDate")} type="text" placeholder="ex: 2016" />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Major:</Form.Label>
                  <Form.Control value={major[educationIndex]} onChange={(e) => handleChange(e, "major")} type="text" placeholder="ex: Computer science" />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Button size="sm" variant="success" onClick={() => {setEducationIndex(educationIndex+1)}}>
                        + Add education background
                      </Button>
                    </Col>
                    <Col>
                      {
                        (educationIndex >= 1 && sname[1] != "") && 
                        <Button size="sm" variant="secondary" onClick={() => {setEducationIndex(educationIndex-1)}}>
                          Previous Education background
                        </Button>
                      }
                    </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => {handleModel2Close(); handleModel1Show()}}>
                    Back
                  </Button>
                  <Button variant="primary" onClick={downloadCV}>
                    Download
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
            <Template 
              fname={fname} 
              phone={phone} 
              email={email} 
              overview={overview} 
              reference={ref} 
              sname={sname}
              slocation={slocation}
              major={major}
              schoolStartDate={schoolStartDate}
              schoolEndDate={schoolEndDate}
              />
        </Container>
    </>
    );
}

export default App;
