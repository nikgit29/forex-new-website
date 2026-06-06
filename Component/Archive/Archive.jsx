import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Table,
  Modal,
  Button,
} from "react-bootstrap";
import Styles from "./archive.module.css";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
import moment from "moment";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OPEN_LOGIN_MODAL from "../Redux/Action/openclosemodal.action";
import MOB_OPEN_LOGIN_MODAL from "../Redux/Action/MobAction/mobopenloginmodal.action";
import { useRouter } from "next/router";
import Link from "next/link";
const Archive = () => {
  const [year, setYear] = useState("");
  const [days, setDays] = useState("");
  const [months, setMonths] = useState("");
  const [dateData, setDateData] = useState("");
  const [MomentDate, setMomentDate] = useState([]);
  const [open, setOpen] = useState(true);
  const [monthFreez, setMonthFreez] = useState(true);
  const [dayFreez, setDayFreez] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  const response = useSelector((response) => response);
  const depedency = response && response.SEND_PROFILE_DATA.data;
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

  // Start Archive  Modal hide after Login & and API call
  useEffect(() => {
    if (depedency != undefined) {
      setOpen(false);
      OnLoad();
    } else {
      setOpen(true);
    }
  }, [depedency]);

  const openLoginModal = () => {
    if (window.innerWidth > 992) {
      dispatch(OPEN_LOGIN_MODAL());
    } else if (window.innerWidth < 992) {
      dispatch(MOB_OPEN_LOGIN_MODAL());
    }
  };

  // End Archive  Modal hide after Login & and API call

  // Start Get days coding
  const setMonthGetDays = async (e) => {
    const month = e.target.value;
    setMonths(month);
    try {
      const response = await axios({
        method: "POST",
        url: "/get_day_year_wise.php?year=" + year + "&month=" + month,
        // data: {
        //   year: year,
        //   month: month,
        // },
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
          <Col className={Styles.archive}>
            <h1 className="mb-4">Archive</h1>

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
                width: "400px",
                height: "225px",
                boxShadow: "1px 1px 14px 0px rgb(123 182 255 / 46%)",
              }}
            >
              <span
                className="d-flex justify-content-center mt-2"
                style={{ color: "#b2b1b1", fontSize: "12px" }}
              >
                DAILY
              </span>

              <Card.Body>
                <Container fluid>
                  <Row>
                    {/* Start Year */}
                    <Col>
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
                    <Col>
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
                    <Col>
                      <Form.Select
                        aria-label="DAY"
                        className={Styles.day}
                        onChange={(e) => Days(e)}
                        disabled={dayFreez}
                      >
                        <option>DAY</option>
                        {daysList.map((items, index) => {
                          return (
                            <option value={index + 1} key={index}>
                              {items}
                            </option>
                          );
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
                          height: "93px",
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

      <Modal show={open} animation={false}>
        <Modal.Header
          style={{ padding: "0", display: "flex", justifyContent: "center" }}
        >
          <Modal.Title>
            <span style={{ fontSize: "12px", color: "#a3a2a2" }}>
              FOREXBLUES
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="d-flex justify-content-center"
            style={{ color: "#00408b" }}
          >
            <span>Login to see Archives</span>
          </div>

          <Button
            className="mt-3"
            style={{
              backgroundColor: "#09aeaeae",
              border: "none",
              boxShadow: "none",
              letterSpacing: "1px",
              borderRadius: "8px",
              padding: "5px 0",
              fontSize: "12px",
              width: "70%",
            }}
            onClick={() => {
              openLoginModal();
            }}
          >
            Login
          </Button>
          <Link href="/">
            <Button
              className="w-25 mt-3"
              style={{
                backgroundColor: "#e96e6e",
                border: "none",
                boxShadow: "none",
                letterSpacing: "1px",
                borderRadius: "8px",
                padding: "5px 0",
                fontSize: "12px",
                marginLeft: "10px",
              }}
            >
              Home
            </Button>
          </Link>
        </Modal.Body>
      </Modal>
    </>
  );
  return Design;
};

export default Archive;
