import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { BiRupee } from "react-icons/bi";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import Image from "next/image";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
import Router from "next/router";
import { useRouter } from "next/router";

const Payments = () => {
  const response = useSelector((response) => response);
  const [title, setTitle] = useState("Enter Cheque Number");
  const [paytm, setPaytm] = useState("d-none");
  const [bank, setBank] = useState("d-block");
  const [RegexValue, setRegexValue] = useState("");
  const cookies = new Cookies();
  const router = useRouter();

  const getData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payment_mode = formData.get("paymetMode");
    const transaction_number = formData.get("transaction");
    const account_id = cookies.get("personId");
    const amountData = response.PREMIUM_PLAN.amount;
    try {
      const response = await axios({
        method: "POST",
        url: "/save-payment-v2.php",
        data: {
          payment_mode: payment_mode,
          transaction_number: transaction_number,
          account_id: account_id,
          amount: amountData,
        },
      });
      alert(
        "Payment Has been Submitted Successfully. You will Receive a Notification email shortly when we verify your payment. Cheers!"
      );
      Router.push("/profile");
      sessionStorage.setItem("_key", "true");
      form.reset();
    } catch (err) {
      console.error(err);
    }
  };

  const show = (e) => {
    const value = e.target.value;
    if (value == "cheque") {
      setTitle("Enter Cheque Number");
      setPaytm("d-none");
      setBank("d-block");
    } else if (value == "neft") {
      setTitle("Enter Transaction Number");
      setPaytm("d-none");
      setBank("d-block");
    } else {
      setTitle("Enter PAYTM Transaction Number");
      setPaytm("d-block");
      setBank("d-none");
    }
  };

  const transactions = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setRegexValue(input);
    }
  };

  useEffect(() => {
    if (cookies.get("fx_1994") == undefined) {
      router.push("/");
    }
  }, []);

  const Design = (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="d-flex justify-content-center">
              <Button
                style={{
                  color: "#ffffff",
                  fontSize: "30px",
                  backgroundColor: "rgba(255, 255, 255, 0.063)",
                  borderColor: "#bacccb",
                  borderRadius: "20px",
                }}
              >
                Pay <BiRupee style={{ marginTop: "-10px" }} />
                {response.PREMIUM_PLAN.amount}
              </Button>
            </div>
          </Col>
        </Row>
        <Row
          className="mt-5"
          style={{ paddingLeft: "15%", paddingRight: "10%" }}
        >
          <Col md={6}>
            <div>
              <Form onSubmit={getData}>
                <div className="mb-5">
                  <Form.Label>
                    <h3>Payment Mode</h3>
                  </Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    onChange={show}
                    name="paymetMode"
                  >
                    <option>Open this select menu</option>
                    <option value="cheque">By Cheque</option>
                    <option value="neft">By IMPS/NEFT</option>
                    <option value="paytm">Paytm Wallet</option>
                  </Form.Select>
                </div>
                <div>
                  <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>
                      <h3>{title}</h3>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={RegexValue}
                      onChange={transactions}
                      placeholder={title}
                      name="transaction"
                    />
                  </Form.Group>
                </div>
                <div className="d-flex justify-content-end">
                  <Button type="submit">SUBMIT</Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col md={6}>
            {/* Start Deposite To Bank Account */}
            <Card className={bank} style={{ width: "70%", marginLeft: "50px" }}>
              <Card.Header>
                <span className="d-flex justify-content-center">
                  <b>Deposite To Bank Account</b>
                </span>
              </Card.Header>
              <Card.Body>
                <Card.Text
                  className="text-center"
                  style={{ fontWeight: "600" }}
                >
                  Bank : Indian Bank <br />
                  Name: Forexblues.com <br />
                  A/c Type : Current <br />
                  A/c No. : 6634132784 <br />
                  IFSC No. : IDBI000H036
                </Card.Text>
              </Card.Body>
            </Card>
            {/* End Deposite To Bank Account */}

            {/* Start PAYTM  */}
            <Card
              className={paytm}
              style={{ width: "70%", marginLeft: "50px" }}
            >
              <Card.Header>
                <span className="d-flex justify-content-center">
                  <b>Paytm Number or scan QR code</b>
                </span>
              </Card.Header>
              <Card.Body>
                <Card.Text className="text-center">
                  <Image
                    src="/paytm.jpg"
                    alt="Paytm_qr"
                    width={500}
                    height={500}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
            {/*End PAYTM  */}
          </Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default Payments;
