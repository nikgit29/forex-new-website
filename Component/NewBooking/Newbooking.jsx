import { Col, Container, Row, Button, Form } from "react-bootstrap";

import Style from "./newbooking.module.css";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxios from "../Hooks/useAxios";
import axios from "axios";
const Booking = () => {
  const response = useSelector((response) => response);

  const personId =
    response &&
    response.SEND_PROFILE_DATA &&
    response.SEND_PROFILE_DATA.data &&
    response.SEND_PROFILE_DATA.data.id;

  const name =
    response &&
    response.SEND_PROFILE_DATA &&
    response.SEND_PROFILE_DATA.data &&
    response.SEND_PROFILE_DATA.data.name;

  const newBooking = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await axios({
        method: "POST",
        url: "/submit_new_booking.php",
        data: formData,
      });
      form.reset();
      Notification("success");
    } catch (err) {
      console.error(err);
      Notification("error");
    }
  };

  // Start Notification Code
  const Notification = (type) => {
    switch (type) {
      case "success":
        toast.success("Submit Successfully !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;

      case "error":
        toast.error("Something went wrong !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
    }
  };
  // End  Notification Code

  const Design = (
    <>
      <Container>
        <Row>
          <Col
            style={{
              fontFamily: "poppins",
              textAlign: "justify",
              color: "#ffffff",
            }}
          >
            <h1 className="mt-5 mb-4 text-center">New Booking</h1>

            <div className="d-flex justify-content-center">
              <div className={Style.main}>
                <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>
                  {name}
                </h1>
                <div>
                  <Form onSubmit={newBooking}>
                    <Form.Group className="mb-4">
                      <Form.Control
                        type="hidden"
                        value={personId}
                        name="user_id"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Informed Date :</Form.Label>
                      <Form.Control type="date" name="informed_date" required />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Inward/Outward :</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="inward_outward"
                        required
                      >
                        <option>Open this select menu</option>
                        <option value="inward">Inward</option>
                        <option value="outward">Outward</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Currency : </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="currency"
                        required
                      >
                        <option value="USD">USD</option>
                        <option value="AED">AED</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Invoice Amount :</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="40000"
                        name="invoice_amount"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Booking Due Date :</Form.Label>
                      <Form.Control type="date" name="timeline" required />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Control
                        type="hidden"
                        value="pending"
                        name="status"
                        required
                      />
                    </Form.Group>
                    <div className="text-center">
                      <Button className="w-50" type="submit" variant="primary">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
  return Design;
};

export default Booking;
