import React, { useState } from "react";
import { Card, CardDeck } from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Videos() {
  const options = ["Whiskey From Home Series", "Other Playlists"];

  const [defaultOption, setDefaultOption] = useState(options[0]);

  var videosResult = (
    <CardDeck style={{ marginTop: 5 }}>
      <Card style={{ borderRadius: 10, boxShadow: "0.5px 1px 7px #888888" }}>
        <a href="https://live.igo.events/live/21/whisky-from-home-how-to-thrive-in-crisis">
          <Card.Img
            style={{ borderRadius: 10 }}
            variant="top"
            src="https://igo-events.s3.amazonaws.com/igo-live/images/poster/whisky-party/WFH-Jamie-Nonis-EP10---Thumbnail.jpg"
          />
        </a>

        <Card.Body>
          <a
            style={{ color: "black" }}
            href="https://live.igo.events/live/21/whisky-from-home-how-to-thrive-in-crisis"
          >
            {" "}
            <Card.Title>WHISKY FROM HOME - How to Thrive in Crisis</Card.Title>
          </a>
          {/* <Card.Text>Streamed Live | 5:00pm, 12th June 2020</Card.Text> */}
        </Card.Body>
        <Card.Footer>
          <span className="text-muted">
            Streamed Live | 5:00pm, 12th June 2020
          </span>
        </Card.Footer>
      </Card>
      <Card style={{ borderRadius: 10, boxShadow: "0.5px 1px 7px #888888" }}>
        <a href="https://live.igo.events/live/18/whiskey-from-home-jamie-nonis-with-lily-kew">
          <Card.Img
            style={{ borderRadius: 10 }}
            variant="top"
            src="https://igo-events.s3.amazonaws.com/igo-live/images/poster/jamie-nonis-e02/Jamie-Nonis---Thumbnail.jpg"
          />
        </a>

        <Card.Body>
          <a
            style={{ color: "black" }}
            href="https://live.igo.events/live/18/whiskey-from-home-jamie-nonis-with-lily-kew"
          >
            {" "}
            <Card.Title>
              WHISKEY FROM HOME - Jamie Nonis with Lily Kew
            </Card.Title>
          </a>
          {/* <Card.Text>Streamed Live | 5:00pm, 12th June 2020</Card.Text> */}
        </Card.Body>
        <Card.Footer>
          <span className="text-muted">
            Streamed on iGo Live + IG TV | 5:00pm, 5th June 2020
          </span>
        </Card.Footer>
      </Card>
      <Card style={{ borderRadius: 10, boxShadow: "0.5px 1px 7px #888888" }}>
        <a href="https://live.igo.events/live/30/whisky-from-home-road-to-greatness">
          <Card.Img
            style={{ borderRadius: 10 }}
            variant="top"
            src="https://igo-events.s3.amazonaws.com/igo-live/images/poster/jamie-nonis/Jamie-Nonis---Thumbnail-EP08.jpg"
          />
        </a>

        <Card.Body>
          <a
            style={{ color: "black" }}
            href="https://live.igo.events/live/30/whisky-from-home-road-to-greatness"
          >
            {" "}
            <Card.Title>WHISKY FROM HOME - Road to greatness</Card.Title>
          </a>
          {/* <Card.Text>Streamed Live | 5:00pm, 12th June 2020</Card.Text> */}
        </Card.Body>
        <Card.Footer>
          <span className="text-muted">Live Streamed | 2nd June 2020</span>
        </Card.Footer>
      </Card>
    </CardDeck>
  );

  const otherVideos = (
    <Card
      style={{
        marginTop: 5,
        width: "18rem",
        borderRadius: 10,
        boxShadow: "0.5px 1px 7px #888888",
      }}
    >
      <a href="https://live.igo.events/live/23/completeme-love-webinar-align-your-mind-body-and-soul">
        <Card.Img
          style={{ borderRadius: 10 }}
          variant="top"
          src="https://igo-events.s3.amazonaws.com/igo-live/images/poster/completeMeWebinar/completeMe-Love-Webinar---Thumbnail.png"
        />
      </a>
      <Card.Body>
        <a
          style={{ color: "black" }}
          href="https://live.igo.events/live/23/completeme-love-webinar-align-your-mind-body-and-soul"
        >
          <Card.Title>
            CompleteMe Love Webinar: Align your Mind, Body and Soul
          </Card.Title>
        </a>
      </Card.Body>
      <Card.Footer>
        <span className="text-muted">Recorded Live on 13th June 2020</span>
      </Card.Footer>
    </Card>
  );

  const handleChange = (e) => {
    setDefaultOption(e.value);
    console.log(e.value);
  };

  return (
    <div>
      <Dropdown
        options={options}
        onChange={handleChange}
        value={defaultOption}
        placeholder="Select an option"
      />
      <br />

      {defaultOption == options[0] ? videosResult : otherVideos}
    </div>
  );
}

export default Videos;
