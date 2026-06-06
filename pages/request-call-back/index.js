import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/faq.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../Component/Navbar/Nabvar";
import RequestCallBack from "../../Component/Home/RequestCallback/CallBackForm/Callback";
import Footer from "../../Component/Home/Footer";
import MobNavbar from "../../Component/MobComp/MobNavbar/MobNavbar";
import Mobfooter from "../../Component/MobComp/MobHome/MobFooter";
// Tablet Component Import
import TabNavbar from "../../Component/TabComp/TabNavbar/TabNavbar";

import TabFooter from "../../Component/TabComp/TabHome/TabFooter";
const Index = () => {
  const design = (
    <>
      <Head>
        <title>ForexBlues</title>
        <meta name="Premium" content="Choose Your Plan" />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://forexblues.com/" />
        <title>Request Callback - Forexblues</title>
        <meta name="title" content="Request Callback - Forexblues" />
        <meta
          name="description"
          content="Request callback with our support team and Experts at Forexblues"
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
              </Container>
              <div
                style={{
                  marginTop: "-150px",
                }}
                className="d-flex justify-content-center "
              >
                <RequestCallBack />
              </div>
            </Row>
          </Container>
        </header>
        {/* End Header Section */}

        {/*Start  Main Section */}
        <main className={styles.main}></main>
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
                <RequestCallBack />
              </Col>
            </Row>
          </Container>
        </header>
        {/* End Mobile Version Header Section */}

        {/* Start Mobile Version Analytics Section */}
        <main>
          <Container className={styles.main}>
            <Row>
              <Col>{/* <MobAboutMain /> */}</Col>
            </Row>
          </Container>
        </main>
        {/* End Mobile Version Analytics Section */}

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
                <RequestCallBack />
              </Col>
            </Row>
          </Container>
        </header>
        {/* End Tablet Version Header Section */}

        {/* Start Tablet Version Analytics Section */}
        <main>
          <Container fluid className={styles.main}>
            <Row>
              <Col>{/* <TabAboutMain /> */}</Col>
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
