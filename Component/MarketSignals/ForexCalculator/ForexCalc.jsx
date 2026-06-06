import {
  Container,
  Row,
  Col,
  Modal,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import Styles from "./forexcalc.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import useAxios from "../../Hooks/useAxios";
const ForexCalc = () => {
  const [show, setShow] = useState(false);
  const [showTrendz, setShowTrendz] = useState(false);
  const [amount, setAmount] = useState("ENTER AMOUNT");
  const [text, setText] = useState(
    "Click on Currency you want to Purchase / Exchange"
  );
  const [defaultAmount, setDefaultAmount] = useState("1");
  const [finalAmount, setFinalAmount] = useState("79.05");
  const [final, setFinal] = useState();
  const [visible, setVisible] = useState("none");
  const [view, setView] = useState("block");
  const [viewer, setViewer] = useState("none");
  const [rate, setRate] = useState("");
  const [idealBankRate, setIdealBankRate] = useState("");
  const [flag, setFlag] = useState("");
  const [money, setMoney] = useState();
  const [sellBuyData, setSellBuyData] = useState([]);
  const [RegexValue, setRegexValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState([]);
  const [onLoadDepes, setOnLoadDesps] = useState("");
  const response = useSelector((response) => response);
  const currencyDetails = response.ALL_CURRENCY_DETAILS.data.currency;
  const AllCurrencyData = () => {
    const currencyData = [
      { id: 0, currency: "USD", value: `${currencyDetails[0].value}` },
      { id: 1, currency: "AED", value: `${currencyDetails[1].value}` },
      { id: 2, currency: "EUR", value: `${currencyDetails[2].value}` },
      { id: 3, currency: "SAR", value: `${currencyDetails[3].value}` },
      { id: 4, currency: "GBP", value: `${currencyDetails[4].value}` },
      { id: 5, currency: "SGD", value: `${currencyDetails[5].value}` },
      { id: 6, currency: "AUD", value: `${currencyDetails[6].value}` },
      { id: 7, currency: "CAD", value: `${currencyDetails[7].value}` },
      { id: 8, currency: "JPY", value: `${currencyDetails[8].value}` },
    ];
    setData(currencyData);
  };
  const removeLabel = () => {
    setAmount("");
  };

  const openModal = async () => {
    setShow(true);
  };
  const getFormData = (event) => {
    const input = event.target.value;
    const regex = /^[1-9][0-9]*$/;
    if (input === "" || regex.test(input)) {
      setRegexValue(input);
      setDefaultAmount(input);
    }
    finalResult();
  };

  const finalResult = () => {
    const getFinal = `${defaultAmount}` * `${finalAmount}`;
    const final = getFinal.toFixed(2);
    setFinal(final);
  };

  useEffect(() => {
    finalResult();
  }, [finalAmount]);

  useEffect(() => {
    finalResult();
    if (RegexValue == "") {
      setDisabled(true);
      setView("block");
      setViewer("none");
      setVisible("none");
    } else {
      setDisabled(false);
    }
  }, [RegexValue]);

  useEffect(() => {
    if (currencyDetails != undefined) {
      AllCurrencyData();
    }
  }, [currencyDetails]);

  //Start Call function on Sell btn click
  const IncDscSell = async (money) => {
    try {
      const response = await axios({
        method: "POST",
        url:
          "/fx-calculator-buy-sell.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s&curr_name=" +
          money,
      });
      setSellBuyData(response.data[0].sell[0]);
      setFlag(response.data[0].sell[0].flag);
    } catch (err) {
      console.log(err);
    }
  };
  //End  Call function on Sell btn click

  //Start Call function on Buy btn click

  const IncDscBuy = async (money) => {
    try {
      const response = await axios({
        method: "POST",
        url:
          "/fx-calculator-buy-sell.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s&curr_name=" +
          money,
      });
      setSellBuyData(response.data[0].buy[0]);
    } catch (err) {
      console.log(err);
    }
  };
  //End Call function on Buy btn click

  // Start Ideal bank  data accroding currency

  const getIdealBank = (event) => {
    if (event == "SELL") {
      if (defaultAmount <= 5000) {
        const rate = finalAmount - 0.4;
        setRate(rate.toFixed(2));
        const multiply = rate * defaultAmount;
        setIdealBankRate(multiply.toFixed(2));
      } else if (defaultAmount >= 5000 && defaultAmount <= 10000) {
        const rate = finalAmount - 0.35;
        setRate(rate.toFixed(2));
        const multiply = rate * defaultAmount;
        setIdealBankRate(multiply.toFixed(2));
      } else if (defaultAmount >= 10001 && defaultAmount <= 25000) {
        const rate = finalAmount - 0.3;
        setRate(rate.toFixed(2));
        const multiply = rate * defaultAmount;
        setIdealBankRate(multiply.toFixed(2));
      } else if (defaultAmount >= 25001 && defaultAmount <= 50000) {
        const rate = finalAmount - 0.25;
        setRate(rate.toFixed(2));
        const multiply = rate * defaultAmount;
        setIdealBankRate(multiply.toFixed(2));
      } else if (defaultAmount >= 50001 && defaultAmount <= 75000) {
        const rate = finalAmount - 0.2;
        setRate(rate.toFixed(2));
        const multiply = rate * defaultAmount;
        setIdealBankRate(multiply.toFixed(2));
      } else if (defaultAmount >= 75001 && defaultAmount <= 100000) {
        const rate = finalAmount - 0.1;
        setRate(rate.toFixed(2));
        const multiply = rate * defaultAmount;
        setIdealBankRate(multiply.toFixed(2));
      } else if (defaultAmount >= 100001 && defaultAmount <= 500000) {
        const rate = finalAmount - 0.05;
        setRate(rate.toFixed(2));
        const multiply = rate * defaultAmount;
        setIdealBankRate(multiply.toFixed(2));
      }
    } else if (event == "BUY") {
      if (defaultAmount <= 5000) {
        const parseFinalAmount = parseFloat(finalAmount);
        const rate = parseFinalAmount + 0.4;
        setRate(rate.toFixed(2));
        const multiply = rate * defaultAmount;
        setIdealBankRate(multiply.toFixed(2));
      } else if (defaultAmount > 5000 && defaultAmount <= 10000) {
        const parseFinalAmount = parseFloat(finalAmount);
        const rate = parseFinalAmount + 0.35;
        setRate(rate.toFixed(2));
        const multiply = rate * defaultAmount;
        setIdealBankRate(multiply.toFixed(2));
      } else if (defaultAmount >= 10001 && defaultAmount <= 25000) {
        const parseFinalAmount = parseFloat(finalAmount);
        const rate = parseFinalAmount + 0.3;
        setRate(rate.toFixed(2));
        const multiply = rate * defaultAmount;
        setIdealBankRate(multiply.toFixed(2));
      } else if (defaultAmount >= 25001 && defaultAmount <= 50000) {
        const parseFinalAmount = parseFloat(finalAmount);
        const rate = parseFinalAmount + 0.25;
        setRate(rate.toFixed(2));
        const multiply = rate * defaultAmount;
        setIdealBankRate(multiply.toFixed(2));
      } else if (defaultAmount >= 50001 && defaultAmount <= 75000) {
        const parseFinalAmount = parseFloat(finalAmount);
        const rate = parseFinalAmount + 0.2;
        setRate(rate.toFixed(2));
        const multiply = rate * defaultAmount;
        setIdealBankRate(multiply.toFixed(2));
      } else if (defaultAmount >= 75001 && defaultAmount <= 100000) {
        const parseFinalAmount = parseFloat(finalAmount);
        const rate = parseFinalAmount + 0.1;
        setRate(rate.toFixed(2));
        const multiply = rate * defaultAmount;
        setIdealBankRate(multiply.toFixed(2));
      } else if (defaultAmount >= 100001 && defaultAmount <= 500000) {
        const parseFinalAmount = parseFloat(finalAmount);
        const rate = parseFinalAmount + 0.05;
        setRate(rate.toFixed(2));
        const multiply = rate * defaultAmount;
        setIdealBankRate(multiply.toFixed(2));
      }
    } else {
      return false;
    }
  };
  // End Ideal bank  data accroding currency
  // Start data accroding currency API
  const selectCurrency = (e) => {
    const currency = e.target.value;
    const currencyName = e.target.options[e.target.selectedIndex].text;
    setMoney(currencyName);
    const getData = parseFloat(currency);
    const twodigitData = getData.toFixed(2);
    setFinalAmount(twodigitData);
  };
  // End data accroding currency API

  const onLoad = () => {
    setMoney(`${data[0].currency}`);
    const getData = parseFloat(`${data[0].value}`);
    const twodigitData = getData.toFixed(2);
    setFinalAmount(twodigitData);
  };
  setTimeout(() => {
    setOnLoadDesps("start");
  }, 3000);

  useEffect(() => {
    if (data.length != 0) {
      onLoad();
    }
  }, [onLoadDepes]);

  const Design = (
    <>
      <div>
        <BsArrowLeftRight />{" "}
        <span
          onClick={() => setShowTrendz(!showTrendz)}
          style={{ letterSpacing: "2px" }}
        >
          MARKET TREND
        </span>
      </div>
      <br />
      <BsArrowLeftRight /> <span onClick={openModal}>FOREX CALCULATOR</span>
      {/* Start Forex Calculator Enter Amount code */}
      <Modal
        size="sm"
        show={show}
        onHide={() => {
          setShow(false),
            setDefaultAmount(1),
            setVisible("none"),
            setView("block"),
            setViewer("none");
          setAmount("ENTER AMOUNT");
          setRegexValue("");
          setFlag("");
          onLoad();
        }}
      >
        <Modal.Header className="d-flex justify-content-center p-0">
          <Modal.Title className={Styles.header}>FOREX CALCULATOR</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <div className="d-flex justify-content-between">
                  {/* Start USD Btn */}
                  <div className={Styles.maindiv}>
                    <div className="d-flex">
                      <div>
                        {flag == "" ? (
                          <img
                            src="/usa.webp"
                            width="15px"
                            height="10px"
                            style={{ marginTop: "16px" }}
                          />
                        ) : (
                          <img
                            src={flag}
                            width="15px"
                            height="10px"
                            style={{ marginTop: "16px" }}
                          />
                        )}
                      </div>
                      <div>
                        <Form.Select
                          aria-label="Default select example"
                          className={Styles.formselector}
                          onChange={(e) => {
                            selectCurrency(e),
                              IncDscSell(
                                e.target.options[e.target.selectedIndex].text
                              );
                          }}
                          onClick={() => {
                            setVisible("none");
                            setView("block");
                            setViewer("none");
                          }}
                        >
                          {data.map((item) => {
                            return (
                              <option value={item.value}>
                                {item.currency}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </div>
                    </div>
                    <div style={{ marginTop: "-8px" }}>
                      <span
                        style={{
                          color: "#a5a5a5",
                          fontSize: "8px",
                          marginLeft: "2px",
                          letterSpacing: "1px",
                        }}
                      >
                        SELECT CURRENCY
                      </span>
                    </div>
                  </div>
                  {/* End USD Btn */}

                  {/* Start INR Btn */}
                  <div>
                    <div className="d-flex">
                      <div>
                        <span className={Styles.inr}>INR</span>
                      </div>
                      <div>
                        <img
                          src="/india.webp"
                          width="15px"
                          height="10px"
                          style={{ marginTop: "6px", marginLeft: "5px" }}
                        />
                      </div>
                    </div>
                    <div>
                      <span
                        style={{
                          color: "#a5a5a5",
                          fontSize: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        INDIAN RUPEE
                      </span>
                    </div>
                  </div>
                  {/* End INR Btn */}
                </div>
              </Col>
            </Row>

            {/* Start Enter Amount  */}
            <Row>
              <Col>
                <div className={Styles.enterAmount}>
                  <FloatingLabel
                    controlId="floatingInputCustom"
                    label={amount}
                    style={{ width: "165px" }}
                    onClick={removeLabel}
                  >
                    <Form.Control
                      placeholder="Leave a comment here"
                      type="text"
                      value={RegexValue}
                      maxLength="8"
                      style={{
                        border: "none",
                        boxShadow: "none",
                        height: "2px",
                        marginTop: "-10px",
                      }}
                      onChange={getFormData}
                    />
                  </FloatingLabel>
                </div>
              </Col>
            </Row>
            {/* End Enter Amount  */}

            {/* Start Buttons */}
            <Row className="mt-3">
              <Col>
                <button
                  className={Styles.sellBtn}
                  disabled={disabled}
                  onClick={(e) => {
                    setVisible("block"),
                      setView("none"),
                      setViewer("block"),
                      getIdealBank("SELL");
                    IncDscSell(money);
                  }}
                >
                  SELL
                </button>
              </Col>
              <Col>
                <button
                  className={Styles.buyBtn}
                  disabled={disabled}
                  onClick={(e) => {
                    setVisible("block"),
                      setView("none"),
                      setViewer("block"),
                      getIdealBank("BUY");
                    IncDscBuy(money);
                  }}
                >
                  BUY
                </button>
              </Col>
            </Row>
            {/* End Buttons */}

            <Row
              className="mt-3"
              style={{ color: "#1b5289", fontSize: "11px", fontWeight: "500" }}
            >
              <Col>
                <span>Live rate</span>
              </Col>
              <Col md={2}></Col>
              <Col style={{ display: "inherit" }}>
                <span>{defaultAmount}</span> * <span>{finalAmount}</span> ={" "}
                <span>{final}</span>
              </Col>
            </Row>

            <Row
              className="mt-3"
              style={{ color: "#1b5289", fontSize: "11px", fontWeight: "500" }}
            >
              <Col md={5}>
                <span>
                  Ideal bank <br />
                  charge should be
                </span>
              </Col>

              <Col style={{ color: "#ccc", marginLeft: "25px" }}>
                <span style={{ display: `${view}` }}>
                  Enter Amount and <br />
                  select sell or buy to check
                </span>

                <div
                  style={{
                    marginLeft: "40px",
                    color: "#0e0e9a",
                    display: `${viewer}`,
                  }}
                >
                  <span>{defaultAmount}</span> * <span>{rate}</span> ={" "}
                  <span>{idealBankRate}</span>
                </div>
              </Col>
            </Row>

            <Row className="mt-3" style={{ display: `${visible}` }}>
              <Col>
                <div className="d-flex justify-content-center">
                  <div>
                    <span style={{ fontSize: "14px" }}>EXPECTED TO</span>
                    <br />
                    <span style={{ color: "#109b5b", fontWeight: "500" }}>
                      {sellBuyData && sellBuyData.popup_text}
                    </span>
                  </div>
                  <div>
                    <img
                      src={sellBuyData && sellBuyData.img}
                      width="70px"
                      height="50px"
                      style={{ marginLeft: "10px" }}
                    />
                  </div>
                </div>

                {sellBuyData && sellBuyData.signal == "FREEZE RATE" ? (
                  <Button className={Styles.holdBtnFreezeRate}>
                    {sellBuyData && sellBuyData.signal}
                  </Button>
                ) : (
                  <Button className={Styles.holdBtn}>
                    {sellBuyData && sellBuyData.signal}
                  </Button>
                )}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      {/* End Forex Calculator Enter Amount Code */}
      {/* <---------------------------------------------------------------------------------------------------> */}
      {/* Start Current Trendz Enter Amount code */}
      <Modal
        size="sm"
        show={showTrendz}
        onHide={() => {
          setShowTrendz(!showTrendz),
            setDefaultAmount(1),
            setVisible("none"),
            setView("block"),
            setViewer("none");
          setRegexValue("");
          setFlag("");
          onLoad();
          setText("Click on Currency you want to Purchase / Exchange");
        }}
      >
        <Modal.Header className="d-flex justify-content-center p-0">
          <Modal.Title className={Styles.header}>MARKET TREND</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <div className="d-flex justify-content-between">
                  {/* Start USD Btn */}
                  <div className={Styles.maindiv}>
                    <div className="d-flex">
                      <div>
                        {flag == "" ? (
                          <img
                            src="/usa.webp"
                            width="15px"
                            height="10px"
                            style={{ marginTop: "16px" }}
                          />
                        ) : (
                          <img
                            src={flag}
                            width="15px"
                            height="10px"
                            style={{ marginTop: "16px" }}
                          />
                        )}
                      </div>
                      <div>
                        <Form.Select
                          aria-label="Default select example"
                          className={Styles.formselector}
                          onChange={(e) => {
                            selectCurrency(e),
                              IncDscSell(
                                e.target.options[e.target.selectedIndex].text
                              );
                          }}
                          onClick={() => {
                            setVisible("none");
                            setView("block");
                            setViewer("none");
                          }}
                        >
                          {data.map((item) => {
                            return (
                              <option value={item.value}>
                                {item.currency}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </div>
                    </div>
                    <div style={{ marginTop: "-8px" }}>
                      <span
                        style={{
                          color: "#a5a5a5",
                          fontSize: "8px",
                          marginLeft: "2px",
                          letterSpacing: "1px",
                        }}
                      >
                        SELECT CURRENCY
                      </span>
                    </div>
                  </div>
                  {/* End USD Btn */}

                  {/* Start INR Btn */}
                  <div>
                    <div className="d-flex">
                      <div>
                        <span className={Styles.inr}>INR</span>
                      </div>
                      <div>
                        <img
                          src="/india.webp"
                          width="15px"
                          height="10px"
                          style={{ marginTop: "6px", marginLeft: "5px" }}
                        />
                      </div>
                    </div>
                    <div>
                      <span
                        style={{
                          color: "#a5a5a5",
                          fontSize: "10px",
                          letterSpacing: "1px",
                        }}
                      >
                        INDIAN RUPEE
                      </span>
                    </div>
                  </div>
                  {/* End INR Btn */}
                </div>
              </Col>
            </Row>

            {/* Start Enter Amount  */}
            <Row>
              <Col>
                <div className={Styles.enterAmount}>
                  <FloatingLabel
                    controlId="floatingInputCustom"
                    style={{ width: "165px" }}
                  >
                    <Form.Control
                      type="text"
                      value="In Next 4-8 Hours"
                      maxLength="8"
                      style={{
                        border: "none",
                        boxShadow: "none",
                        height: "2px",
                        marginTop: "-10px",
                      }}
                      // onChange={getFormData}
                    />
                  </FloatingLabel>
                </div>
              </Col>
            </Row>
            {/* End Enter Amount  */}

            {/* Start Buttons */}
            <Row className="mt-3">
              <Col>
                <button
                  className={Styles.sellBtn}
                  onClick={(e) => {
                    setVisible("block"),
                      setView("none"),
                      setViewer("block"),
                      getIdealBank("SELL");
                    IncDscSell(money);
                    setText("");
                  }}
                >
                  Exchange
                </button>
              </Col>
              <Col>
                <button
                  className={Styles.buyBtn}
                  onClick={(e) => {
                    setVisible("block"),
                      setView("none"),
                      setViewer("block"),
                      getIdealBank("BUY");
                    IncDscBuy(money);
                    setText("");
                  }}
                >
                  Purchase
                </button>
              </Col>
            </Row>
            {/* End Buttons */}

            <Row
              className="mt-3 text-center"
              style={{ color: "#1b5289", fontSize: "11px", fontWeight: "500" }}
            >
              <Col>{text}</Col>
            </Row>

            {/* <Row
              className="mt-3"
              style={{ color: "#1b5289", fontSize: "11px", fontWeight: "500" }}
            >
              <Col md={5}>
                <span>
                  Ideal bank <br />
                  charge should be
                </span>
              </Col>

              <Col style={{ color: "#ccc", marginLeft: "25px" }}>
                <span style={{ display: `${view}` }}>
                  Enter Amount and <br />
                  select sell or buy to check
                </span>

                <div
                  style={{
                    marginLeft: "40px",
                    color: "#0e0e9a",
                    display: `${viewer}`,
                  }}
                >
                  <span>{defaultAmount}</span> * <span>{rate}</span> ={" "}
                  <span>{idealBankRate}</span>
                </div>
              </Col>
            </Row> */}

            <Row className="mt-3" style={{ display: `${visible}` }}>
              <Col>
                <div className="d-flex justify-content-center">
                  <div>
                    <span style={{ fontSize: "14px" }}>EXPECTED TO</span>
                    <br />
                    <span style={{ color: "#109b5b", fontWeight: "500" }}>
                      {sellBuyData && sellBuyData.popup_text}
                    </span>
                  </div>
                  <div>
                    <img
                      src={sellBuyData && sellBuyData.img}
                      width="70px"
                      height="50px"
                      style={{ marginLeft: "10px" }}
                    />
                  </div>
                </div>

                {sellBuyData && sellBuyData.signal == "FREEZE RATE" ? (
                  <Button className={Styles.holdBtnFreezeRate}>
                    {sellBuyData && sellBuyData.signal}
                  </Button>
                ) : (
                  <Button className={Styles.holdBtn}>
                    {sellBuyData && sellBuyData.signal}
                  </Button>
                )}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      {/* End Current Trendz Calculator Enter Amount Code */}
    </>
  );
  return Design;
};
export default ForexCalc;
