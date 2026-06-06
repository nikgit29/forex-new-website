import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import NavBar from "../Component/Navbar/Nabvar";
import Testimonial from "../Component/Testimonail/Testimonial";
import FAQ from "../Component/FAQ/Faq";
import MobNavbar from "../Component/MobComp/MobNavbar/MobNavbar";
import MobSaveMoney from "../Component/MobComp/MobHome/MobSaveMoney";
import MobAnalytics from "../Component/MobComp/MobHome/MobAnalytics";
import Mobfooter from "../Component/MobComp/MobHome/MobFooter";
import SaveMoney from "../Component/Home/SaveMoney";
import MobFaq from "../Component/MobComp/MobFAQ/MobFaq";
import MobOurClients from "../Component/MobComp/MobOurClients/MobOurClients";
import Analytics from "../Component/Home/Analytics";
import OurClients from "../Component/ourClients/OurClients";
import Footer from "../Component/Home/Footer";
// Tablet Component Import
import TabNavbar from "../Component/TabComp/TabNavbar/TabNavbar";
import TabSaveMoney from "../Component/TabComp/TabHome/TabSaveMoney";
import TabAnalytics from "../Component/TabComp/TabHome/TabAnalytics";
import TabFooter from "../Component/TabComp/TabHome/TabFooter";
import TabOurClients from "../Component/TabComp/TabOurClients/TabOurClients";
import axios from "axios";

// Desktop 1280px
import MediumDesktopNavbar from "../Component/DesktopComp/DesktopNavbar/MediumDesktopNavbar";
import MediumDesktopSaveMoney from "../Component/DesktopComp/Home/MediumDesktopSaveMoney";
import MediumDesktopAnalytics from "../Component/DesktopComp/Home/MediumDesktopAnalytics";
import MediumDesktopFooter from "../Component/DesktopComp/Home/MediumDesktopFooter";

const Index = ({ data1, data2, breakingStory, checkTimeData, logoData,}) => {
  const color = "#F8F9FA";
  const design = (
    <>
      <Head>
        {/* Primary Tag */}
        <title>{data2 && data2.title}</title>
        <meta name="title" content={data2 && data2.title} />
        <meta name="description" content={data2 && data2.description} />
        <link rel="canonical" href="https://forexblues.com/" />
        <meta
          name="google-site-verification"
          content="G0iS4js9vVuZAdlpBUNjj3DkxQFEUmRkvOm8_8r6wyI"
        />
        {/* Facebook */}
        <meta property="og:type" content={data2 && data2.ogtype} />
        <meta property="og:url" content={data2 && data2.ogurl} />
        <meta property="og:title" content={data2 && data2.ogtitle} />
        <meta
          property="og:description"
          content={data2 && data2.ogdescription}
        />
        <meta property="og:image" content={data2 && data2.ogimage} />

        {/* Twitter */}
        <meta property="twitter:card" content={data2 && data2.twittercard} />
        <meta property="twitter:url" content={data2 && data2.twitterurl} />
        <meta property="twitter:title" content={data2 && data2.twittertitle} />
        <meta
          property="twitter:description"
          content={data2 && data2.twittertitle}
        />
        <meta property="twitter:image" content={data2 && data2.twitterimage} />
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

        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '232307651954477');
              fbq('track', 'PageView');
            `,
          }}
        />
      </Head>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=232307651954477&ev=PageView&noscript=1"
        />
      </noscript>
      <Container
        fluid
        className="desktopView"
        style={{ padding: "0", margin: "0" }}
      >
        {/* Start Header Section */}
        <header className={styles.header}>
          <Container>
            <Row>
              <div
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
                <NavBar />
                <SaveMoney newsSlider={data1} />
              </Container>
            </Row>
          </Container>
        </header>
        {/* End Header Section */}

        {/*Start  Main Section */}
        <main className={styles.main}>
          <Analytics breakingStory={breakingStory} checkTimeData={checkTimeData} />
          <Testimonial />
          <OurClients logoData={logoData}/>
          <FAQ color={color} />
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
                <MobSaveMoney newsSlider={data1} />
              </Col>
            </Row>
          </Container>
        </header>
        {/* End Mobile Version Header Section */}

        {/* Start Mobile Version Analytics Section */}
        <main>
          <Container className={styles.main}>
            <Row>
              <Col>
                <MobAnalytics  breakingStory={breakingStory} checkTimeData={checkTimeData} />
                <Testimonial />
                <MobOurClients logoData={logoData}/>
                <MobFaq color={color} />
              </Col>
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
                <TabSaveMoney newsSlider={data1} />
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
                <TabAnalytics breakingStory={breakingStory} checkTimeData={checkTimeData} />
                <Testimonial />
                <TabOurClients logoData={logoData}/>
                <FAQ color={color} />
              </Col>
            </Row>
          </Container>
        </main>
        {/* End Tablet Version Analytics Section */}

        <footer className={styles.footer}>
          <TabFooter />
        </footer>
      </Container>
      {/* Tablet Version End */}
      {/* ---------------------------------------------------------------------------------------------------------- */}
      {/* Start Desktop 992px to 1399px */}
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
                <MediumDesktopSaveMoney newsSlider={data1} />
              </Container>
            </Row>
          </Container>
        </header>
        {/* End Header Section */}

        {/*Start  Main Section */}
        <main className={styles.main}>
          {" "}
          <MediumDesktopAnalytics  breakingStory={breakingStory} checkTimeData={checkTimeData} />
          <Testimonial />
          <OurClients logoData={logoData}/>
          <FAQ color={color} />
        </main>
        {/*End  Main Section */}

        {/* Start Footer Section */}
        <footer className={styles.footer}>
          <MediumDesktopFooter />
        </footer>
        {/* End Footer Section */}
      </Container>
      {/* End Desktop 992px to 1399px */}
    </>
  );

  return design;
};

export default Index;

// Homepage News Slider

export const getServerSideProps = async () => {
  const response1 = await axios({
    method: "GET",
    url: "https://cms.forexblues.com/json/api/homepage-news-slider?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
  });

  const response2 = await axios({
    method: "GET",
    url: "https://cms.forexblues.com/json/staticmeta/meta_home.php",
  });

  const response3 = await axios({
    method: "POST",
    url: "https://cms.forexblues.com/json/api/breaking-story.php?authkey=w98dfx4t321sfef9872r54inp54er43rgj0987s",
  });

const response4 = await axios({
  method: "GET",
  url: "https://cms.forexblues.com/json/api/check_time.php",
});

 const response5 = await axios.get(
    "https://cms.forexblues.com/json/api/get-logo.php"
  );
  return {
    props: {
      data1: response1.data,
      data2: response2.data,
       breakingStory:
        response3.data &&
        response3.data.length > 0
          ? response3.data[0].headline
          : "",
          checkTimeData: response4.data || {},
          logoData: Array.isArray(response5.data) ? response5.data : [],
    },
  };
};
// Homepage News Slider code
