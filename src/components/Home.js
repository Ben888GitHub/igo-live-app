import React from "react";
import {
  Jumbotron,
  Container,
  Image,
  Row,
  Col,
  Carousel,
  Button,
  Card,
  CardDeck,
} from "react-bootstrap";

function Home() {
  return (
    <Carousel
      style={{
        borderStyle: "hidden",
        borderRadius: 20,
        // boxShadow: "0.5px 1px 7px #888888",
      }}
    >
      <Carousel.Item style={{ height: "480px" }} interval={1200}>
        <Jumbotron style={{ borderRadius: 20, height: "480px" }}>
          <a href="https://live.igo.events/live/21/whisky-from-home-how-to-thrive-in-crisis">
            <Image
              style={{
                width: 350,
                height: 350,
                float: "left",
                marginRight: 20,
              }}
              src="https://igo-events.s3.amazonaws.com/igo-live/images/poster/whisky-party/WFH-Jamie-Nonis-EP10---Thumbnail.jpg"
              thumbnail
            />
          </a>

          <a
            style={{ color: "black" }}
            href="https://live.igo.events/live/21/whisky-from-home-how-to-thrive-in-crisis"
          >
            <h4> WHISKY FROM HOME - How to Thrive in Crisis</h4>
          </a>

          <h4 style={{ fontWeight: "300" }}>
            Streamed Live | 5:00pm, 12th June 2020
          </h4>
          <p style={{ fontSize: 16 }}>
            Is it possible to thrive in a crisis? Absolutely.
            <br />
            <br />
            This Friday, I speak with a professional in human flourishing —
            Stephen Lew, founder and CEO of The School of Positive Psychology
            and host of the Getting Naked with Happiness podcast.
            <br />
            <br />
            Stephen will share practical tips and strategies to find the calm in
            chaos and best manage our fears and anxiety during these turbulent
            times as well as build resilience in the process, so that we all
            have a fighting chance to rise above our current challenges and
            thrive!
          </p>
          {/* <p>
                <Button variant="primary">Learn more</Button>
              </p> */}
        </Jumbotron>
      </Carousel.Item>
      <Carousel.Item style={{ height: "480px" }} interval={1200}>
        <Jumbotron style={{ borderRadius: 20, height: "480px" }}>
          <a href="https://live.igo.events/live/30/whisky-from-home-road-to-greatness">
            <Image
              style={{
                width: 350,
                height: 350,
                float: "left",
                marginRight: 20,
              }}
              src="https://igo-events.s3.amazonaws.com/igo-live/images/poster/jamie-nonis/Jamie-Nonis---Thumbnail-EP08.jpg"
              thumbnail
            />
          </a>
          <a
            style={{ color: "black" }}
            href="https://live.igo.events/live/30/whisky-from-home-road-to-greatness"
          >
            <h4> Whisky From Home</h4>
          </a>

          <h4 style={{ fontWeight: "300" }}>Live Streamed | 2nd June 2020</h4>
          <p style={{ fontSize: 16 }}>Whisky From Home Series</p>
        </Jumbotron>
      </Carousel.Item>
      <Carousel.Item style={{ height: "480px" }} interval={1200}>
        <Jumbotron style={{ borderRadius: 20, height: "480px" }}>
          <a href="https://live.igo.events/channel/21/jamie">
            <Image
              style={{
                width: 350,
                height: 350,
                float: "left",
                marginRight: 20,
              }}
              src="https://igo-events.s3.amazonaws.com/igo-live/channels/jamie/Jamie-Nonis-Profile.png"
              thumbnail
            />
          </a>

          <h4> Jamie Nonis</h4>
          <h4 style={{ fontWeight: "300" }}>
            Independent Journalist, Founder of The Writers Club, Upcoming Author
            & Podcast Host
          </h4>
          <p style={{ fontSize: 16 }}>
            And now just like that, I have a complete series to call my own. I'd
            like to give something back for all the love I've received so I've
            partnered with iGo Asia to broadcast my whole series as
            videos-on-demand so you can watch back episodes. And if you felt it
            added value to you, you can leave a donation where 100% of the
            proceeds will go to Majulah Movement, which has been doing an
            amazing job providing meals and treat packs for healthcare and
            migrant workers in Singapore.
          </p>
          {/* <p>
                <Button variant="primary">Learn more</Button>
              </p> */}
        </Jumbotron>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
