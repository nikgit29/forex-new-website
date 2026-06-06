import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import { useState, useEffect } from "react";
import moment from "moment";
import Styles from "./mobnews.module.css";

const MobNewsSlider = ({ newsData = [] }) => {
  const [storeNews, setStoreNews] = useState([]);

  useEffect(() => {
    if (Array.isArray(newsData)) {
      setStoreNews(newsData);
    }
  }, [newsData]);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1
            style={{ color: "#ffffff", textAlign: "center" }}
            className="mb-4"
          >
            ARTICLES
          </h1>
        </Col>
      </Row>

      <Row>
        <Col>
          {storeNews?.map((items) => {
            const date = moment(items.updated_at).format(
              "Do MMMM YYYY"
            );

            return (
              <Link
                href={`/news/${items.slug}`}
                key={items.post_id || items.slug}
              >
                <Card
                  style={{
                    borderRadius: "30px",
                    height: "400px",
                    marginLeft: "5%",
                    marginRight: "5%",
                    cursor: "pointer",
                  }}
                  className="mb-4"
                >
                  <Card.Img
                    variant="top"
                    src={items.img?.replaceAll("\\/", "/")}
                    alt={items.title}
                    style={{
                      borderRadius: "30px",
                      padding: "10px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />

                  <Card.Body>
                    <Card.Title style={{ fontSize: "16px" }}>
                      {items.title}
                    </Card.Title>

                    <Card.Text>
                      <p style={{ fontSize: "12px" }}>
                        {items.excerpt?.slice(0, 100)}
                      </p>
                    </Card.Text>

                    <Card.Text>
                      <p style={{ fontSize: "10px" }}>{date}</p>
                    </Card.Text>

                    <div
                      className="d-flex justify-content-center mt-4"
                      style={{
                        boxShadow:
                          "0px 5px 20px -2px rgb(160 155 155 / 75%)",
                        borderRadius: "10px",
                        fontSize: "14px",
                      }}
                    >
                      <span>READ MORE</span>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default MobNewsSlider;