import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import { BsCheck2 } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import Styles from "./tabpremium.module.css";
import axios from "axios";
import Link from "next/link";
import useAxios from "../../Hooks/useAxios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import GOLD_PLAN from "../../Redux/Action/goldplan.action";
import DIAMOND_PLAN from "../../Redux/Action/diamondplan.action";
import PLATINUM_PLAN from "../../Redux/Action/platinumplan.action";
import TitaniumCallback from "./TabTitaniumCalllback/TabTitaniumCallback";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

const MobPremium = () => {
  const [preData, setPreData] = useState([]);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const router = useRouter();

  // const demo = Object.keys(preData).length !== 0 ? preData : null;
  const PremiumData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/subscription-plans.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
      });
      setPreData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    PremiumData();
    if (cookies.get("fx_1994") == undefined) {
      router.push("/");
    }
  }, []);

  const Design = (
    <>
      <Container fluid className="p-0">
        <Row>
          <Col className="d-flex justify-content-center mt-5 mb-5">
            <div className={Styles.heading}>
              <h1>Choose your plan now</h1>
            </div>
          </Col>
        </Row>
        <Row>
          {/* Start Gold Plan */}
          <Col className="d-flex justify-content-center mb-5">
            <Card className={Styles.card}>
              <Card.Header
                className={Styles.cardhead}
                style={{
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                }}
              >
                {preData[3] == null ? "GOLD" : preData[3].plan_name}
              </Card.Header>
              <Card.Body>
                <Card.Title className={Styles.title}>
                  <div>
                    <FaRupeeSign
                      style={{
                        fontSize: "16px",
                        marginTop: "-3px",
                        color: "#064583",
                      }}
                    />
                    <span style={{ letterSpacing: "2px" }}>
                      {preData[3] == null ? "12000" : preData[3].plan_amount}
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#064583" }}>
                    {preData[3] == null ? "12000" : preData[3].plan_validity}
                  </div>
                </Card.Title>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Online advisory</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Notifications</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Whatsapp Assistance</div>
                  <div style={{ color: "#ff0000" }}>
                    <RiCloseLine />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Forward Booking</div>
                  <div style={{ color: "#ff0000" }}>
                    <RiCloseLine />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Weekly Projection</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Monthly Projection</div>
                  <div style={{ color: "#ff0000" }}>
                    <RiCloseLine />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>
                    Expert whenever you call
                  </div>
                  <div style={{ color: "#ff0000" }}>
                    <RiCloseLine />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>
                    Android / IOS Assitance
                  </div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <Link href="/payments">
                  <Button
                    variant="primary"
                    className={Styles.btn}
                    onClick={() => dispatch(GOLD_PLAN())}
                  >
                    PAY NOW
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          {/* End Gold Plan */}
          {/* Start Diamond plan */}
          <Col className="d-flex justify-content-center mb-5">
            <Card className={Styles.card}>
              <Card.Header
                className={Styles.cardhead}
                style={{
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                }}
              >
                {preData[2] == null ? "DIAMOND" : preData[2].plan_name}
              </Card.Header>
              <Card.Body>
                <Card.Title className={Styles.title}>
                  <div>
                    <FaRupeeSign
                      style={{
                        fontSize: "16px",
                        marginTop: "-3px",
                        color: "#064583",
                      }}
                    />
                    <span style={{ letterSpacing: "2px" }}>
                      {preData[2] == null ? "45000" : preData[2].plan_amount}
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#064583" }}>
                    {preData[2] == null ? "45000" : preData[2].plan_validity}
                  </div>
                </Card.Title>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Online advisory</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Notifications</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Whatsapp Assistance</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Forward Booking</div>
                  <div style={{ color: "#ff0000" }}>
                    <RiCloseLine />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Weekly Projection</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Monthly Projection</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>
                    Expert whenever you call
                  </div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>
                    Android / IOS Assitance
                  </div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <Link href="/payments">
                  <Button
                    variant="primary"
                    className={Styles.btn}
                    onClick={() => dispatch(DIAMOND_PLAN())}
                  >
                    PAY NOW
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          {/* End Diamond Plan */}
          {/* Start Platinum plan */}
          <Col className="d-flex justify-content-center mb-3 mt-5">
            <Card className={Styles.card}>
              <Card.Header
                className={Styles.cardhead}
                style={{
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                }}
              >
                {preData[1] == null ? "PLATINUM" : preData[1].plan_name}
              </Card.Header>
              <Card.Body>
                <Card.Title className={Styles.title}>
                  <div>
                    <FaRupeeSign
                      style={{
                        fontSize: "16px",
                        marginTop: "-3px",
                        color: "#064583",
                      }}
                    />
                    <span style={{ letterSpacing: "2px" }}>
                      {preData[1] == null ? "75000" : preData[1].plan_amount}
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#064583" }}>
                    {preData[1] == null
                      ? "12 Months"
                      : preData[1].plan_validity}
                  </div>
                </Card.Title>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Online advisory</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Notifications</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Whatsapp Assistance</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Forward Booking</div>
                  <div style={{ color: "#ff0000" }}>
                    <RiCloseLine />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Weekly Projection</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Monthly Projection</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>
                    Expert whenever you call
                  </div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>
                    Android / IOS Assitance
                  </div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <Link href="/payments">
                  <Button
                    variant="primary"
                    className={Styles.btn}
                    onClick={() => dispatch(PLATINUM_PLAN())}
                  >
                    PAY NOW
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          {/* Start Platinum plan */}
          {/* Start Titanium plan */}
          <Col className="d-flex justify-content-center mb-3 mt-5">
            <Card className={Styles.card}>
              <Card.Header
                className={Styles.titaniumCard}
                style={{
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                }}
              >
                {preData[0] == null ? "TITANIUM" : preData[0].plan_name}
              </Card.Header>
              <Card.Body>
                <Card.Title className={Styles.title}>
                  <div>
                    <FaRupeeSign
                      style={{
                        fontSize: "16px",
                        marginTop: "-3px",
                        color: "#064583",
                      }}
                    />
                    <span style={{ letterSpacing: "2px" }}>
                      {preData[0] == null ? "120000" : preData[0].plan_amount}
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#064583" }}>
                    {preData[0] == null
                      ? "12 Months"
                      : preData[0].plan_validity}
                  </div>
                </Card.Title>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Online advisory</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Notifications</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Whatsapp Assistance</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Forward Booking</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Weekly Projection</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Monthly Projection</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "900",
                    fontSize: "16px",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>Quarterly Projections</div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "900",
                    fontSize: "16px",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>
                    Expert whenever you call
                  </div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ color: "#2364b5" }}>
                    Android / IOS Assitance
                  </div>
                  <div style={{ color: "#1bd058" }}>
                    <BsCheck2 />
                  </div>
                </div>

                <Link href="#">
                  <Button
                    variant="primary"
                    className={Styles.titaniumBtn}
                    onClick={() => setShow(true)}
                  >
                    CONTACT SALES
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          {/* End Titanium plan */}
        </Row>
      </Container>

      {/* Start Titanium Callback back Modal */}
      <Modal
        size="sm"
        show={show}
        animation={false}
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Header
          style={{
            padding: "0px",
            dispatch: "flex",
            justifyContent: "center",
            fontFamily: "Poppins",
          }}
        >
          <Modal.Title>
            <span style={{ fontSize: "12px", color: "#a3a2a2" }}>
              SALES ENQUIRY
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TitaniumCallback />
        </Modal.Body>
      </Modal>
      {/* Start Titanium Callback Modal */}
    </>
  );
  return Design;
};

export default MobPremium;
