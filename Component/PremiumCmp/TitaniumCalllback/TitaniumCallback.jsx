import {
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import {
  BsFillTelephoneOutboundFill,
  BsFillTelephoneInboundFill,
} from "react-icons/bs";
import Link from "next/link";
import SweetAlert from "react-bootstrap-sweetalert";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
const TitaniumCallback = () => {
  const dispatch = useDispatch();
  const [sweetAlert, setSweetAlert] = useState(false);
  const [RegexValue, setRegexValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [dateData, setDateData] = useState();
  const inputRef = useRef();

  const getData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await axios({
        method: "POST",
        url: "/send-titanium-detail.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
        data: formData,
      });
      setSweetAlert(true);
      form.reset();
    } catch (err) {
      console.log(err);
    }
  };

  // select date logic
  const checkDate = () => {
    var currentDate = new Date();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();
    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();
    var maxDate = year + "-" + month + "-" + day;
    inputRef.current.setAttribute("min", maxDate);
  };

  useEffect(() => {
    checkDate();
  }, []);

  // Start Sweet Alert Coding
  const Alert = () => {
    const alert = (
      <>
        <SweetAlert
          show={sweetAlert}
          title="Request Sent"
          success
          customButtons={
            <>
              <Button
                className="Primary w-50"
                onClick={() => {
                  setSweetAlert(false);
                }}
              >
                OK
              </Button>
            </>
          }
        >
          <p>
            We have received your request. <br /> Our executives will get in
            touch shortly.
          </p>
        </SweetAlert>
      </>
    );

    return alert;
  };

  // End Sweet alert Coding

  const getFormData = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setRegexValue(input);
    }
  };

  const getNameData = (event) => {
    const input = event.target.value;
    const regex = /^[a-zA-Z_ ]*$/;
    if (input === "" || regex.test(input)) {
      setNameValue(input);
    }
  };

  const Design = (
    <>
      <Container style={{ fontFamily: "roboto" }}>
        <Row>
          <Form onSubmit={getData}>
            <Col md={12}>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{
                    color: "#0b2299",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  required="required"
                  placeholder="Enter Full Name"
                  maxLength="20"
                  onChange={getNameData}
                  value={nameValue}
                  style={{
                    height: "25px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    borderColor: "#a1c4ec",
                  }}
                />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{
                    color: "#0b2299",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  Phone number
                </Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  required="required"
                  value={RegexValue}
                  maxLength="10"
                  placeholder="Enter Phone Number"
                  onChange={getFormData}
                  style={{
                    height: "25px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    borderColor: "#a1c4ec",
                  }}
                />
              </Form.Group>
            </Col>

            {/* start When to call && call anytime */}
            <div className="d-flex justify-content-between">
              <Col md={5}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label
                    className="mb-0 mt-2"
                    style={{
                      color: "#0b2299",
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    When to call?
                  </Form.Label>
                  <Form.Control
                    ref={inputRef}
                    type="date"
                    name="on_date"
                    required="required"
                    value={dateData}
                    onChange={(e) => checkDate(e)}
                    style={{
                      height: "25px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      borderColor: "#a1c4ec",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={2}></Col>
              <Col md={5}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label
                    className="mb-0 mt-2 d-flex "
                    style={{
                      color: "#0b2299",
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    {/* <Form.Check
                        type="checkbox"
                        name="is_anytime"
                        style={{ marginRight: "5px" }}
                      /> */}
                    <span>Time</span>
                  </Form.Label>
                  <Form.Select
                    size="sm"
                    required="required"
                    name="on_time"
                    style={{
                      height: "25px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      borderColor: "#a1c4ec",
                    }}
                  >
                    <option>10AM to 11AM</option>
                    <option>11AM to 12PM</option>
                    <option>12PM to 01PM</option>
                    <option>12PM to 01PM</option>
                    <option>01PM to 02PM</option>
                    <option>02PM to 03PM</option>
                    <option>03PM to 04PM</option>
                    <option>04PM to 05PM</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </div>
            {/* End When to call && call anytime*/}
            <div>
              <Button
                type="submit"
                style={{
                  width: "100%",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  fontSize: "12px",
                  borderRadius: "8px",
                  backgroundColor: "#1fe32d",
                  border: "none",
                  boxShadow: "none",
                  letterSpacing: "1px",
                  marginBottom: "5px",
                }}
              >
                <BsFillTelephoneInboundFill
                  style={{
                    fontSize: "16px",
                    marginTop: "-3px",
                    marginRight: "3px",
                  }}
                />
                {"    "}
                REQUEST CALLBACK
              </Button>
              <Link href="tel:+919523599540">
                <a
                  target="_blank"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  <Button
                    style={{
                      width: "100%",
                      paddingTop: "0px",
                      paddingBottom: "3px",
                      fontSize: "16px",
                      borderRadius: "8px",
                      backgroundColor: "#1fe32d",
                      border: "none",
                      letterSpacing: "1px",
                      boxShadow: "none",
                    }}
                  >
                    <BsFillTelephoneOutboundFill />{" "}
                    <span style={{ fontSize: "12px" }}>
                      CONNECT ON PHONECALL
                    </span>
                  </Button>
                </a>
              </Link>
            </div>
          </Form>
          <Alert />
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default TitaniumCallback;
