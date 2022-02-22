import React, { useCallback, createRef, useEffect } from 'react';
import Header from '../../sections/header'
import Main from '../../sections/main'
import {Container, Row,} from 'react-bootstrap'
import Template from "../../templates/1";
import { toPng } from 'html-to-image';


const ref = createRef()


function App() {

  useEffect(() => {
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
  });

  return (
    <>
        <Header />
        <Container>
            {/* <h1 ref={ref}>heello</h1> */}
            <Template reference={ref} />
        </Container>
    </>
    );
}

export default App;
