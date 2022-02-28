import React, { createRef, useEffect, useState } from 'react';
import Header from '../../sections/header'
import Footer from '../../sections/footer'
// import Main from '../../sections/main'
import {default as TemplatePlaceHolder1} from "../../templates/1";
import {default as TemplatePlaceHolder2} from "../../templates/2";
import { toPng } from 'html-to-image';
import {Container, Row, Col, Button, Modal, Form} from 'react-bootstrap'
import { useParams } from "react-router-dom";
// import css
import './template.css';
function Template() {
  const ref = createRef()
  const {id} = useParams()
  /** Model variables */
  const [Model1, Model1Show] = useState(false);
  const [Model2, Model2Show] = useState(false);
  const [Model3, Model3Show] = useState(false);
  const [Model4, Model4Show] = useState(false);
  const [educationIndex, setEducationIndex] = useState(0);
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [skillIndex, setSkillIndex] = useState(0);
  
  /** personal info variables */  
  const [fname, setfName] = useState(localStorage.getItem("fname") ? localStorage.getItem("fname") : "");
  const [phone, setPhone] = useState(localStorage.getItem("phone") ? localStorage.getItem("phone") : "");
  const [email, setEmail] = useState(localStorage.getItem("email") ? localStorage.getItem("email") : "");
  const [overview, setOverview] = useState(localStorage.getItem("overview") ? localStorage.getItem("overview") : "");
  const [profileImage, setProfileImage] = useState("https://i.pravatar.cc/300");
  
  /** education variables */  
  const [major, setMajor] = useState(localStorage.getItem("major") ? JSON.parse(localStorage.getItem("major")) : ["Computer Science", "", "", ""]);
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
  const [skills, setSkills] = useState([
    {name: "PHP", score: 1},
    {name: "", score: 1},
    {name: "", score: 1},
    {name: "", score: 1},
    {name: "", score: 1},
    {name: "", score: 1},
    {name: "", score: 1},
    {name: "", score: 1},
    {name: "", score: 1},
    {name: "", score: 1},
  ])

  const [interests, setInterests] = useState("java, PHP");

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
      case "name": {
        localStorage.setItem("fname", value)
        setfName(value); break};
      case "phone": {
        localStorage.setItem("phone", value)
        setPhone(value); break};
      case "email": {
        localStorage.setItem("email", value)
        setEmail(value); break};
      case "overview": {
        localStorage.setItem("overview", value)
        setOverview(value); break};
    }

    switch (field) {
      case "major": {
        localStorage.setItem("major", JSON.stringify(changeAtIndex(educationIndex, major, value)))
        setMajor(changeAtIndex(educationIndex, major, value)); 
      break};
      case "sname": {
        localStorage.setItem("sname", JSON.stringify(changeAtIndex(educationIndex, sname, value)))
        setsName(changeAtIndex(educationIndex, sname, value)); 
      break};
      case "slocation": {
        localStorage.setItem("slocation", JSON.stringify(changeAtIndex(educationIndex, slocation, value)))
        setsLocation(changeAtIndex(educationIndex, slocation, value)); 
      break};
      case "schoolStartDate": {
        localStorage.setItem("schoolStartDate", JSON.stringify(changeAtIndex(educationIndex, schoolStartDate, value)))
        setSchoolStartDate(changeAtIndex(educationIndex, schoolStartDate, value));
      break};
      case "schoolEndDate": {
        localStorage.setItem("schoolEndDate", JSON.stringify(changeAtIndex(educationIndex, schoolEndDate, value)))
        setSchoolEndDate(changeAtIndex(educationIndex, schoolEndDate, value));
      break};

      case "company": {
        localStorage.setItem("company", JSON.stringify(changeAtIndex(educationIndex, company, value)))
        setCompany(changeAtIndex(experienceIndex, company, value));
      break};
      case "clocation": {
        localStorage.setItem("clocation", JSON.stringify(changeAtIndex(educationIndex, clocation, value)))
        setClocation(changeAtIndex(experienceIndex, clocation, value));
      break};
      case "role": {
        localStorage.setItem("role", JSON.stringify(changeAtIndex(educationIndex, role, value)))
        setRole(changeAtIndex(experienceIndex, role, value));
      break};
      case "jobStartDate": {
        localStorage.setItem("jobStartDate", JSON.stringify(changeAtIndex(educationIndex, jobStartDate, value)))
        setJobStartDate(changeAtIndex(experienceIndex, jobStartDate, value));
      break};
      case "jobEndDate": {
        localStorage.setItem("jobEndDate", JSON.stringify(changeAtIndex(educationIndex, jobEndDate, value)))
        setJobEndDate(changeAtIndex(experienceIndex, jobEndDate, value));
      break};
      case "jobDec": {
        localStorage.setItem("jobDec", JSON.stringify(changeAtIndex(educationIndex, jobDec, value)))
        setJobDec(changeAtIndex(experienceIndex, jobDec, value));
      break};
      case "skills": {
        localStorage.setItem("skills", JSON.stringify(changeAtIndex(educationIndex, skills, value)))
        setSkills(changeAtIndex(skillIndex, skills, value, propName));
      break};
      case "interests": {
        localStorage.setItem("interests", value)
        setInterests(value);
      break};
    }
  }

  const handleImageChange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = function() {
      setProfileImage(reader.result)
    }
  }

  const changeAtIndex = (i, arr, val, propName) => {
      if(propName) {
        let newArr = arr
        let obj = arr[i]
        obj[propName] = val
        newArr[i] = obj
        setRefresh(!refresh)
        return newArr
      }
      let newArr = arr
      newArr[i] = val
      setRefresh(!refresh)
      return newArr
  }

  const downloadCV = () => {
    toPng(ref.current, { cacheBust: true})
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = fname.replace(/\s/g, '-') + '-resume.png'
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
        <div className='template py-4'>

          <Container>
              {/* <h1 ref={ref}>heello</h1> */}
              <>
                <header style={{textAlign: 'center'}}>
                  <Button size="lg" className="mb-4" variant="success" onClick={handleModel1Show}>
                    Start Editing <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button variant="danger" size="lg" className="mb-4" onClick={downloadCV}>
                    Download <i className="bi bi-cloud-arrow-down-fill"></i>
                  </Button>
                </header>
                {/** 
                 * first Model for collecting personal information!
                 */}
                <Modal show={Model1} onHide={handleModel1Close} animation={true}>
                  <Modal.Header closeButton>
                    <Modal.Title>Personal Information:</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name:</Form.Label>
                      <Form.Control value={fname} onChange={(e) => handleChange(e, "name")} type="text" placeholder="Full Name" />
                    </Form.Group>
                    {id == 2 &&
                    <Form.Group className="mb-3">
                      <Form.Label>Upload a picture</Form.Label>
                      <p><input type="file" onChange={handleImageChange}/></p>
                    </Form.Group>}
                    <Form.Group className="mb-3">
                      <Form.Label>Phone #:</Form.Label>
                      <Form.Control value={phone} onChange={(e) => handleChange(e, "phone")} type="text" placeholder="Phone #" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address:</Form.Label>
                      <Form.Control value={email} onChange={(e) => handleChange(e, "email")} type="text" placeholder="Email Address" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Overview about yourself:</Form.Label>
                      <Form.Control value={overview} onChange={(e) => handleChange(e, "overview")} as="textarea" rows={3} />
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
                    <Form.Group className="mb-3">
                      <Form.Label>School Name:</Form.Label>
                      <Form.Control value={sname[educationIndex]} onChange={(e) => handleChange(e, "sname")} type="text" placeholder="Oxford University" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>School location:</Form.Label>
                      <Form.Control value={slocation[educationIndex]} onChange={(e) => handleChange(e, "slocation")} type="text" placeholder="San Fr, CA" />
                    </Form.Group>
                    <Form.Group className="mb-3">
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
                    <Form.Group className="mb-3">
                      <Form.Label>Major:</Form.Label>
                    <Form.Control value={major[educationIndex]} onChange={(e) => handleChange(e, "major")} type="text" placeholder="ex: Computer science" />
                    </Form.Group>
                    <Row>
                      <Col>
                        { educationIndex <= 2 && 
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
                    <Form.Group className="mb-3">
                      <Form.Label>Company Name:</Form.Label>
                      <Form.Control value={company[experienceIndex]} onChange={(e) => handleChange(e, "company")} type="text" placeholder="Oxford University" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Company location:</Form.Label>
                      <Form.Control value={clocation[experienceIndex]} onChange={(e) => handleChange(e, "clocation")} type="text" placeholder="San Fr, CA" />
                    </Form.Group>
                    <Form.Group className="mb-3">
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
                    <Form.Group className="mb-3">
                      <Form.Label>Job Title:</Form.Label>
                    <Form.Control value={role[experienceIndex]} onChange={(e) => handleChange(e, "role")} type="text" placeholder="ex: Computer science" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Job Description:</Form.Label>
                      <Form.Control value={jobDec[experienceIndex]} onChange={(e) => handleChange(e, "jobDec")} as="textarea" rows={3} />
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
                    <Form.Group className="mb-3">
                      <Form.Label>Skill Name:</Form.Label>
                      <Form.Control value={skills[skillIndex].name} onChange={(e) => handleChange(e, "skills", "name")} type="text" placeholder="San Fr, CA" />
                    </Form.Group>
                    <Form.Group className="mb-3">
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
                        {skillIndex <= 10 &&
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
                    <Form.Group className="mt-3 mb-3">
                      <Form.Label>Interests:</Form.Label>
                      <Form.Control value={interests} onChange={(e) => handleChange(e, "interests")} as="textarea" rows={3} placeholder="Ex: Football, programming." />
                      <Form.Text className="text-muted">
                        Please use colon "," to separate your personal interests.
                      </Form.Text>    
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => {handleModel4Close(); handleModel3Show()}}>
                      Back
                    </Button>
                    <Button variant="primary" className='animate__animated animate__headShake animate__infinite' onClick={downloadCV}>
                      Download
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
              {id == "1" &&
              <TemplatePlaceHolder1
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
              />}
              {id == "2" &&
              <TemplatePlaceHolder2
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
                profileImage={profileImage}
              />}
              
          </Container>
        </div>
        <Footer />
    </>
    );
}

export default Template;
