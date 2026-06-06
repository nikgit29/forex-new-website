import { Container, Row, Col, Card, Form, Table } from "react-bootstrap";
import Styles from "./mobweekly.module.css";
import Charts from "../MobCharts/MobCharts";
import { useState, useEffect } from "react";
import useAxios from "../../../Hooks/useAxios";
import axios from "axios";

const MobWeekly = () => {
  const [archive, setArchive] = useState([]);
  const WeeklyForecastData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/get-3-weekly-archives.php",
      });
      setArchive(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    WeeklyForecastData();
  }, []);

  const RateTable = ({ data }) => {
    const upperCase = data.name.toUpperCase();
    const currencyFormated = upperCase.replace("_", "/");

    const design = (
      <>
        <tr>
          <td
            style={{
              color: "#77b4ff",
              padding: "0",
              fontSize: "12px",
              fontWeight: "500",
              width: "30%",
            }}
          >
            {currencyFormated}
          </td>
          <td
            style={{
              padding: "0",
              fontSize: "12px",
              fontWeight: "500",
              width: "40%",
            }}
          >
            {data.forex_range}
          </td>
          <td
            style={{
              padding: "0",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            {data.forex_range_archive}
          </td>
        </tr>
      </>
    );
    return design;
  };
  const Design = (
    <>
      {/* start Scroll Down Coding */}
      <Container fluid>
        <Row>
          <Col>
            <div style={{ cursor: "pointer", color: "hwb(212deg 58% 10%)" }}>
              <h6 className="d-flex justify-content-center mt-4">
                <span>Scroll down</span>
              </h6>

              <span className="d-flex justify-content-center">
                <i class="fa fa-caret-down" aria-hidden="true"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      {/* End Scroll Down coding */}

      <Container>
        <Row>
          <Col>
            <h1 className={Styles.header}>Weekly achievement</h1>
          </Col>
        </Row>

        <Row>
          {archive.map((items) => {
            return (
              <>
                <Col md={12}>
                  <Card
                    className="mb-2"
                    style={{
                      borderRadius: "23px",
                      width: "100%",
                      boxShadow: "1px 1px 14px 0px rgb(123 182 255 / 46%)",
                      marginRight: "30px",
                    }}
                  >
                    <span
                      className="d-flex justify-content-center mt-2"
                      style={{ color: "#b2b1b1", fontSize: "12px" }}
                    >
                      {items.date}
                    </span>

                    <Card.Body className="p-0">
                      <Container fluid className="pb-3">
                        <Row className={Styles.heading}>
                          <Col>
                            <span style={{ marginLeft: "6px" }}>CURRENCY</span>
                          </Col>
                          <Col>
                            <span style={{ marginLeft: "-24px" }}>
                              FORECAST RANGE
                            </span>
                          </Col>
                          <Col>
                            <span style={{ marginLeft: "-24px" }}>
                              ACHIEVED RANGE
                            </span>
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <div
                              className={Styles.cardbody}
                              style={{
                                overflowY: "scroll",
                                marginLeft: "10px",
                                height: "50px",
                                marginTop: "5px",
                              }}
                            >
                              <Table>
                                <tbody>
                                  {items &&
                                    items.range.map((items) => {
                                      return (
                                        <RateTable data={items} id={items.id} />
                                      );
                                    })}
                                </tbody>
                              </Table>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}

          <Col md={12}>
            <Charts data={archive} />
          </Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default MobWeekly;
