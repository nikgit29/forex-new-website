import { Container, Row, Col } from "react-bootstrap";
import Styles from "./newsmain.module.css";
import { useState, useEffect } from "react";
import { RiWhatsappLine } from "react-icons/ri";
import { GrTwitter } from "react-icons/gr";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import moment from "moment";
import Script from "next/script";

const HtmlToReactParser = require("html-to-react").Parser;

const NewsMain = ({ newsData }) => {
  const [show, setShow] = useState("d-block");
  const [showContent, setShowContent] = useState("d-none");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow("d-none");
      setShowContent("d-block");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const date = moment(newsData?.updated_at).format("Do MMM YY");

  const newsDetails = (details) => {
    if (!details) return null;

    const htmlToReactParser = new HtmlToReactParser();
    return htmlToReactParser.parse(details);
  };

  return (
    <Container className={Styles.container}>
      <div className={show}>
        <Skeleton width="50%" height={20} />
        <Skeleton height={450} />
        <Skeleton width="80%" />
        <Skeleton width="60%" />
        <Skeleton width="40%" />
      </div>

      <Row className={showContent}>
        <Col md={12}>
          <h1 className="mb-3">{newsData?.title}</h1>
        </Col>

        <Col md={12}>
          <img
            src={newsData?.img?.replaceAll("\\/", "/")}
            alt={newsData?.title}
            width="100%"
            height="500px"
            className={Styles.img}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/newsloader.png";
            }}
          />

          <div className="mt-4 mb-4">
            <p
              style={{
                color: "#b4b1b1",
                fontSize: "11px",
                padding: 0,
                margin: 0,
              }}
            >
              Updated at {newsData?.time} | {date}
            </p>
          </div>

          <div className="d-flex">
            <a
              href={`https://wa.me/?text=https://classic.forexblues.com/article/${newsData?.slug}`}
              target="_blank"
              rel="noreferrer"
            >
              <RiWhatsappLine
                style={{
                  fontSize: "22px",
                  color: "#25D366",
                }}
              />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?text=https://classic.forexblues.com/article/${newsData?.slug}`}
              target="_blank"
              rel="noreferrer"
            >
              <GrTwitter
                style={{
                  fontSize: "22px",
                  marginLeft: "10px",
                  color: "#00acee",
                  marginRight: "10px",
                }}
              />
            </a>
          </div>
        </Col>
      </Row>

      <Row className={`mb-5 ${showContent}`}>
        <Col>
          <p className={Styles.desc}>
            {newsDetails(newsData?.excerpt)}
          </p>
        </Col>
      </Row>

      <div id="fb-root"></div>

      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v14.0"
      />

      <div
        className="fb-comments"
        data-href="https://forexblues.vercel.app/news"
        data-width="100%"
        data-numposts="5"
      ></div>
    </Container>
  );
};

export default NewsMain;