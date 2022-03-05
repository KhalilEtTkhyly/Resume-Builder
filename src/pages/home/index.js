import React, { useEffect } from 'react';
import { Carousel, Button, Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Header from '../../sections/header'
import Footer from '../../sections/footer'
import image1 from '../../assets/images/resume_1.jpg'
import image2 from '../../assets/images/resume_2.jpg'
import { Link } from "react-router-dom";

import './home.css';

function App() {

  useEffect(() => {
  });

  return (
    <>
      <Header />
      {/** 
       * Carousel
      */}
      <Carousel style={{minHeight: "550px", background: "#6b705c"}}>
        <Carousel.Item className='slide1'>
          <Carousel.Caption className='slideCaption'>
            <h3 className='h2' style={{color: "white"}}>Few minutes and your resume's ready!</h3>
            <Link to="/collection">
              <Button variant="light" size="lg" className='mt-3 animate__animated animate__headShake animate__infinite animate__slow'>
                Browser Templates <i className="bi bi-arrow-right"></i>
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='slide1'>
          <Carousel.Caption className='slideCaption'>
            <h3 className='h2' style={{color: "white"}}>Few minutes and your resume's ready!</h3>
            <Link to="/resumes">
              <Button variant="light" size="lg" className='mt-3 animate__animated animate__headShake animate__infinite animate__slow'>
                Browser Templates <i className="bi bi-arrow-right"></i>
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/** 
       * Features
      */}
      <Container className='my-5'>
        <h1 className='h3 my-5 text-center'>Resumes made easy!</h1>
        <Row>
          <Col>
            <h3 className='h4 feature-text'>
              Hot and new templates are coming!
            </h3>
          </Col>
          <Col>
            <div className='circle mb-3'><i className="bi bi-cash"></i></div>
            <h3 className='h5'>Free of charge</h3>
          </Col>
          <Col>
            <div className='circle mb-3'><i className="bi bi-person-x"></i></div>
            <h3 className='h5'>No account needed</h3>
          </Col>
          <Col>
            <div className='circle mb-3'><i className="bi bi-stack"></i></div>
            <h3 className='h5'>multi templates</h3>
          </Col>
        </Row>
      </Container>
      <Container className='my-5'>
        <h1 className='h3 my-5 text-center'>Templates</h1>
        <Row>
          <Col className='text-center'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Link to="/template/1"><Button  className='mt-3'  style={{background: '#fb8500', border: 0}} variant="primary">Use this!</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className='text-center'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Link to="/template/2"><Button className='mt-3' style={{background: '#fb8500', border: 0}} variant="primary">Use this!</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <div className='py-2'></div>
      <Footer />
    </>
    );
}

export default App;
