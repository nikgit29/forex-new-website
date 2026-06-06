// pages/404.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from "react-lottie";
import animationData from "../lottie/404.json";
import Link from "next/link";
const NotFoundPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container>
      <style>
        {`
      
        @media (max-width: 767px) {
          .lottieDiv {
            width: 100%;
          }
        
          .lottieDiv {
            width: 100%; 
          }
        }
        
       
        @media (min-width: 992px) {
          .lottieDiv {
            width: 50%; 
          }
        
        `}
      </style>
      <Row className="justify-content-center align-items-center ">
        <Col className="d-flex justify-content-center">
          <div className="lottieDiv">
            <Lottie options={defaultOptions} height={500} width="100%" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h1>404 - Page Not Found</h1>
          <p>Oops! The page you are looking for does not exist.</p>
          <Link href="/">
            <button className="button mt-2">Home</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
