import React, { createRef, useEffect, useState } from 'react';
import Header from '../../sections/header'
// import Main from '../../sections/main'
import Template from "../../templates/1";
import { toPng } from 'html-to-image';
import {Container, Row, Col, Button, Modal, Form} from 'react-bootstrap'

function App() {
  const ref = createRef()

  /** Model variables */
  const [Model1, Model1Show] = useState(false);
  const [Model2, Model2Show] = useState(false);
  const [Model3, Model3Show] = useState(false);
  const [Model4, Model4Show] = useState(false);
  const [educationIndex, setEducationIndex] = useState(0);
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [skillIndex, setSkillIndex] = useState(0);
  
  /** personal info variables */  
  const [fname, setfName] = useState("your name!");
  const [phone, setPhone] = useState("888-999-5555");
  const [email, setEmail] = useState("myemail@mail.com");
  const [overview, setOverview] = useState("I am a reserved but ambitious young professional seeking a career that fits my professional skills, personality, and murderous tendencies. My good birth, excellent education and phenomenal mathematical faculty have allowed me to advance the prospects of several criminal enterprises.");
  
  /** education variables */  
  const [major, setMajor] = useState(["Computer Science", "", "", ""]);
  const [sname, setsName] = useState(["Sample Institute of technology", "", "", ""]);
  const [slocation, setsLocation] = useState(["Rabat, Morocco", "", "", ""]);
  const [schoolStartDate, setSchoolStartDate] = useState(["August 2012", "", "", ""]);
  const [schoolEndDate, setSchoolEndDate] = useState(["May 2015", "", "", ""]);
  const [refresh, setRefresh] = useState(true)

  /** experience variables */
  const [company, setCompany] = useState(["Facebook","","",""]);
  const [clocation, setClocation] = useState(["Los Angelas, CA","","",""]);
  const [role, setRole] = useState(["Font-End Engineer","","",""]);
  const [jobStartDate, setJobStartDate] = useState(["August 2012","","",""]);
  const [jobEndDate, setJobEndDate] = useState(["May 2015","","",""]);
  const [jobDec, setJobDec] = useState(["May 2015","","",""]);

  /** skills & interests variables */
  const [skills, setSkills] = useState([{name: "PHP", score: 1}, {name: "JS", score: 2}, {name: "HTML", score: 5}, {name: "CSS", score: 5}, {name: "ReactJS", score: 4}])
  const [interests, setInterests] = useState("");

  const handleModel1Close = () => Model1Show(false);
  const handleModel1Show = () => Model1Show(true);

  const handleModel2Close = () => Model2Show(false);
  const handleModel2Show = () => Model2Show(true);

  const handleModel3Close = () => Model3Show(false);
  const handleModel3Show = () => Model3Show(true);

  const handleModel4Close = () => Model4Show(false);
  const handleModel4Show = () => Model4Show(true);

  const handleChange = (val, field, propName) => {

    const value = val.target.value

    switch (field) {
      case "name": {setfName(value); break};
      case "phone": {setPhone(value); break};
      case "email": {setEmail(value); break};
      case "overview": {setOverview(value); break};
    }

    switch (field) {
      case "major": {setMajor(changeAtIndex(educationIndex, major, value)); break};
      case "sname": {setsName(changeAtIndex(educationIndex, sname, value)); break};
      case "slocation": {setsLocation(changeAtIndex(educationIndex, slocation, value)); break};
      case "schoolStartDate": {setSchoolStartDate(changeAtIndex(educationIndex, schoolStartDate, value)); break};
      case "schoolEndDate": {setSchoolEndDate(changeAtIndex(educationIndex, schoolEndDate, value)); break};

      case "company": {setCompany(changeAtIndex(experienceIndex, company, value)); break};
      case "clocation": {setClocation(changeAtIndex(experienceIndex, clocation, value)); break};
      case "role": {setRole(changeAtIndex(experienceIndex, role, value)); break};
      case "jobStartDate": {setJobStartDate(changeAtIndex(experienceIndex, jobStartDate, value)); break};
      case "jobEndDate": {setJobEndDate(changeAtIndex(experienceIndex, jobEndDate, value)); break};
      case "jobDec": {setJobDec(changeAtIndex(experienceIndex, jobDec, value)); break};
      case "skills": {setSkills(changeAtIndex(skillIndex, skills, value, propName)); break};
      case "interests": {setInterests(value); break};
    }
  }

  const changeAtIndex = (i, arr, val, propName) => {
      if(propName) {
        let newArr = arr
        let obj = arr[i]
        obj[propName] = val
        newArr[i] = obj
        setRefresh(!refresh)
        console.log(val, newArr)
        return newArr
      }
      let newArr = arr
      newArr[i] = val
      setRefresh(!refresh)
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
              <Button style={{margin: "0 auto", display: "block"}} className="mt-3 shadow" variant="success" onClick={handleModel1Show}>
                Use this Template!
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
                      { educationIndex <= 3 && 
                        <Button size="sm" variant="success" onClick={() => {setEducationIndex(educationIndex+1)}}>
                          + Add education background
                        </Button>
                      }
                    </Col>
                    <Col>
                      {
                        (educationIndex >= 1) && 
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
                  <Button variant="primary" onClick={() => {handleModel2Close(); handleModel3Show()}}>
                    Next
                  </Button>
                </Modal.Footer>
              </Modal>
              {/**
               * third Model for collecting experience information!
               */}
              <Modal show={Model3} onHide={handleModel3Close} animation={true}>
                <Modal.Header closeButton>
                  <Modal.Title>Experience:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Company Name:</Form.Label>
                    <Form.Control value={company[experienceIndex]} onChange={(e) => handleChange(e, "company")} type="text" placeholder="Oxford University" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Company location:</Form.Label>
                    <Form.Control value={clocation[experienceIndex]} onChange={(e) => handleChange(e, "clocation")} type="text" placeholder="San Fr, CA" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Row>
                      <Col>
                        <Form.Label>Start Date:</Form.Label>
                        <Form.Control value={jobStartDate[experienceIndex]} onChange={(e) => handleChange(e, "jobStartDate")} type="text" placeholder="ex: 2012" />
                      </Col>
                      <Col>
                        <Form.Label>End date:</Form.Label>
                        <Form.Control value={jobEndDate[experienceIndex]} onChange={(e) => handleChange(e, "jobEndDate")} type="text" placeholder="ex: 2016" />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Job Title:</Form.Label>
                  <Form.Control value={role[experienceIndex]} onChange={(e) => handleChange(e, "role")} type="text" placeholder="ex: Computer science" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Job Description:</Form.Label>
                    <Form.Control value={jobDec[experienceIndex]} onChange={(e) => handleChange(e, "jobDec")} as="textarea" rows={3} />
                    <Form.Text className="text-muted">
                      Describe your responsibilies and duties.
                    </Form.Text>
                  </Form.Group>
                  <Row>
                    <Col>
                      {experienceIndex <= 3 && 
                        <Button size="sm" variant="success" onClick={() => {setExperienceIndex(experienceIndex+1)}}>
                          + Add experience background
                        </Button>} 
                    </Col>
                    <Col>
                      {
                        (experienceIndex >= 1) && 
                        <Button size="sm" variant="secondary" onClick={() => {setExperienceIndex(experienceIndex-1)}}>
                          Previous experience background
                        </Button>
                      }
                    </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => {handleModel3Close(); handleModel2Show()}}>
                    Back
                  </Button>
                  <Button variant="primary" onClick={() => {handleModel3Close(); handleModel4Show()}}>
                    Next
                  </Button>
                </Modal.Footer>
              </Modal>
              {/** 
               * fourth Model for collecting skills information!
               */}
              <Modal show={Model4} onHide={handleModel4Close} animation={true}>
                <Modal.Header closeButton>
                  <Modal.Title>Skills & Interests:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Skill Name:</Form.Label>
                    <Form.Control value={skills[skillIndex].name} onChange={(e) => handleChange(e, "skills", "name")} type="text" placeholder="San Fr, CA" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Level of proficiency:</Form.Label>
                    <Form.Select defaultValue={"1"} onChange={(e) => handleChange(e, "skills", "score")} aria-label="Default select example">
                      <option>-- Select one --</option>
                      <option selected={skills[skillIndex].score === 1} value="1">Novice</option>
                      <option selected={skills[skillIndex].score === 2} value="2">Beginner</option>
                      <option selected={skills[skillIndex].score === 3} value="3">Competent</option>
                      <option selected={skills[skillIndex].score === 4} value="4">Proficient</option>
                      <option selected={skills[skillIndex].score === 5} value="5">Expert</option>
                    </Form.Select>
                  </Form.Group>
                  <Row>
                    <Col>
                      {skillIndex <= 3 &&
                      <Button size="sm" variant="success" onClick={() => {setSkills([...skills, {}]); setSkillIndex(skillIndex+1)}}>
                        + Next skill
                      </Button>}
                    </Col>
                    <Col>
                      {(skillIndex >= 1 && skills[1].name !== "") && 
                      <Button size="sm" variant="secondary" onClick={() => {setSkillIndex(skillIndex-1)}}>
                        Previous skill background
                      </Button>}                        
                    </Col>
                  </Row>
                  <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Interests:</Form.Label>
                    <Form.Control value={interests} onChange={(e) => handleChange(e, "interests")} as="textarea" rows={3} placeholder="Ex: Football, programming." />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => {handleModel4Close(); handleModel3Show()}}>
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
              company={company}
              clocation={clocation}
              role={role}
              jobStartDate={jobStartDate}
              jobEndDate={jobEndDate}
              jobDec={clocation}
              skills={skills}
              interests={interests}
            />
        </Container>
    </>
    );
}

export default App;
