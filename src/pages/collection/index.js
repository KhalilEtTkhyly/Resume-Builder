import React, { useEffect } from 'react';
import { Carousel, Button, Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Header from '../../sections/header'
import Footer from '../../sections/footer'
import image1 from '../../assets/images/resume_1.jpg'
import image2 from '../../assets/images/resume_2.jpg'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import './collection.css';

function Collection() {

  useEffect(() => {
  });

  const {filter} = useParams()
  // console.log(filter.includes("image"))
  const templates = [
    {url: "/template/1",thumbnail: image1,hasImg: false},
    {url: "/template/2",thumbnail: image2,hasImg: true}
  ]
  
  return (
    <>
      <Header />
      {/** 
       * Features
      */}
      <Container>
        <h1 className='h3 my-5 text-center'>Browse our Templates</h1>
        <Row>
          {
            templates.map((val, i) => {
            if (!filter) {
              return (
                <Col key={i} className='text-center'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={val.thumbnail} />
                    <Card.Body>
                      <Link to={val.url}><Button  className='mt-3'  style={{background: '#fb8500', border: 0}} variant="primary">Use this!</Button></Link>
                    </Card.Body>
                  </Card>
                </Col>
                )
            } else if (filter == "with-image" && val.hasImg) {
              return (
                <Col key={i} className='text-center'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={val.thumbnail} />
                    <Card.Body>
                      <Link to={val.url}><Button  className='mt-3'  style={{background: '#fb8500', border: 0}} variant="primary">Use this!</Button></Link>
                    </Card.Body>
                  </Card>
                </Col>
                )
            } else if (filter == "without-image" && !val.hasImg) {
                return (
                  <Col key={i} className='text-center'>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={val.thumbnail} />
                      <Card.Body>
                        <Link to={val.url}><Button  className='mt-3'  style={{background: '#fb8500', border: 0}} variant="primary">Use this!</Button></Link>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              }
            })
          }
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer />
    </>
    );
}

export default Collection;
