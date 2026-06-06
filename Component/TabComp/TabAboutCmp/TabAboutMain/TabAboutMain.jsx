import { Container, Row, Col } from "react-bootstrap";
import Styles from "./tabmain.module.css";
import { CgQuote } from "react-icons/cg";
import { MdOutlineLocationOn } from "react-icons/md";
import Lottie from "react-lottie";
import animationData from "../../../../lottie/advice.json";
const MobAboutMain = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    speed: 1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const Design = (
    <>
      <Container fluid className={Styles.content}>
        {/* start Scroll Down Coding */}
        <Row>
          <Col>
            <div style={{ cursor: "pointer", color: "hwb(212deg 58% 10%)" }}>
              <a
                href="#section"
                style={{ textDecoration: "none", color: "hwb(212deg 58% 10%)" }}
              >
                <h6 className="d-flex justify-content-center mt-4">
                  <span>Scroll down</span>
                </h6>

                <span className="d-flex justify-content-center">
                  <i class="fa fa-caret-down" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </Col>
        </Row>
        {/* End Scroll Down coding */}

        {/* Start Why ForexBlues */}
        <Row className="mt-4" style={{ marginLeft: "15px" }} id="section">
          <Col sm={12}>
            <h2 className={Styles.forexblues}>Why ForexBlues</h2>

            <div className={Styles.forexbluesContent}>
              <p>
                Till date the smaller business fraternity, entrepreneurs,
                individuals and NRI clients did not have the treasury like
                facility and guidance given to them to save their hard earned
                money to safe guard themselves to foreign currency volatility
                and fluctuations.
              </p>

              <p>
                At ForexBlues we try our best to provide you this treasury like
                guidance facility and assure 80-90 times of helping you to earn,
                save money & live better by saving at least 20 paise to a rupee
                (Rs.1/-) per dollar transactions in a day or two while you make
                your remittances inward or outward. We hope these savings in
                foreign exchange will bring cheer and smile to the face of our
                clients and satisfaction to us proving our dedication towards
                the goal & services.
              </p>

              <p>
                ForexBlues continues to grow every day thanks to the confidence
                our clients have in us. We cover many industries such as
                financial, energy, business services, consumer products and many
                more to name.
              </p>
            </div>
          </Col>
        </Row>
        {/* Start Our Objective */}
        <Row>
          <Col className={Styles.objective}>
            <div className="d-flex justify-content-center mt-3">
              <h2 style={{ letterSpacing: "2px", color: "#72b1ff" }}>
                Our Objectives
              </h2>
            </div>
            <Row className="mt-3" style={{ marginLeft: "20%" }}>
              <Col md={4}>
                <div className="d-flex mb-3">
                  <span style={{ color: "#71b1ff" }}>1</span>
                  <div className={Styles.objectiveBox}>
                    <span>RISK MANAGEMENT</span>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <span style={{ color: "#71b1ff" }}>2</span>
                  <div className={Styles.objectiveBox}>
                    <span>FORWARD BOOKING</span>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <span style={{ color: "#71b1ff" }}>3</span>
                  <div className={Styles.objectiveBox}>
                    <span>FOREX EDUCATION</span>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="d-flex mb-3">
                  <span style={{ color: "#71b1ff" }}>4</span>
                  <div className={Styles.objectiveBox}>
                    <span>IMPLEMENTATION</span>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <span style={{ color: "#71b1ff" }}>5</span>
                  <div className={Styles.objectiveBox}>
                    <span>PROMOTE TRANSPARENCY</span>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <span style={{ color: "#71b1ff" }}>6</span>
                  <div className={Styles.objectiveBox}>
                    <span>SPREAD AWARENESS</span>
                  </div>
                </div>
              </Col>
            </Row>
            <div style={{ marginLeft: "20%" }}>
              <img src="/objective.png" width="70%" />
            </div>
          </Col>
          {/* Start Our Objective */}
        </Row>
        {/*  End Why ForexBlues */}
      </Container>

      {/* Start Forex advisory  */}
      <Container fluid>
        <Row style={{ marginLeft: "15px" }}>
          <Col md={12} sm={12} xs={12} className={Styles.advisory}>
            <h2 className="text-center">Forex Advisory</h2>

            <p>
              Forex is highly volatile market place. There is continuous
              fluctuation in forex on day by day basis. We as a forexblues have
              a dedicated, dynamic and expert team for Forex Advisory. Our Forex
              experts continuously monitor the technical and fundamental factors
              so that we maintain above 90 percent accuracy in forex advisory.
              Indian: Currency (INR) is our base currency. We have total 9 major
              pair of currencies USDINR, AEDINA, EURINR, SARINR, GBPINR, SGDINR,
              AUDINR, CADINR, JPYINR
            </p>
            <p>
              We have clients with different profile like Money Changer,
              Exporter-Importer from across India and NRIs from the globe. Our
              forex experts provide the advisory according to the client's
              requirements in different currencies.
            </p>
          </Col>
          <Col md={12} sm={12} xs={12}>
            <Lottie options={defaultOptions} height={300} width={300} />
          </Col>
        </Row>
      </Container>
      {/* Start Forex advisory  */}

      {/* <Container fluid className={Styles.content}>
        <Row style={{ marginLeft: "15px" }}>
          <Col className={Styles.testimonials}>
            <h2 className="text-center">Testimonials</h2>
          </Col>
        </Row>

        <Row style={{ marginLeft: "15px" }}>
          <Col className="mb-5" style={{ marginTop: "-50px" }}>
            <span style={{ fontSize: "50px" }}>
              <CgQuote />
            </span>
            <p>
              Daily and weekly future forecasting services has helped to know
              the right direction of different currencies, this kind of services
              was very much needed at such a nominal cost.
            </p>

            <div className="d-flex ">
              <div>
                <img
                  src="/Murli.jpg"
                  width="100px"
                  height="100px"
                  style={{
                    borderRadius: "25px",
                    padding: "5px",
                    boxShadow: "-2px 12px 32px -5px rgba(131,186,255,0.75)",
                  }}
                />
              </div>
              <div className="p-3">
                <h6>Brilliant money changer</h6>
                <span style={{ color: "#919191" }}>
                  Chennai
                  <MdOutlineLocationOn />
                </span>
              </div>
            </div>
          </Col>
          <Col className="mb-5" style={{ marginTop: "-50px" }}>
            <span style={{ fontSize: "50px" }}>
              <CgQuote />
            </span>
            <p>
              We are associated with forexblues since May 2017. Their forex
              analysts are superb. They always maintain around 80% - 90%
              accuracy. Their forecast helps our business immensely.
            </p>

            <div className="d-flex ">
              <div>
                <img
                  src="/Sukhmani.jpg"
                  width="100px"
                  height="100px"
                  style={{
                    borderRadius: "25px",
                    padding: "5px",
                    boxShadow: "-2px 12px 32px -5px rgba(131,186,255,0.75)",
                  }}
                />
              </div>
              <div className="p-3">
                <h6>Sukhmani Forex</h6>
                <span style={{ color: "#919191" }}>
                  Delhi
                  <MdOutlineLocationOn />
                </span>
              </div>
            </div>
          </Col>
          <Col style={{ marginTop: "-50px" }}>
            <span style={{ fontSize: "50px" }}>
              <CgQuote />
            </span>
            <p>
              Predictions given is really praise worthy. It has changed our
              views about forex movements. Their services is recommended to
              every one whosesoever is in currency business.
            </p>

            <div className="d-flex ">
              <div>
                <img
                  src="/Milan.jpg"
                  width="100px"
                  height="100px"
                  style={{
                    borderRadius: "25px",
                    padding: "5px",
                    boxShadow: "-2px 12px 32px -5px rgba(131,186,255,0.75)",
                  }}
                />
              </div>
              <div className="p-3">
                <h6>Milan Forex</h6>
                <span style={{ color: "#919191" }}>
                  Mumbai
                  <MdOutlineLocationOn />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container> */}
    </>
  );
  return Design;
};
export default MobAboutMain;
