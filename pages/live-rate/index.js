import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/SetAlert.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../Component/Navbar/Nabvar";
import Footer from "../../Component/Home/Footer";
import LiveRateHead from "../../Component/LiveRate/LiveRateHead/LiveRateHead";
import LiveRateMain from "../../Component/LiveRate/LiveRateMain/LiveRateMain";

import MobLiveRateHead from "../../Component/MobComp/MobLiveRate/MobLiveRateHead/MobLiveRateHead";
import MobLiveRateMain from "../../Component/MobComp/MobLiveRate/MobLiveRateMain/MobLiveRateMain";

import MobNavbar from "../../Component/MobComp/MobNavbar/MobNavbar";
import Mobfooter from "../../Component/MobComp/MobHome/MobFooter";
// Tablet Component Import
import TabNavbar from "../../Component/TabComp/TabNavbar/TabNavbar";

import TabFooter from "../../Component/TabComp/TabHome/TabFooter";
import TabLiveRateHead from "../../Component/TabComp/TabLiveRate/TabLiveRateHead/TabLiveRateHead";
import TabLiveRateMain from "../../Component/TabComp/TabLiveRate/TabLiveRateMain/TabLiveRateMain";

import Cookies from "universal-cookie";
const Index = () => {
  const design = (
    <>
      <Head>
        <title>ForexBlues</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://forexblues.com/" />
        <title>Currency Live Rates - Forexblues</title>
        <meta name="title" content="Currency Live Rates - Forexblues" />
        <meta
          name="description"
          content="Get Currency Live Rates on Forexblues 2023"
        />
        <meta
          name="google-site-verification"
          content="G0iS4js9vVuZAdlpBUNjj3DkxQFEUmRkvOm8_8r6wyI"
        />
        <style>
          {`   

              @media(min-width:992px){
                              
                .desktopView{
                  display:block !important;
                }

                .mobileView{
                  display:none !important;
                }

                .tabView{
                  display:none !important;
                }

              }

             @media(min-width:768px) and (max-width:992px){
              .mobileView{
                display:none !important;
              }
          
              .desktopView{
                display:none !important;
              }

              .tabView{
                display:block !important;
              }
             }

              @media(max-width:768px){
                .mobileView{
                  display:block !important;
                }
            
                .desktopView{
                  display:none !important;
                }

                .tabView{
                  display:none !important;
                }
              }

              `}
        </style>
      </Head>

      <Container
        fluid
        style={{ padding: "0", margin: "0" }}
        className="desktopView"
      >
        {/* Start Header Section */}
        <header className={styles.header}>
          <Container>
            <Row>
              <div
                className={styles.logobox}
                style={{
                  width: "209px",
                  height: "445px",
                  backgroundColor: "white",
                  borderTopRightRadius: "38px",
                  transform: "rotate(71deg)",
                  marginTop: "-177px",
                  marginLeft: "-133px",
                }}
              />
              <Container
                className="mt-4"
                style={{
                  position: "absolute",
                  zIndex: "999",
                  top: 0,
                  left: 0,
                }}
              >
                <Navbar />
                <LiveRateHead />
              </Container>
            </Row>
          </Container>
        </header>
        {/* End Header Section */}

        {/*Start  Main Section */}
        <main className={styles.main}>
          <LiveRateMain />
        </main>
        {/*End  Main Section */}

        {/* Start Footer Section */}
        <footer className={styles.footer}>
          <Footer />
        </footer>
        {/* End Footer Section */}
      </Container>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* Mobile Version Start  */}
      {/* Start Mobile Version Header Section */}
      <Container className="mobileView p-0">
        <header className={styles.mobHeader}>
          <Container fluid>
            <Row>
              <Col>
                <MobNavbar />
                <MobLiveRateHead />
              </Col>
            </Row>
          </Container>
        </header>
        {/* End Mobile Version Header Section */}

        {/* Start Mobile Version SetAlert Section */}
        <main>
          <Container className={styles.main}>
            <Row>
              <Col>
                <MobLiveRateMain />
              </Col>
            </Row>
          </Container>
        </main>
        {/* End Mobile Version SetAlert Section */}

        <footer className={styles.footer}>
          <Mobfooter />
        </footer>
      </Container>

      {/* Mobile Version End */}

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* Tablet Version Start  */}
      {/* Start Tablet Version Header Section */}
      <Container fluid className="tabView p-0">
        <header className={styles.mobHeader}>
          <Container fluid>
            <Row>
              <Col>
                <TabNavbar />
                <TabLiveRateHead />
              </Col>
            </Row>
          </Container>
        </header>
        {/* End Tablet Version Header Section */}

        {/* Start Tablet Version Analytics Section */}
        <main>
          <Container fluid className={styles.main}>
            <Row>
              <Col>
                <TabLiveRateMain />
              </Col>
            </Row>
          </Container>
        </main>
        {/* End Tablet Version Analytics Section */}

        <footer fluid className={styles.footer}>
          <TabFooter />
        </footer>
      </Container>

      {/* Tablet Version End */}
    </>
  );
  return design;
};

export default Index;
