import React, { createRef, useEffect, useState } from 'react';
import { Carousel, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../../sections/header'
import image from '../../assets/images/resume_1.jpg'
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
      <Carousel style={{minHeight: "500px", background: "#eee"}}>
        <Carousel.Item style={{minHeight: "500px", backgroundImage: "url("+image+")", backgroundRepeat: "no-repeat", backgroundPosition: "top"}}>
          <Carousel.Caption style={{background: "rgba(0,0,0, .4)"}}>
            <h3 style={{color: "white"}}>More Resume Templates are coming</h3>
            <Button variant="primary">
              Get Started Now!
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{minHeight: "500px", backgroundImage: "url("+image+")", backgroundRepeat: "no-repeat", backgroundPosition: "top"}}>
          <Carousel.Caption style={{background: "rgba(0,0,0, .4)"}}>
            <h3 style={{color: "white"}}>Browse Templates</h3>
            <Button variant="primary">
              Availble tempaltes
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/** 
       * Features
      */}
      <Container>
        <h1 className='h3 my-5 text-center'>Resumes made easy!</h1>
        <Row>
          <Col className='text-center'>
            <div className='circle mb-3'><i className="bi bi-cash"></i></div>
            <h3 className='h4'>Free of charge</h3>
            <p>some text here</p>
          </Col>
          <Col className='text-center'>
            <div className='circle mb-3'><i className="bi bi-person-x"></i></div>
            <h3 className='h4'>No account needed</h3>
            <p>some text here</p>
          </Col>
          <Col className='text-center'>
            <div className='circle mb-3'><i className="bi bi-stack"></i></div>
            <h3 className='h4'>multi templates</h3>
            <p>some text here</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className='h3 my-5 text-center'>Templates</h1>
        <Row>
          <Col className='text-center'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>John Deo</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Link to="/template"><Button variant="primary">Use this!</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
    );
}

export default App;
