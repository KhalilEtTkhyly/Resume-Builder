import React, { createRef, useEffect, useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Header from '../../sections/header'
import image from '../../assets/images/resume_1.jpg'

function App() {
  
  useEffect(() => {
  });

  return (
    <>
      <Header />
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
    </>
    );
}

export default App;
