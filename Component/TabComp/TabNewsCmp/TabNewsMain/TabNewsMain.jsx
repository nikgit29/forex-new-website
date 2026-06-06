import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import useAxios from "../../../Hooks/useAxios";
import moment from "moment";
import { RiWhatsappLine } from "react-icons/ri";
import { GrTwitter } from "react-icons/gr";
import Script from "next/script";

const ReactDOMServer = require("react-dom/server");
const HtmlToReactParser = require("html-to-react").Parser;
const MobNewsMain = () => {
  const router = useRouter();
  const slug = router.query.post;
  const [newsData, setNewsData] = useState([]);

  const newsDetails = async () => {
    try {
      const response = await axios({
        method: "GET",
        url:
          "/get-news-detail.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s&news_slug=" +
          slug,
      });
      setNewsData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    newsDetails();
  }, []);

  const details = newsData && newsData.excerpt;
  const date = moment(newsData && newsData.updated_at).format("Do MMM  YY");
  const newsDetail = (details) => {
    const htmlInput = "";
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(details);
    return reactElement;
  };

  const design = (
    <>
      <Container fluid className="p-0 mt-3 mb-4">
        <Row>
          <Col md={12}>
            <h3 style={{ fontSize: "18px" }}>{newsData && newsData.title}</h3>
            <div className="d-flex mb-2">
              <p
                style={{
                  color: "#b4b1b1",
                  fontSize: "10px",
                  padding: "0",
                  margin: "0",
                }}
              >
                Updated at {newsData && newsData.time}
              </p>
              <span
                style={{
                  color: "#b4b1b1",
                  fontSize: "10px",
                  marginBottom: "2px",
                }}
              >
                | {date}
              </span>
            </div>

            <div className="d-flex">
              <a
                href={`https://wa.me/?text=https://classic.forexblues.com/news/${slug}`}
                target="_blank"
              >
                <RiWhatsappLine
                  style={{ fontSize: "22px", color: "#25D366" }}
                />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=https://classic.forexblues.com/news/${slug}`}
                target="_blank"
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
              {/* Start Facebook like & share button */}
              <div id="fb-root"></div>
              <Script
                async
                defer
                crossorigin="anonymous"
                src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v14.0"
                nonce="lsg4CWOd"
              />

              <div
                class="fb-like"
                data-href="https://developers.facebook.com/docs/plugins/"
                data-width=""
                data-layout="standard"
                data-action="like"
                data-size="small"
                data-share="true"
              ></div>
            </div>

            {/* End Facebook like & share button */}
          </Col>
          <Col md={12} className="mb-4 mt-3">
            <img src={newsData.img} width="100%" height="200px" />
          </Col>

          <Col md={12}>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "18px",
                lineHeight: "31px",
              }}
            >
              {newsDetail(details)}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
  return design;
};

export default MobNewsMain;
