import { Container, Row, Col } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";
const MobLiveRateMain = () => {
  const Design = (
    <>
      <style jsx>{`
        .circle1 {
          width: 150px;
          height: 150px;
          background-color: #8ed4cc;
          border-radius: 50%;
          position: relative;
          margin-left: 90px;
        }

        .circle2 {
          width: 150px;
          height: 150px;
          background-color: #ffca0a;
          border-radius: 50%;
          position: relative;
          margin-left: 90px;
        }

        .circle3 {
          width: 150px;
          height: 150px;
          background-color: #f58948;
          border-radius: 50%;
          position: relative;
          margin-left: 90px;
        }

        .circle4 {
          width: 150px;
          height: 150px;
          background-color: #9064bf;
          border-radius: 50%;
          position: relative;
          margin-left: 90px;
        }
      `}</style>

      <div style={{ backgroundColor: "#f4f5f7", paddingTop: "50px" }}>
        <h1 className="text-center pt-5 mb-5">WE ARE KNOWN FOR</h1>
      </div>
      <Container className="mt-5 pb-5">
        <Row>
          <Col>
            <div className="text-center mb-4">
              <div className="circle1">
                <BsCheckCircle
                  style={{
                    fontSize: "70px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div className="mt-4 mb-3">
                <span style={{ fontWeight: "800" }}>95%+ Accuracy</span>
              </div>
              <span style={{ fontSize: "15px", fontWeight: "500" }}>
                ( We are leading in the field of Data Analysis )
              </span>
            </div>
          </Col>
          <Col>
            <div className="text-center mb-4">
              <div className="circle2">
                <BsCheckCircle
                  style={{
                    fontSize: "70px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div className="mt-4 mb-3">
                <span style={{ fontWeight: "800" }}>
                  Quality User Experience
                </span>
              </div>
              <span style={{ fontSize: "15px" }}>
                ( Award Winning UX Team )
              </span>
            </div>
          </Col>
          <Col>
            <div className="text-center mb-4">
              <div className="circle3">
                <BsCheckCircle
                  style={{
                    fontSize: "70px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div className="mt-4 mb-3">
                <span style={{ fontWeight: "800" }}>99% Live Rates</span>
              </div>
              <span style={{ fontSize: "15px" }}>
                ( Our apps & website reflects lag free conversion rates )
              </span>
            </div>
          </Col>
          <Col>
            <div className="text-center mb-4">
              <div className="circle4">
                <BsCheckCircle
                  style={{
                    fontSize: "70px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              <div className="mt-4 mb-3">
                <span style={{ fontWeight: "800" }}>500+ Client</span>
              </div>
              <div>
                <span style={{ fontSize: "15px" }}>
                  ( We successfully delivered results to 500+ Clients in 4 Years
                  )
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default MobLiveRateMain;
