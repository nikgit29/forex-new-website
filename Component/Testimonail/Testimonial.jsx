import { Container, Row, Col, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import useAxios from "../Hooks/useAxios";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
const Testimonial = ({ color }) => {
  const [data, setData] = useState([]);
  const getTestimonialData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/get-all-testimonial.php",
      });
      console.log(response.data, "poloTestimonial");
      setData(
  Array.isArray(response.data)
    ? response.data
    : []
);
    } catch (err) {}
  };

  useEffect(() => {
    getTestimonialData();
  }, []);

  const [expandedItems, setExpandedItems] = useState({});

  const toggleDescription = (index) => {
    setExpandedItems((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };
  const design = (
    <>
      <Container fluid className="bg-light px-5">
        <Row className="d-flex gap-4 justify-content-center">
          <div className="mt-5">
            <h1 className="text-center" style={{ color: "#919191" }}>
              Trusted Customer Feedback
            </h1>
          </div>

          {data.slice(0, 3)?.map((items, index) => {
            const {
              date_created,
              description,
              designation,
              image,
              rating,
              title,
            } = items;

            const isExpanded = expandedItems[index];

            const renderDescription = () => {
              if (isExpanded || description.split(" ").length <= 30) {
                return description;
              } else {
                const words = description.split(" ").slice(0, 30).join(" ");
                return (
                  <>
                    {words}...
                    <span
                      className="read-more"
                      onClick={() => toggleDescription(index)}
                    >
                      Read more
                    </span>
                  </>
                );
              }
            };

            return (
              <div className="col-lg-3 col-md-6 col-sm-12 bg-light ">
                <div
                  className="cursor-pointer p-3"
                  style={{
                    cursor: "pointer",
                    border: "1px solid #ccc",
                    backgroundColor: "white",
                    borderRadius: "15px",
                    boxShadow: "rgba(123, 182, 255, 0.46) 1px 1px 14px 0px",
                    height: "100%",
                  }}
                >
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src={image}
                      style={{
                        borderRadius: "50%",
                        width: "100px",
                        height: "100px",
                        filter: "drop-shadow(0 0 20px #888888)",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      overflow: "hidden",
                      position: "relative",
                      marginBottom: "10px",
                      fontSize: "14px",
                      color: "#ccc",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {renderDescription()}
                    </p>
                  </div>
                  <h6>
                    {title}
                    <span
                      style={{
                        color: "#ccc ",
                      }}
                    >
                      - {designation}
                    </span>
                  </h6>
                  <div className="rating">
                    <ReactStars
                      count={5}
                      value={rating}
                      size="5px"
                      activeColor="#ffd700"
                      isHalf={true}
                      edit={false}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          <div className="text-center mb-4">
            <Link href="/testimonial">
              <Button style={{ backgroundColor: "#6AADFE", border: "none" }}>
                View more
              </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </>
  );

  return design;
};

export default Testimonial;
