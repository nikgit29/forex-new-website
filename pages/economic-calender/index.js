import Head from "next/head";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();
  const design = (
    <>
      <Head>
        <title>ForexBlues</title>
        <meta name="description" content="Forexblues" />
        <link rel="canonical" href="https://forexblues.com/" />

        <meta
          name="google-site-verification"
          content="G0iS4js9vVuZAdlpBUNjj3DkxQFEUmRkvOm8_8r6wyI"
        />
        <meta
          name="keywords"
          content=" Forex Advisory, Forex Advisor, Currency Exchange Advisory, forex analyst, forex expert in India, Money Exchange Advisory Services"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container>
        <Row>
          <Col md={2} className="mb-3">
            <Button className="mt-5" onClick={() => router.back()}>
              {" "}
              <AiFillHome className="mb-1" style={{ marginRight: "5px" }} />
              Go To Home Page
            </Button>
          </Col>
          <Col>
            <iframe
              src="https://sslecal2.investing.com/?columns=exc_flags,exc_currency,exc_actual,exc_forecast,exc_previous&category=_employment,_economicActivity,_inflation,_credit,_centralBanks,_confidenceIndex,_balance,_Bonds&features=datepicker,timezone&countries=25,6,72,17,14,35,36,4,5&calType=week&timeZone=23&lang=56"
              style={{ width: "100%", height: "100vh" }}
            ></iframe>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </>
  );

  return design;
};

export default Index;
