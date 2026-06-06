import { Accordion, Col, Container, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
const MobFaq = () => {
  const Design = (
    <>
      <Container style={{ fontSize: "12px" }}>
        <Row>
          <Col>
            <h1 className="mt-5 mb-4" style={{ color: "#ffffff" }}>
              FAQ
            </h1>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaAngleRight />{" "}
                  <span style={{ fontSize: "14px" }}>
                    Who are we and what makes us different?
                  </span>
                </Accordion.Header>
                <Accordion.Body style={{ fontWeight: "500" }}>
                  <p>
                    At Forexblues we are a selected group of professionals with
                    vast knowledge and experience in Trade & Forex, Foreign
                    Exchange Services, Supply chain & logistics, Freight
                    forwarding, Customs, Shipping Documentations, Schemes &
                    Licenses and more to name few.
                  </p>
                  <p>
                    Having a vast experience in the above fields working in
                    various industries we came across certain difficulties faced
                    by the exporters and importers. Some of them like
                    transparent booking of Forex while making remittances with
                    their respective banks, difficulties in getting freight
                    rates, logistics services and warehousing facilities within
                    short time period at various locations.
                  </p>
                  <p>
                    Here at Forexblues we have tried to solve all these problem
                    of the exporter and importers specially by providing all
                    services under one umbrella.
                  </p>
                  <div className="d-flex justify-content-center">
                    <div>
                      <Image
                        src="/Who_are_we.webp"
                        alt="who_are_we"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaAngleRight />{" "}
                  <span style={{ fontSize: "14px" }}>
                    Where can we make a difference and how?{" "}
                  </span>
                </Accordion.Header>
                <Accordion.Body style={{ fontWeight: "500" }}>
                  <p>
                    We can help our clients in booking the forex for their
                    remittances with at most transparency and accuracy. We are
                    having the various software and system i place to do all
                    these services.
                  </p>
                  <p>
                    'Timing the Forex' and giving suggestions to the clients to
                    book their rates for remittances Inward or Outward is the
                    most popular and sort after services at forexblues.
                  </p>
                  <p>
                    Transaction Process Outsourcing (TPO) service is the second
                    most preferred services whereby we help the clients to save
                    their money by first booking the forex with their respective
                    banks with at most transparency and secondly covering forex
                    at the best given rate at the accurate time in a days
                    fluctuation.
                  </p>
                  <p>
                    For example: If USD fluctuates in a day range from 64.50 to
                    64.88 , then we try to cover rates for exporter at around
                    64.85 approx. and for importer 64.55 approx. Thus giving a
                    margin saving or income of around 30 paise to both. We have
                    made expertise at this TPO service at a longer period of
                    time with experience.
                  </p>
                  <div className="d-flex justify-content-center">
                    <div>
                      <Image
                        src="/Difference.webp"
                        alt="Difference"
                        width={600}
                        height={500}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaAngleRight />
                  <span style={{ fontSize: "14px" }}>
                    What is our Unique Selling Proposition (USP)?
                  </span>
                </Accordion.Header>
                <Accordion.Body style={{ fontWeight: "500" }}>
                  <p>
                    "Transparency" in all the services is our Unique Selling
                    Proposition (USP).{" "}
                  </p>
                  <p>
                    {" "}
                    We try our best to give you accurate information, news and
                    data to bring transparency in between client , vendors &
                    company relationship.
                  </p>

                  <div className="d-flex justify-content-center">
                    <div>
                      <Image
                        src="/USP.webp"
                        alt="USP"
                        width={600}
                        height={500}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaAngleRight />
                  <span style={{ fontSize: "14px" }}>
                    {" "}
                    How can I avail ForexBlues Services?
                  </span>
                </Accordion.Header>
                <Accordion.Body style={{ fontWeight: "500" }}>
                  <p>
                    Anyone can avail the ForexBlues services by ­­­registering
                    himself/herself through Sign Up forms. Initially we provide
                    FREE 15 days subscription (Demo service) in your login
                    account, to understand our product and services, especially
                    the various aspects of our online forex advisory services.
                  </p>
                  <p>
                    After using the demo service, user will able to understand
                    the benefits of being associated with ForexBlues.
                  </p>
                  <p>
                    Once 15 days Subscription is over, user are requested to
                    upgrade towards the paid account as per the user
                    requirement. The paid plans are non-refundable and no money
                    back guarantee is given, once the users have paid the
                    amount.
                  </p>
                  <p>
                    We will give access of all other product & services once the
                    user will become our paid registered member for online forex
                    Advisory Services, except the Transaction Process
                    Outsourcing - TPO Services.
                  </p>
                  <p>
                    To avail the TPO services user has to pay separately time to
                    time as per the current plan.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaAngleRight />{" "}
                  <span style={{ fontSize: "14px" }}>
                    What is online forex Advisory Services of ForexBlues?
                  </span>
                </Accordion.Header>
                <Accordion.Body style={{ fontWeight: "500" }}>
                  <p>
                    Our unique online advisory services is the first of its kind
                    in the world where we provide our customers an instant
                    advise to Sell or Buy USD/INR currency on Spot rates. We try
                    to maintain utmost transparency while suggesting our clients
                    irrespective of their profile. The client needs to simply
                    Login into their account webpage and enter the amount of USD
                    transaction they want to remit or exchange through their
                    respective banks and click on to SELL or BUY function to get
                    and know our advises on current SPOT market.
                  </p>

                  <div className="d-flex justify-content-center">
                    <div>
                      <Image
                        src="/Online_forex_advisory.webp"
                        alt="Online_forex_advisory"
                        width={600}
                        height={500}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaAngleRight />{" "}
                  <span style={{ fontSize: "14px" }}>
                    Does forexblues have any percentage or profit sharing in
                    the....
                  </span>
                </Accordion.Header>
                <Accordion.Body style={{ fontWeight: "500" }}>
                  <p>
                    The rates and quotes given by vendors are their independent
                    quotes and forexblues does not hold any bearings or
                    liabilities of it. We even do not share or take away any
                    profit out of the rates quoted to the clients through the
                    vendors registered with us.
                    <br />
                    We neither suggest any vendor’s name to the clients to take
                    service with in particular nor do we try to favour any
                    vendor registered with us in any form. forexblues maintain
                    full transparency here
                    <br />
                    We even suggest our clients that before taking the service
                    of any one vendor for any of the product or services they
                    must know the vendor first and be well informed about its
                    reputation, services and other business aspects then only
                    get into the business.
                    <br />
                    Forexblues will not hold any liability of any loss arising
                    out of due to the vendors fault of any kind with whom they
                    are getting into the business.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaAngleRight />
                  <span style={{ fontSize: "14px" }}>
                    Explain SELL/BUY options given in the Forex Calculator?
                  </span>
                </Accordion.Header>
                <Accordion.Body style={{ fontWeight: "500" }}>
                  <p>
                    Any Individual Like NRI , money changer, exporter or even
                    companies whosoever wants to Sell foreign currency USD and
                    convert it into INR in the bank etc. will click on SELL
                    button option to know the market trend of demand supply of
                    US dollar and get our suggestions about the prediction of US
                    dollar of increase/decrease in near future in hourly &
                    weekly terms.
                    <br />
                    Similarly, anyone like importers, foreign education
                    students, money changers & NRI etc to name few who wants to
                    BUY foreign currency USD and send it their traders &
                    suppliers for example a supplier in china will click on BUY
                    button option to know the market trend of demand supply of
                    US dollar and get our suggestions about the prediction of US
                    dollar of increase/decrease in near future in hourly &
                    weekly terms.
                  </p>
                  <div className="d-flex justify-content-center">
                    <div>
                      <Image
                        src="/Buy_sell.webp"
                        alt="Buy_sell"
                        width={600}
                        height={500}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaAngleRight />
                  <span style={{ fontSize: "14px" }}>
                    What does Freeze Rate/ Hold Booking means given in the Forex
                    Calculator?
                  </span>
                </Accordion.Header>
                <Accordion.Body style={{ fontWeight: "500" }}>
                  <p>
                    Once the customer enters the USD amount in the calculator,
                    then they can choose among Sell or Buy option according to
                    their requirement. Here forexblues try to calculate and
                    analyse the demand and supply of US dollars and able to
                    suggest the increase or decrease (i.e Freeze Rate / Hold
                    Booking) in the rates of USD/INR based on that analysis of
                    the market in the given time.
                    <br />
                    Case A – For Exporters or Anyone converting USD to INR i.e
                    Selling
                    <br />
                    <br />
                    Freeze Rate : Here we suggests that the USD/INR rate is
                    going to fall based on less & falling demand of US dollars
                    in the market/banks or Increase in Supply of US Dollars in
                    the market/bank.
                    <br />
                    <br />
                    Hold Booking : When the USD/INR rate is going to increase
                    based on more & higher demand of US dollars in the
                    market/banks or decrease in Supply of US dollars in the
                    market/bank.
                    <br />
                    <br />
                    Case B – For Importers or Anyone converting INR to USD i.e
                    Buying
                    <br />
                    <br />
                    Freeze Rate : Here we suggests that the USD/INR rate is
                    going to increase based on high & increasing demand of US
                    dollars in the market/banks or reduced Supply of US Dollars
                    in the market/bank.
                    <br />
                    <br />
                    Hold Booking : When the USD/INR rate is going to decreased
                    based on less & reduced demand of US dollars in the
                    market/banks or increase in Supply of US dollars in the
                    market/bank.
                    <br />
                    <br />
                    In Simple terms the concept of demand and Supply goes
                    Vice-versa in opposite direction for Exporters & Importers
                    or Seller & Buyer.
                  </p>
                  <div className="d-flex justify-content-center">
                    <div>
                      <Image
                        src="/Buy_sell.webp"
                        alt="Buy_sell"
                        width={600}
                        height={500}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaAngleRight />
                  <span style={{ fontSize: "14px" }}>
                    How is Weekly Technical report given in the forexblues home
                    page?
                  </span>
                </Accordion.Header>
                <Accordion.Body style={{ fontWeight: "500" }}>
                  <p>
                    A team of experts into forex research and analysis does
                    round the clock monitoring of the technical and fundamental
                    news in the market across the globe. They keep a hawk eye
                    over the various news of micro and macro level not only in
                    India but the global news which helps us to determine the
                    future level of USD/INR pair of currency and its movement to
                    a far greater extent.
                    <br />
                    <br />
                    However although having a team of experts to analyze this we
                    never claim to give more than 70-80 percent accurate
                    suggestions in our Weekly or Daily technical view or
                    suggestions as the forex market is extremely volatile and
                    can be affected by news from across the globe within hours.
                  </p>
                  <div className="d-flex justify-content-center">
                    <div>
                      <Image
                        src="/Weekly-Technical-view.webp"
                        alt="Weekly-Technical-view"
                        width={600}
                        height={500}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaAngleRight />
                  <span style={{ fontSize: "14px" }}>
                    Please explain forexblues suggestions box?
                  </span>
                </Accordion.Header>
                <Accordion.Body style={{ fontWeight: "500" }}>
                  <p>
                    Suggestion box shows the suggestions to the Buyer/Seller of
                    changes on spot rate of USD/INR in limited section of time
                    to Hold Booking or Freeze Rate. This also shows how much a
                    customer can save per USD.
                    <br />
                    These rates are suggestive only and totally depend on the
                    customer’s sole discretion to follow the suggestion or not
                    <br />
                    Forexblues also manages a “ForexBlues Suggestions” box where
                    we try to inform our customer’s of our analysis made in a
                    day at the given time and how much money we have been able
                    to save to our clients with those suggestions. Also it’s a
                    kind of proving of our forex analysis and the claims made by
                    us of helping customers in saving their money.
                  </p>
                  <div className="d-flex justify-content-center">
                    <div>
                      <Image
                        src="/Suggestion-Box.webp"
                        alt="Suggestion-Box"
                        width={600}
                        height={500}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaAngleRight />
                  <span style={{ fontSize: "14px" }}>
                    How can I save more money by using ForexBlues services?
                  </span>
                </Accordion.Header>
                <Accordion.Body style={{ fontWeight: "500" }}>
                  <p>
                    Till date the smaller business fraternity, entrepreneurs,
                    individuals and NRI clients did not have the treasury like
                    facility and guidance given to them to save their hard
                    earned money to safe guard themselves to foreign currency
                    volatility and fluctuations.
                    <br />
                    <br />
                    At ForexBlues, we try our best to provide you this treasury
                    like guidance facility and assure 80-90 times of helping you
                    to earn, save money & live better by saving at least 20
                    paise to a rupee (Rs.1/-) per dollar transactions in a day
                    or two while you make your remittances inward or outward.
                    <br />
                    <br />
                    For example: If USD fluctuates in a day range from 64.50 to
                    64.88 , then we try to cover rates for exporter at around
                    64.85 approx. and for importer 64.55 approx. Thus giving a
                    margin saving or income of around 30 paise to both.
                    <br />
                    <br />
                    We hope these savings in foreign exchange will bring cheer
                    and smile to the face of our clients and satisfaction to us
                    proving our dedication towards the goal & services.
                  </p>
                  <div className="d-flex justify-content-center">
                    <div>
                      <Image
                        src="/Suggestion-Box.webp"
                        alt="Suggestion-Box"
                        width={600}
                        height={500}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default MobFaq;
