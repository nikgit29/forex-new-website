import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
const NewsLetter = () => {
  const [show, setShow] = useState("none");

  useEffect(() => {
    const storedDemo = sessionStorage.getItem("newsletter");

    if (storedDemo !== "none") {
      setShow("block");
      setTimeout(() => {
        setShow("none");
        sessionStorage.setItem("newsletter", "none");
      }, 30000);
    }
  }, []);
  //  Start Send Email code

  const getData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await axios({
        method: "POST",
        url: "/save-newsletter.php",
        data: formData,
      });
      setShow("none");
      form.reset();
    } catch (err) {
      console.error(err);
    }
  };

  // End Send Email code

  const Design = (
    <>
      <Container>
        <Row>
          <Col
            className="border"
            style={{
              position: "fixed",
              bottom: "20px",
              right: "2%",
              zIndex: "999999",
              backgroundColor: "#ffffff10",
              backgroundImage: "url(/newsimg.jpg)",
              backdropFilter: "blur(12px)",
              color: "#000000",

              width: "fit-content",
              padding: "20px",
              borderRadius: "10px",
              display: `${show}`,
            }}
          >
            <div>
              <div
                style={{ textAlign: "end", cursor: "pointer" }}
                onClick={() => setShow("none")}
              >
                <AiOutlineCloseCircle />
              </div>
              <h3>Join Our Newsletter</h3>
              <h6>
                Get the latest articles & Updates related to Forex <br />{" "}
                <span className="text-danger">or Gold</span> delivered directly
                to your inbox.
              </h6>
              <Form onSubmit={getData}>
                <div className="d-flex gap-4 ">
                  <Form.Group className="mb-3">
                    <Form.Check
                      name="isGold"
                      type="radio"
                      label="Forex"
                      value="0"
                      id="1"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      name="isGold"
                      type="radio"
                      label="Gold"
                      value="1"
                      id="2"
                    />
                  </Form.Group>
                </div>
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                  />
                  <Button type="submit" style={{ marginLeft: "10px" }}>
                    Subscribe
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default NewsLetter;
