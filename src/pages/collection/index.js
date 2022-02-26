import React, { useEffect } from 'react';
import { Carousel, Button, Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Header from '../../sections/header'
import image1 from '../../assets/images/resume_1.jpg'
import image2 from '../../assets/images/resume_2.jpg'
import { Link } from "react-router-dom";

import './collection.css';

function Collection() {

  useEffect(() => {
  });

  return (
    <>
      <Header />
      {/** 
       * Features
      */}
      <Container>
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
    </>
    );
}

export default Collection;
