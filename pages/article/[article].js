import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/News.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../Component/Navbar/Nabvar";
import NewsSlider from "../../Component/NewsCmp/NewsSlider";
import NewsMain from "../../Component/NewsCmp/NewsMain/NewsMain";
import Footer from "../../Component/Home/Footer";
import MobNavbar from "../../Component/MobComp/MobNavbar/MobNavbar";
import MobNewsSlider from "../../Component/MobComp/MobNewsCmp/MobNewsSlider";
import Mobfooter from "../../Component/MobComp/MobHome/MobFooter";
// Desktop 1280px
import MediumDesktopNavbar from "../../Component/DesktopComp/DesktopNavbar/MediumDesktopNavbar";
import MediumDesktopNewsSlider from "../../Component/DesktopComp/MediumDesktopNewsCmp/MediumDesktopNewsSlider";
import MediumDesktopNewsMain from "../../Component/DesktopComp/MediumDesktopNewsCmp/MediumDesktopNewsMain/MediumDesktopNewsMain";
import MediumDesktopFooter from "../../Component/DesktopComp/Home/MediumDesktopFooter";

import axios from "axios";

const Index = ({ data }) => {
  const design = (
    <>
      <Head>
        {/* Primary Tag */}
        <title>{data && data.title}</title>
        <meta name="title" content={data && data.title} />
        <meta name="description" content={data && data.description} />
        <link rel="canonical" href="https://forexblues.com/" />

        <meta
          name="google-site-verification"
          content="G0iS4js9vVuZAdlpBUNjj3DkxQFEUmRkvOm8_8r6wyI"
        />
        {/* Facebook */}
        <meta property="og:type" content={data && data.ogtype} />
        <meta property="og:url" content={data && data.ogurl} />
        <meta property="og:title" content={data && data.ogtitle} />
        <meta property="og:description" content={data && data.ogdescription} />
        <meta property="og:image" content={data && data.ogimage} />
        <meta property="og:image:width" content="715" />
        <meta property="og:image:height" content="402" />

        {/* Twitter */}
        <meta property="twitter:card" content={data && data.twittercard} />
        <meta property="twitter:url" content={data && data.twitterurl} />
        <meta property="twitter:title" content={data && data.twittertitle} />
        <meta
          property="twitter:description"
          content={data && data.twittertitle}
        />
        <meta property="twitter:image" content={data && data.twitterimage} />
        <link rel="icon" href="/favicon.png" />

        <style>
          {`   
          @media(min-width:1400px){
                              
                .desktopView{
                  display:block !important;
                }

                  .desktopMedium{
                    display:none !important;
                  }

                .mobileView{
                  display:none !important;
                }

                .tabView{
                  display:none !important;
                }

              }

              @media(min-width:992px)and (max-width:1399px){
                              
                .desktopView{
                  display:none !important;
                }

                .desktopMedium{
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

              .desktopMedium{
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

                .desktopMedium{
                    display:none !important;
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
                <NewsSlider />
              </Container>
            </Row>
          </Container>
        </header>
        {/* End Header Section */}

        {/*Start  Main Section */}
        <main className={styles.main}>
          <NewsMain />
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
                <MobNewsSlider />
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

      {/* --------------------------------------------------------------------------------------------------------------- */}
      {/* Start Desktop 1280px */}
      <Container
        fluid
        className="desktopMedium"
        style={{ padding: "0", margin: "0" }}
      >
        {/* Start Header Section */}
        <header className={styles.header}>
          <Container>
            <Row>
              <div
                style={{
                  width: "239px",
                  height: "445px",
                  backgroundColor: "white",
                  borderTopRightRadius: "38px",
                  transform: "rotate(71deg)",
                  marginTop: "-187px",
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
                <MediumDesktopNavbar />
                <MediumDesktopNewsSlider />
              </Container>
            </Row>
          </Container>
        </header>
        {/* End Header Section */}

        {/*Start  Main Section */}
        <main className={styles.main}>
          {" "}
          <MediumDesktopNewsMain />
        </main>
        {/*End  Main Section */}

        {/* Start Footer Section */}
        <footer className={styles.footer}>
          <MediumDesktopFooter />
        </footer>
        {/* End Footer Section */}
      </Container>
      {/* End Desktop 1280px */}
    </>
  );
  return design;
};

export default Index;

export const getServerSideProps = async (context) => {
  const slug = context.query.article;
  console.log(slug);
  const response = await axios({
    method: "GET",
    url: `https://cms.forexblues.com/json/staticmeta/meta_news_by_slug.php?news_slug=${slug}`,
  });
  return {
    props: {
      data: response.data,
    },
  };
};
