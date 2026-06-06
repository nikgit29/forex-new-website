import { Container, Row, Col, Card, Form, Table } from "react-bootstrap";
import Styles from "./tabarchive.module.css";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";
const MobArchive = () => {
  const [year, setYear] = useState("");
  const [days, setDays] = useState("");
  const [months, setMonths] = useState("");
  const [dateData, setDateData] = useState("");
  const [MomentDate, setMomentDate] = useState([]);
  const [monthFreez, setMonthFreez] = useState(true);
  const [dayFreez, setDayFreez] = useState(true);
  const Days = async (e) => {
    const day = e.target.value;
    const dates = `${months}/${day}/${year}`;

    try {
      const response = await axios({
        method: "POST",
        url: "/daily-range-archive-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
        data: {
          date: dates,
        },
      });
      setDateData(response.data[0]);
      setMomentDate(dates);
    } catch (err) {
      console.error(err);
    }
  };
  const d = new Date();
  let currentDate = d.toLocaleDateString();
  const formatedDate = moment(currentDate).format("L");
  const convertedDate = moment(MomentDate).format(" Do MMM  YYYY");

  // start get data onPage Load
  const OnLoad = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "/daily-range-archive-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
        data: {
          date: formatedDate,
        },
      });

      setDateData(response.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  // End get data onPage Load

  useEffect(() => {
    OnLoad();
  }, []);

  // Start Get days coding
  const setMonthGetDays = async (e) => {
    const month = e.target.value;
    setMonths(month);
    try {
      const response = await axios({
        method: "POST",
        url: "/get_day_year_wise.php?year=" + year + "&month=" + month,
      });
      setDays(response.data.day);
    } catch (err) {
      console.error(err);
    }
  };
  // End Get Days coding

  const daysList = [];
  for (var i = 1; i <= days; i++) {
    daysList.push(i);
  }

  const RateTable = ({ data }) => {
    const currency = data.currency.toUpperCase();
    const finalCurrency = currency.replace("_", "/");
    const design = (
      <>
        <tr>
          <td
            style={{
              color: "#77b4ff",
              padding: "0",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            {finalCurrency}
          </td>
          <td
            style={{
              padding: "0",
              fontSize: "12px",
              fontWeight: "500",
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
      <Container>
        <Row>
          <Col md={12} className={Styles.archive}>
            <h2 className="mb-4">Archive</h2>

            <span className={Styles.desc}>
              Choose desire date and <br />
              see what the forcasted and <br />
              achieved range were for that day
            </span>
          </Col>
          <Col>
            <h3 className={Styles.date}>{convertedDate}</h3>
            <Card
              className="mb-2"
              style={{
                borderRadius: "23px",
                width: "100%",
                boxShadow: "1px 1px 14px 0px rgb(123 182 255 / 46%)",
              }}
            >
              <span
                className="d-flex justify-content-center mt-2 mb-4"
                style={{ color: "#b2b1b1", fontSize: "16px" }}
              >
                DAILY
              </span>

              <Card.Body className="p-0">
                <Container fluid className="pb-3">
                  <Row>
                    {/* Start Year */}
                    <Col md={4} xs={4} sm={4}>
                      <Form.Select
                        aria-label="YEAR"
                        className={Styles.year}
                        onChange={(e) => {
                          setYear(e.target.value);
                          setMonthFreez(false);
                        }}
                      >
                        <option>YEAR</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                      </Form.Select>
                    </Col>
                    {/* End Year */}

                    {/* Start Month */}
                    <Col md={4} xs={4} sm={4}>
                      <Form.Select
                        aria-label="MONTH"
                        className={Styles.month}
                        onChange={(e) => {
                          setMonthGetDays(e);
                          setDayFreez(false);
                        }}
                        disabled={monthFreez}
                      >
                        <option>MONTH</option>
                        <option value="01">JAN</option>
                        <option value="02">FEB</option>
                        <option value="03">MAR</option>
                        <option value="04">APR</option>
                        <option value="05">MAY</option>
                        <option value="06">JUN</option>
                        <option value="07">JUL</option>
                        <option value="08">AUG</option>
                        <option value="09">SEP</option>
                        <option value="10">OCT</option>
                        <option value="11">NOV</option>
                        <option value="12">DEC</option>
                      </Form.Select>
                    </Col>
                    {/* End Month */}

                    {/* Satrt Day */}
                    <Col md={4} xs={4} sm={4}>
                      <Form.Select
                        aria-label="DAY"
                        className={Styles.day}
                        onChange={(e) => Days(e)}
                        disabled={dayFreez}
                      >
                        <option>DAY</option>
                        {daysList.map((items, index) => {
                          return <option value={index + 1}>{items}</option>;
                        })}
                      </Form.Select>
                    </Col>
                    {/* End Day */}
                  </Row>

                  <Row className={Styles.heading}>
                    <Col>
                      <span style={{ marginLeft: "6px" }}>CURRENCY</span>
                    </Col>
                    <Col>
                      <span className="text-center">FORECAST RANGE</span>
                    </Col>
                    <Col>
                      <span className="text-center">ACHIEVED RANGE</span>
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
                            {dateData && dateData.range && dateData.length != 0
                              ? dateData.range.map((items) => {
                                  return (
                                    <RateTable data={items} id={items.id} />
                                  );
                                })
                              : "No archives for this day(For daily)/week"}
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default MobArchive;
