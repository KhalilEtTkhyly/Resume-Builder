import React, { createRef, useEffect, useState } from 'react';
import Header from '../../sections/header'
import Footer from '../../sections/footer'
// import Main from '../../sections/main'
import {default as TemplatePlaceHolder1} from "../../templates/1";
import {default as TemplatePlaceHolder2} from "../../templates/2";
import { toPng } from 'html-to-image';
import { jsPDF } from "jspdf";
import {Container, Row, Col, Button, Modal, Form, Dropdown} from 'react-bootstrap'
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
  const [fname, setfName] = useState(localStorage.getItem("fname") ? localStorage.getItem("fname") : "Your name!");
  const [phone, setPhone] = useState(localStorage.getItem("phone") ? localStorage.getItem("phone") : "012-345-6789");
  const [email, setEmail] = useState(localStorage.getItem("email") ? localStorage.getItem("email") : "myemail@mail.com");
  const [overview, setOverview] = useState(localStorage.getItem("overview") ? localStorage.getItem("overview") : "");
  const [profileImage, setProfileImage] = useState("https://i.pravatar.cc/300");
  
  /** education variables */  
  const [major, setMajor] = useState(localStorage.getItem("major") ? JSON.parse(localStorage.getItem("major")) : ["Computer Science", "", "", ""]);
  const [sname, setsName] = useState(localStorage.getItem("sname") ? JSON.parse(localStorage.getItem("sname")) : ["Sample Institute of technology", "", "", ""]);
  const [slocation, setsLocation] = useState(localStorage.getItem("slocation") ? JSON.parse(localStorage.getItem("slocation")) :["Rabat, Morocco", "", "", ""]);
  const [schoolStartDate, setSchoolStartDate] = useState(localStorage.getItem("schoolStartDate") ? JSON.parse(localStorage.getItem("schoolStartDate")) :["August 2012", "", "", ""]);
  const [schoolEndDate, setSchoolEndDate] = useState(localStorage.getItem("schoolEndDate") ? JSON.parse(localStorage.getItem("schoolEndDate")) :["May 2015", "", "", ""]);
  const [refresh, setRefresh] = useState(true)

  /** experience variables */
  const [company, setCompany] = useState(localStorage.getItem("company") ? JSON.parse(localStorage.getItem("company")) :["Facebook","","",""]);
  const [clocation, setClocation] = useState(localStorage.getItem("clocation") ? JSON.parse(localStorage.getItem("clocation")) :["Los Angelas, CA","","",""]);
  const [role, setRole] = useState(localStorage.getItem("role") ? JSON.parse(localStorage.getItem("role")) :["Font-End Engineer","","",""]);
  const [jobStartDate, setJobStartDate] = useState(localStorage.getItem("jobStartDate") ? JSON.parse(localStorage.getItem("jobStartDate")) :["August 2012","","",""]);
  const [jobEndDate, setJobEndDate] = useState(localStorage.getItem("jobEndDate") ? JSON.parse(localStorage.getItem("jobEndDate")) :["May 2015","","",""]);
  const [jobDec, setJobDec] = useState(localStorage.getItem("jobDec") ? JSON.parse(localStorage.getItem("jobDec")) :["May 2015","","",""]);

  /** skills & interests variables */
  const skillArr = [
    {name: "HTML", score: 5},
    {name: "PHP", score: 4},
    {name: "CSS", score: 4},
    {name: "JAVA", score: 4},
    {name: "", score: 1},
    {name: "", score: 1},
    {name: "", score: 1},
    {name: "", score: 1},
    {name: "", score: 1},
    {name: "", score: 1},
  ]

  const [skills, setSkills] = useState(localStorage.getItem("skills") ? JSON.parse(localStorage.getItem("skills")) : skillArr);

  const [interests, setInterests] = useState(localStorage.getItem("interests") ? localStorage.getItem("interests") : "PHP, Java");

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
        localStorage.setItem("company", JSON.stringify(changeAtIndex(experienceIndex, company, value)))
        setCompany(changeAtIndex(experienceIndex, company, value));
      break};
      case "clocation": {
        localStorage.setItem("clocation", JSON.stringify(changeAtIndex(experienceIndex, clocation, value)))
        setClocation(changeAtIndex(experienceIndex, clocation, value));
      break};
      case "role": {
        localStorage.setItem("role", JSON.stringify(changeAtIndex(experienceIndex, role, value)))
        setRole(changeAtIndex(experienceIndex, role, value));
      break};
      case "jobStartDate": {
        localStorage.setItem("jobStartDate", JSON.stringify(changeAtIndex(experienceIndex, jobStartDate, value)))
        setJobStartDate(changeAtIndex(experienceIndex, jobStartDate, value));
      break};
      case "jobEndDate": {
        localStorage.setItem("jobEndDate", JSON.stringify(changeAtIndex(experienceIndex, jobEndDate, value)))
        setJobEndDate(changeAtIndex(experienceIndex, jobEndDate, value));
      break};
      case "jobDec": {
        localStorage.setItem("jobDec", JSON.stringify(changeAtIndex(experienceIndex, jobDec, value)))
        setJobDec(changeAtIndex(experienceIndex, jobDec, value));
      break};
      case "skills": {
        localStorage.setItem("skills", JSON.stringify(changeAtIndex(skillIndex, skills, value, propName)))
        setSkills(changeAtIndex(skillIndex, skills, value, propName));
      break};
      case "interests": {
        localStorage.setItem("interests", value)
        setInterests(value);
      break};
    }
  }

  const clearAll = () => {
    localStorage.clear()
    // reset state
    setfName("")
    setPhone("")
    setEmail("")
    setMajor([""])
    setsName([""])
    setSchoolStartDate([""])
    setSchoolEndDate([""])
    setsLocation([""])
    setCompany([""])
    setClocation([""])
    setRole([""])
    setJobStartDate([""])
    setJobEndDate([""])
    setJobDec([""])
    setSkills([""])
    setInterests("")
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
  
  const downloadCV = (format) => {
    toPng(ref.current, { cacheBust: true})
    .then((dataUrl) => {
        if (format == "pdf") {
          const doc = new jsPDF({orientation: "p", unit: "px", format: "a1"});
          const img = new Image()
          img.src = dataUrl
          img.onload = () => {
            doc.addImage(dataUrl, "PNG",0, 0, img.width, img.height);
            doc.save()
          }
        } else {
          const link = document.createElement('a')
          link.download = fname.replace(/\s/g, '-') + '-resume.png'
          link.href = dataUrl
          link.click()
        }
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
                <header className='mb-4' style={{textAlign: 'center'}}>
                  <Button size="lg" variant="success" onClick={handleModel1Show}>
                    Start Editing <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Dropdown className='mx-2' style={{display: 'inline-block'}}>
                    <Dropdown.Toggle size="lg" variant="primary" id="dropdown-basic">
                      Download As <i className="bi bi-cloud-arrow-down-fill"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => downloadCV("pdf")} as="span">PDF</Dropdown.Item>
                      <Dropdown.Item onClick={() => downloadCV("png")} as="span">Image</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button variant="danger" size="lg" onClick={clearAll}>
                    Clear Data <i className="bi bi-trash"></i>
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
                      <Form.Control value={company[experienceIndex]} onChange={(e) => handleChange(e, "company")} type="text" placeholder="Facebook" />
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
                      <Form.Control value={skills[skillIndex].name} onChange={(e) => handleChange(e, "skills", "name")} type="text" placeholder="PHP" />
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
