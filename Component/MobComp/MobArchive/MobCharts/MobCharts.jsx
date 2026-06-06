import { Col, Container, Row, Card, Modal } from "react-bootstrap";
import Styles from "./mobcharts.module.css";
import Image from "next/image";
import { useState } from "react";
const Charts = ({ data }) => {
  const [show, setShow] = useState(false);
  const [imgLink, setImgLink] = useState();
  const imageLink = (e) => {
    setImgLink(e);
  };
  const Design = (
    <>
      <Container fluid className="mt-5 p-0">
        <Row>
          <Col>
            <h2 className={Styles.header}>Charts</h2>
          </Col>
        </Row>

        <Row>
          <Col md={12} xs={12} sm={12} className="d-flex">
            <Card
              className={Styles.card}
              onClick={() => {
                setShow(true);
                imageLink(
                  data[0] && data[0].range[0] && data[0].range[0].img_1
                );
              }}
            >
              <Card.Body>
                <Card.Subtitle className={Styles.subtitle}>
                  TECHNICAL CHART
                </Card.Subtitle>

                <img
                  src={data[0] && data[0].range[0] && data[0].range[0].img_1}
                  width="100%"
                  height="137px"
                />
              </Card.Body>
            </Card>
          </Col>

          <Col md={12} xs={12} sm={12} className="d-flex">
            <Card
              className={Styles.card}
              onClick={() => {
                setShow(true);
                imageLink(
                  data[1] && data[1].range[1] && data[1].range[1].img_1
                );
              }}
            >
              <Card.Body>
                <Card.Subtitle className={Styles.subtitle}>
                  TECHNICAL CHART
                </Card.Subtitle>

                <img
                  src={data[1] && data[1].range[1] && data[1].range[1].img_1}
                  width="100%"
                  height="137px"
                />
              </Card.Body>
            </Card>
          </Col>

          <Col md={12} xs={12} sm={12} className="d-flex">
            <Card
              className={Styles.card}
              onClick={() => {
                setShow(true);
                imageLink(
                  data[2] && data[2].range[2] && data[2].range[2].img_1
                );
              }}
            >
              <Card.Body>
                <Card.Subtitle className={Styles.subtitle}>
                  TECHNICAL CHART
                </Card.Subtitle>

                <img
                  src={data[2] && data[2].range[2] && data[2].range[2].img_1}
                  width="100%"
                  height="137px"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Start Open Modal to show Graph in Large Size */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ margin: "0 16%" }}>
            <span>TECHNICAL CHART</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={imgLink} width={1100} height={500} />
        </Modal.Body>
      </Modal>
      {/* Start Open Modal to show Graph in Large Size */}
    </>
  );
  return Design;
};

export default Charts;
