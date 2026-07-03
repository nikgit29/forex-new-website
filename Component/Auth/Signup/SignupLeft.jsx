import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Style from "./signup.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import Link from "next/link";
import useAxios from "../../Hooks/useAxios";
import * as yup from "yup";
import OPEN_LOGIN_MODAL from "../../Redux/Action/openclosemodal.action";
import CLOSE_SIGNUP_MODAL from "../../Redux/Action/closesignupmodal.action";
import OPEN_SIGNUP_OTP_MODAL from "../../Redux/Action/opensignupotpmodal.action";
const SignUp = () => {
  const cookies = new Cookies();

  const [countries, setCountries] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [free, setFree] = useState("dark");
  const [pay, setPay] = useState("light");
  const [disabled, setDisabled] = useState(true);
  const [RegexValue, setRegexValue] = useState("");
  const [NameRegexValue, setNameRegexValue] = useState("");
  const [CompanyRegexValue, setCompanyRegexValue] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("none");
  const [errorMessage, setErrorMessage] = useState("");
  const [initialCountry, setCountry] = useState("101");
  const dispatch = useDispatch();

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
      if (response.data[0].response == "1") {
        const cookiesData = response.data[0].cookiesdata;
        const persionId = response.data[0].accountId;
        cookies.set("fx_1994", cookiesData, { path: "/", maxAge: "2592000" });
        cookies.set("personId", persionId, { path: "/", maxAge: "2592000" });
        dispatch(CLOSE_SIGNUP_MODAL());
        dispatch(OPEN_SIGNUP_OTP_MODAL());
        form.reset();
      } else {
        alert("Email & Phone Already Exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //  End getFromData Coding

  const checkPlan = (e) => {
    cookies.set("PAYKEY", "PAY", { path: "/", maxAge: 300 });
  };

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

  const NumberRegex = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setRegexValue(input);
    }
  };

  // Start Password Validation
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
  // -----------------------------------------Start Design Coding Below-----------------------------------------
  const Design = (
    <>
      <Container
        style={{
          padding: "0px",
          fontSize: "13px",
          paddingTop: "20px",
          height: "80%",
          fontFamily: "Poppins",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{ color: "#c3dbf7 ", cursor: "pointer" }}
            onClick={() => {
              dispatch(OPEN_LOGIN_MODAL());
              dispatch(CLOSE_SIGNUP_MODAL());
            }}
          >
            LOG IN
          </div>
          <div style={{ color: "#7fbbff", cursor: "pointer" }}>SIGN UP</div>
        </div>
        {/* Button */}
        {/* <div
          className="mt-3"
          style={{
            border: "1px solid #7838b9",
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            borderRadius: "15px",
          }}
        >
          <Button
            variant={free}
            value="FREE"
            className="w-50"
            onClick={(e) => {
              setFree("dark"), setPay("light");
            }}
            style={{
              height: "27px",
              paddingTop: "1px",
              paddingBottom: "1px",
              fontSize: "14px",
              borderRadius: "17px",
              boxShadow: "none",
            }}
          >
            FREE TRIAL
          </Button>
          <Button
            variant={pay}
            value="PAY"
            className="w-50"
            onClick={() => {
              setFree("light"), setPay("dark"), checkPlan();
            }}
            style={{
              height: "27px",
              paddingTop: "1px",
              paddingBottom: "1px",
              fontSize: "14px",
              borderRadius: "17px",
              boxShadow: "none",
            }}
          >
            PAY NOW
          </Button>
        </div> */}
        {/* Button */}

        <Row>
          <Col md={12}>
            <div
              className={Style.formfield}
              style={{
                overflowY: "scroll",
                height: "320px",
                fontFamily: "Poppins",
              }}
            >
              <Form onSubmit={getData}>
                {/* Start Your Name */}

                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label
                    className="mb-0 mt-2"
                    style={{
                      color: "#0b2299",
                      fontWeight: "500",
                    }}
                  >
                    Name <sup className="text-danger">*</sup>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Full Name"
                    name="name"
                    required="required"
                    onChange={NameRegex}
                    value={NameRegexValue}
                    style={{
                      height: "25px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      borderColor: "#6aadfe",
                    }}
                  />
                </Form.Group>
                {/* End Your Name */}

                {/* Start Your Password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label
                    className="mb-0 mt-2"
                    style={{ color: "#0b2299", fontWeight: "500" }}
                  >
                    Password<sup className="text-danger">*</sup>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    required="required"
                    value={password}
                    style={{
                      height: "25px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      borderColor: "#6aadfe",
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
                {/* End Your Password */}

                {/* Start Your Phone Number */}
                <Form.Group className="mb-3" controlId="formBasicNumber">
                  <Form.Label
                    className="mb-0 mt-2"
                    style={{ color: "#0b2299", fontWeight: "500" }}
                  >
                    Phone number<sup className="text-danger">*</sup>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobile Number"
                    name="phone"
                    required="required"
                    maxLength="10"
                    value={RegexValue}
                    onChange={NumberRegex}
                    style={{
                      height: "25px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      borderColor: "#6aadfe",
                    }}
                  />
                </Form.Group>
                {/* End Your Phone Number */}
                {/* Start Your Email */}

                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label
                    className="mb-0 mt-2"
                    style={{ color: "#0b2299", fontWeight: "500" }}
                  >
                    Email<sup className="text-danger">*</sup>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Valid Email Address"
                    name="email"
                    required="required"
                    style={{
                      height: "25px",
                      borderRadius: "10px",
                      fontSize: "12px",
                      borderColor: "#6aadfe",
                    }}
                  />
                </Form.Group>
                {/* End Your Email */}
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
                    placeholder="Company / Organization you are working in"
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

                <div className="d-flex justify-content-evenly">
                  <Col md={4}>
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
                  <Col md={4}>
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

                  <Col md={4}>
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
                </div>
                {/* End Country ,City,State */}

                {/* Start Check Box */}
                <div className="d-flex justify-content-center">
                  <Form.Check type="checkbox" label="" onClick={checkBoxs} />
                  <Link href="/terms-and-condition">
                    <a
                      target="_blank"
                      style={{ cursor: "pointer", textDecoration: "none" }}
                    >
                  
                      <span>I hearby authorise to send notification via SMS, Email, RCS and others as per Terms of Service/Privacy Policy.</span>
                    </a>
                  </Link>
                </div>

                {/* End Checkbox */}

                {/* Start Submit Button */}

                <div className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mb-3 p-0"
                    disabled={disabled}
                    style={{
                      height: "25px",
                      fontSize: "12px",
                      letterSpacing: "1.5px",
                      fontWeight: "500",
                      backgroundColor: "#92c5ff",
                      border: "none",
                    }}
                  >
                    Submit
                  </Button>
                </div>

                {/* End Submit Button */}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default SignUp;
