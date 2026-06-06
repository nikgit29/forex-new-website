import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import useAxios from "../../../Hooks/useAxios";
import axios from "axios";
import { useDispatch } from "react-redux";

import CLOSE_MOB_SIGNUP_MODAL from "../../../Redux/Action/MobAction/closemobsignupmodal.action";
import OPEN_MOB_LOGIN_MODAL from "../../../Redux/Action/MobAction/mobopenloginmodal.action";

import OPEN_SIGNUP_OTP_MODAL from "../../../Redux/Action/opensignupotpmodal.action";
import Cookies from "universal-cookie";

const MobSignup = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();

  const [firstSlide, setFristSlide] = useState("d-block");
  const [secondSlide, setSecondSlide] = useState("d-none");
  const [thirdSlide, setThirdSlide] = useState("d-none");
  const [countries, setCountries] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [NameRegexValue, setNameRegexValue] = useState("");
  const [CompanyRegexValue, setCompanyRegexValue] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("none");
  const [errorMessage, setErrorMessage] = useState("");
  const [initialCountry, setCountry] = useState("101");
  // Start GET Country Name API
  const country = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/countries.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
      });
      setCountries(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // End GET Country Name API

  // Start GET State Name API

  const state = async (value) => {
    try {
      const response = await axios({
        method: "GET",
        url:
          "/states-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s&country_id=" +
          value,
      });
      setStateData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // End GET State Name API

  // Start GET City Name API
  const city = async (value) => {
    try {
      const response = await axios({
        method: "GET",
        url:
          "/cities-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s&state_id=" +
          value,
      });
      setCityData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // End GET City Name API

  useEffect(() => {
    country(), state(101), city(1);
  }, []);

  // Start Country onChange function
  const CountryId = (e) => {
    const value = e.target.value;
    state(value);
    setCountry(value);
  };
  // End Country onChange function

  // Start State onChange function
  const stateId = (e) => {
    const value = e.target.value;
    city(value);
  };
  // End State onChange function

  //  Start getFormData Coding
  const getData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const phone = formData.get("phone");
    cookies.set("phone", phone, { path: "/", maxAge: 300 });
    try {
      const response = await axios({
        method: "POST",
        url: "/signup-v2.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
        data: formData,
      });
      dispatch(CLOSE_MOB_SIGNUP_MODAL());
      dispatch(OPEN_SIGNUP_OTP_MODAL());
      form.reset();
    } catch (err) {
      console.log(err);
    }
  };

  //  End getFromData Coding

  // Start Checkbox is ON or OFF
  const checkBoxs = (e) => {
    const status = e.target.checked;
    if (status == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  // End Checkbox is ON or OFF

  const NameRegex = (event) => {
    const input = event.target.value;
    const regex = /[a-zA-Z]+$/;
    if (input === "" || regex.test(input)) {
      setNameRegexValue(input);
    }
  };

  const CompanyRegex = (event) => {
    const input = event.target.value;
    const regex = /[a-zA-Z]+$/;
    if (input === "" || regex.test(input)) {
      setCompanyRegexValue(input);
    }
  };

  // Start Password validation
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const passwordValidation = (e) => {
    const input = e.target;
    required(input);
  };

  const required = (input) => {
    const value = input.value.trim();
    if (value.length == 0) {
      setErrorMessage("This field is required");
      setShow("block");
    } else {
      setErrorMessage("");
      setShow("none");
      if (value.length < 8 || value.length > 15) {
        setErrorMessage("Minimum 8 & Maximum 15 Character required");
        setShow("block");
      } else {
        setErrorMessage("");
        setShow("none");
        const RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
        if (RegExp.test(value)) {
          setErrorMessage("");
          setShow("none");
        } else {
          setErrorMessage(
            "Password Must Contain Uppercase,Lowercase,Symbols and Numbers"
          );
          setShow("block");
        }
      }
    }
  };
  // End Password Validation

  const design = (
    <>
      <div
        className="w-100 p-2"
        style={{
          backgroundColor: "#ffffff",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              color: "#7fbbff",
              cursor: "pointer",
              fontSize: "14px",
            }}
            onClick={() => {
              dispatch(OPEN_MOB_LOGIN_MODAL());
              dispatch(CLOSE_MOB_SIGNUP_MODAL());
            }}
          >
            LOG IN
          </div>
          <div
            style={{
              color: "#c3dbf7",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            SIGN UP
          </div>
        </div>

        <div className="p-2">
          <Form onSubmit={getData}>
            <div className={firstSlide}>
              {/* Start name coding */}
              <Form.Group className="mb-2" controlId="formBasicName">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{
                    color: "#0b2299",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Name<sup className="text-danger">*</sup>
                </Form.Label>
                <Form.Control
                  type="text"
                  required="required"
                  placeholder="Enter Fullname"
                  onChange={NameRegex}
                  value={NameRegexValue}
                  name="name"
                  style={{
                    height: "25px",
                    borderRadius: "10px",
                    fontSize: "12px",
                  }}
                />
              </Form.Group>
              {/* Start name coding */}

              {/* Start password coding */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{
                    color: "#0b2299",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Password<sup className="text-danger">*</sup>
                </Form.Label>
                <Form.Control
                  type="password"
                  required="required"
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  style={{
                    height: "25px",
                    borderRadius: "10px",
                    fontSize: "12px",
                  }}
                  onChange={handlePassword}
                  onBlur={passwordValidation}
                />
                <h6
                  class="text-danger mt-2"
                  role="alert"
                  style={{ fontSize: "10px", display: `${show}` }}
                >
                  {errorMessage}
                </h6>
                <h6 class="text-danger mt-1" style={{ fontSize: "10px" }}>
                  Hints: Admin@123
                </h6>
              </Form.Group>
              {/* Start passsword coding */}

              {/* Start phone coding */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{
                    color: "#0b2299",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Phone Number<sup className="text-danger">*</sup>
                </Form.Label>
                <Form.Control
                  type="number"
                  required="required"
                  placeholder="Enter Number"
                  name="phone"
                  style={{
                    height: "25px",
                    borderRadius: "10px",
                    fontSize: "12px",
                  }}
                />
              </Form.Group>
              {/* End phone coding */}

              <Button
                className="w-100 mt-5"
                style={{ backgroundColor: "#6aadfe" }}
                onClick={() => {
                  setFristSlide("d-none"), setSecondSlide("d-block");
                }}
              >
                NEXT
              </Button>
            </div>

            <div className={secondSlide}>
              {/* Start Email coding */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{
                    color: "#0b2299",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Email<sup className="text-danger">*</sup>
                </Form.Label>
                <Form.Control
                  type="email"
                  required="required"
                  placeholder="Enter Email"
                  name="email"
                  style={{
                    height: "25px",
                    borderRadius: "10px",
                    fontSize: "12px",
                  }}
                />
              </Form.Group>
              {/*End Email coding */}

              {/* Start Your Profile */}
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{ color: "#0b2299", fontWeight: "500" }}
                >
                  Your Profile<sup className="text-danger">*</sup>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="account-type"
                  required="required"
                  style={{
                    height: "25px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    paddingTop: "1px",
                  }}
                >
                  <option value="1">Money Changer</option>
                  <option value="2">Exporter</option>
                  <option value="3">Fx Dealer</option>
                  <option value="4">NRI/Individual </option>
                  <option value="5">Gold Dealer</option>
                  <option value="6">Importer</option>
                </Form.Select>
              </Form.Group>
              {/* End Your Profile */}

              {/* Start Company  */}
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{ color: "#0b2299", fontWeight: "500" }}
                >
                  Company
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ForexBlues"
                  name="company"
                  required="required"
                  value={CompanyRegexValue}
                  onChange={CompanyRegex}
                  style={{
                    height: "25px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    borderColor: "#6aadfe",
                  }}
                />
              </Form.Group>
              {/* End Company */}

              <Button
                className="w-100 mt-5"
                style={{ backgroundColor: "#6aadfe" }}
                onClick={() => {
                  setSecondSlide("d-none"), setThirdSlide("d-block");
                }}
              >
                NEXT
              </Button>
            </div>

            <div className={thirdSlide}>
              {/* Start  a/c holder */}
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label
                  className="mb-0 mt-2"
                  style={{ color: "#0b2299", fontWeight: "500" }}
                >
                  Are you a demat a/c holder?
                  <sup className="text-danger">*</sup>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="demat"
                  required="required"
                  style={{
                    height: "25px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    paddingTop: "1px",
                    borderColor: "#6aadfe",
                  }}
                >
                  <option>Choose Option</option>
                  <option value="yes">yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
              {/* End  a/c holder */}

              {/* Start Country ,City,State */}

              <div>
                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-2 " controlId="formBasicEmail">
                      <Form.Label
                        className="mb-0 mt-2"
                        style={{ color: "#0b2299", fontWeight: "500" }}
                      >
                        Country<sup className="text-danger">*</sup>
                      </Form.Label>
                      <Form.Select
                        aria-label="country"
                        name="country-id"
                        onChange={(e) => {
                          CountryId(e);
                        }}
                        value={initialCountry}
                        style={{
                          height: "25px",
                          borderRadius: "10px",
                          fontSize: "12px",
                          paddingTop: "1px",
                          borderColor: "#6aadfe",
                        }}
                      >
                        {countries &&
                          countries.map((item) => {
                            return <option value={item.id}>{item.name}</option>;
                          })}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group
                      className="mb-2 ml-1"
                      controlId="formBasicEmail"
                    >
                      <Form.Label
                        className="mb-0 mt-2"
                        style={{ color: "#0b2299", fontWeight: "500" }}
                      >
                        State<sup className="text-danger">*</sup>
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="state-id"
                        onChange={(event) => {
                          stateId(event);
                        }}
                        style={{
                          height: "25px",
                          borderRadius: "10px",
                          fontSize: "12px",
                          paddingTop: "1px",
                          borderColor: "#6aadfe",
                        }}
                      >
                        {stateData &&
                          stateData.map((item) => {
                            return <option value={item.id}>{item.name}</option>;
                          })}
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label
                        className="mb-0 mt-2"
                        style={{ color: "#0b2299", fontWeight: "500" }}
                      >
                        City<sup className="text-danger">*</sup>
                      </Form.Label>
                      <Form.Select
                        aria-label="india"
                        name="city-id"
                        style={{
                          height: "25px",
                          borderRadius: "10px",
                          fontSize: "12px",
                          paddingTop: "1px",
                          borderColor: "#6aadfe",
                        }}
                      >
                        {cityData &&
                          cityData.map((item) => {
                            return <option value={item.id}>{item.name}</option>;
                          })}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
              {/* End Country ,City,State */}
              {/* Start Check Box */}
              <div className="d-flex justify-content-center">
                <Form.Check
                  type="checkbox"
                  label="Accept terms & condition"
                  onClick={checkBoxs}
                />
              </div>
              {/* End Checkbox */}
              <Button
                className="w-100 mt-5"
                type="submit"
                disabled={disabled}
                style={{ backgroundColor: "#6aadfe" }}
              >
                SUBMIT
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
  return design;
};

export default MobSignup;
