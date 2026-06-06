import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from "react-lottie";
import animationData from "../../../lottie/meeting.json";
const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const Design = (
    <>
      <Container>
        <Row>
          <Col style={{ color: "#ffffff" }}>
            <h2 className="mt-5">About Us</h2>
            <p>
              ForexBlues is the world's first online forex advisory services
              given to the individuals, small, medium and large scale
              enterprises directly. It is a kind of platform capturing the tunes
              of forex market volatility of days high & low. We are first of its
              kind of unique service provider engaged in analyzing and
              forecasting most of the times exact trend lines of currency pairs
              like USD/INR & EURO/INR etc.
            </p>

            <p>
              At ForexBlues we are passionate about the market, the excitement,
              the story driving the market at times, the fundamentals and even
              the technical's. Our team of forex experts & analysts having vast
              experience in banking and investments gives their forecast of
              timing the forex every minute telling you the day's high or lows
              in the forex world.
            </p>
          </Col>
          <Col>
            <Lottie options={defaultOptions} height={500} width={500} />
          </Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};
export default About;
