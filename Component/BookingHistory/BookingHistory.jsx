import {
  Col,
  Container,
  Row,
  Button,
  Form,
  Table,
  Modal,
} from "react-bootstrap";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import Style from "./bookinghistory.module.css";
import { useState } from "react";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { TbSend } from "react-icons/tb";
const BookingHistory = () => {
  const [show, setShow] = useState(false);
  const response = useSelector((response) => response);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [bookingValue, setBookingValue] = useState();
  const [modalValue, setModalValue] = useState();
  const [year, setYear] = useState();

  const personId =
    response &&
    response.SEND_PROFILE_DATA &&
    response.SEND_PROFILE_DATA.data &&
    response.SEND_PROFILE_DATA.data.id;

  const bookingHistory = async (value) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/booking_history.php",
        data: { customer_id: personId, year: value },
      });
      setBookingValue(response.data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  // Start Send mail of booking history

  const SendMail = async (bookingNo) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/send_mail.php",
        data: {
          booking_no: bookingNo,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  // End Send mail of booking history

  useEffect(() => {
    {
      personId != undefined ? bookingHistory("2023") : null;
    }
    setYear(2023);
  }, [personId]);

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
            <h1 className="mt-5 mb-4 text-center">Booking History</h1>

            <div className="d-flex justify-content-center">
              <div className={Style.main}>
                <div className="text-center">
                  <Button className={Style.nameBtn} disabled>
                    Walmart Ceramic
                  </Button>

                  <div className={Style.totalAmount}>
                    <span>Total Amount Saved in {year} : </span>
                    <span>
                      Rs {bookingValue && bookingValue.total_sum_year} /-
                    </span>
                  </div>

                  <div className={Style.totalAmount}>
                    <span>Amount Saved from start till date : </span>
                    <span>Rs {bookingValue && bookingValue.total} /-</span>
                  </div>

                  <div className={Style.selectYear}>
                    <span>Select Year </span>
                    <form
                      onChange={(e) => {
                        bookingHistory(e.target.value);
                        setYear(e.target.value);
                      }}
                    >
                      <Form.Select
                        aria-label="Default select example"
                        className="border-0 shadow-none"
                      >
                        <option value="2022">2022</option>
                        <option value="2023" selected>
                          2023
                        </option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                      </Form.Select>
                    </form>
                  </div>

                  <Button className={Style.pdfBtn}>
                    <HiDownload />
                    Download All Pdf
                  </Button>

                  <div className="mt-3">
                    <Table bordered responsive size="sm">
                      <thead className={Style.thead}>
                        <tr>
                          <th>Booking No.</th>
                          <th>Booking Date</th>
                          <th>Invoice Amount</th>
                          <th>Inward/Outward</th>
                          <th>PDF/JPG</th>
                          <th>View</th>
                        </tr>
                      </thead>
                      <tbody hover="false">
                        {bookingValue &&
                          bookingValue.result &&
                          bookingValue.result.map((items, index) => {
                            return (
                              <tr>
                                <td>{items && items.booking_no}</td>
                                <td>{items && items.booking_date}</td>
                                <td>{items && items.invoice_amount}</td>
                                <td>{items && items.inward}</td>
                                <td>
                                  <Button
                                    className="w-100 py-2 px-0"
                                    style={{
                                      fontSize: "10px",
                                    }}
                                    onClick={() => SendMail(items.booking_no)}
                                  >
                                    <TbSend style={{ marginRight: "5px" }} />
                                    Send Mail
                                  </Button>
                                </td>

                                <td>
                                  <Button
                                    className="w-100 py-2 px-0"
                                    style={{ fontSize: "10px" }}
                                    onClick={() => {
                                      handleShow();
                                      setModalValue(index);
                                    }}
                                  >
                                    View file
                                  </Button>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="show-grid p-0" closeButton>
          <Container>
            <Row>
              <Col
                xs={2}
                md={3}
                style={{
                  borderRight: "1px solid #ccc",
                  backgroundColor: "#6aadfe",
                  color: "#ffffff",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  fontSize: "15px",
                }}
              >
                <div className="d-flex flex-column justify-content-between pt-3">
                  <span className="mb-2">Booking No.</span>
                  <span className="mb-3">Booking Date</span>
                  <span className="mb-3">Inward/Outward</span>
                  <span className="mb-4">Booked Amt</span>
                  <span className="mb-3">Pending Amt</span>
                  <span className="mb-3">Rate Informed</span>
                  <span className="mb-3">Rate booked</span>
                  <span className="mb-3">Booked date</span>
                  <span className="mb-4">Profit/Loss</span>
                  <span className="mb-3">Remark</span>
                  <span className="mb-2">Status</span>
                </div>
              </Col>
              <Col xs={10} md={9}>
                <Table>
                  <tbody>
                    <tr style={{ height: "20px" }}>
                      <td>
                        {bookingValue &&
                          bookingValue.result[modalValue] &&
                          bookingValue.result[modalValue].booking_no}
                      </td>
                    </tr>
                    <tr style={{ height: "20px" }}>
                      <td>
                        {bookingValue &&
                          bookingValue.result[modalValue] &&
                          bookingValue.result[modalValue].booking_date}
                      </td>
                    </tr>
                    <tr style={{ height: "20px" }}>
                      <td>
                        {bookingValue &&
                          bookingValue.result[modalValue] &&
                          bookingValue.result[modalValue].inward}
                      </td>
                    </tr>
                    <tr style={{ height: "20px" }}>
                      <td>
                        {bookingValue &&
                          bookingValue.result[modalValue] &&
                          bookingValue.result[modalValue].booked_amount}
                      </td>
                    </tr>
                    <tr style={{ height: "20px" }}>
                      <td>
                        {bookingValue &&
                          bookingValue.result[modalValue] &&
                          bookingValue.result[modalValue].pending_amount}
                      </td>
                    </tr>
                    <tr style={{ height: "20px" }}>
                      <td>
                        {bookingValue &&
                          bookingValue.result[modalValue] &&
                          bookingValue.result[modalValue].rate_when_informed}
                      </td>
                    </tr>
                    <tr style={{ height: "20px" }}>
                      <td>
                        {bookingValue &&
                          bookingValue.result[modalValue] &&
                          bookingValue.result[modalValue].rate_when_booked}
                      </td>
                    </tr>
                    <tr style={{ height: "20px" }}>
                      <td>
                        {bookingValue &&
                          bookingValue.result[modalValue] &&
                          bookingValue.result[modalValue].booked_date}
                      </td>
                    </tr>
                    <tr style={{ height: "20px" }}>
                      <td>
                        {bookingValue &&
                          bookingValue.result[modalValue] &&
                          bookingValue.result[modalValue].profit}
                      </td>
                    </tr>

                    <tr style={{ height: "20px" }}>
                      <td>
                        {bookingValue &&
                          bookingValue.result[modalValue] &&
                          bookingValue.result[modalValue].remarks}
                      </td>
                    </tr>
                    <tr style={{ height: "20px" }}>
                      <td>
                        {bookingValue &&
                          bookingValue.result[modalValue] &&
                          bookingValue.result[modalValue].status}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
  return Design;
};

export default BookingHistory;
