import React from "react";

const App: React.FC = () => {
  const playSong = () => {
    const audioElement = document.getElementById("audio") as HTMLAudioElement;
    audioElement.play();
  };

  const mediaPlay = () => {
    const videoElement = document.getElementById("video") as HTMLVideoElement;
    videoElement.play();
  };

  const setClipboard = () => {
    // Your implementation for copying to clipboard
  };

  const notification = () => {
    const notificationContent = document.getElementById("notification-content");
    if (notificationContent) {
      notificationContent.innerText = "message";
      const notificationContainer = document.getElementById("notification");
      if (notificationContainer) {
        notificationContainer.classList.remove("hide");
        setTimeout(() => {
          notificationContainer.classList.add("hide");
        }, 3000); // Hide the notification after 3 seconds
      }
    }
  };

  return (
    <>
      <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta content="🔗" property="og:title" />
      <meta content="src/assets/embed.png" property="og:image" />
      <meta content="#000001" data-react-helmet="true" name="theme-color" />
      <meta
        name="description"
        content="grek grek grek grek grek grek grek grek grek"
      />
      <meta name="keywords" content="grek" />
      <link rel="stylesheet" href="src/main.css" />
      <link rel="stylesheet" href="src/hover.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/vanphonggiang/font-awesome-6-pro/css/all.css"
      />
      <link rel="icon" type="image/x-icon" href="src/assets/embed.png" />
      <input type="checkbox" autoComplete="off" id="overlay-toggle" />
      <div className="overlay fullscreen">
        <div id="center">
          <label
            htmlFor="overlay-toggle"
            onClick={() => {
              playSong();
              mediaPlay();
            }}
          >
            <span
              className="no-hover"
              style={{
                fontFamily: '"Roboto Mono", sans-serif',
                fontSize: "0.6em",
                textShadow: "0 0 0.40em gray",
              }}
            >
              [ tap ]
            </span>
            <span
              className="hover"
              style={{
                fontFamily: '"Roboto Mono", sans-serif',
                fontSize: "0.6em",
                textShadow: "0 0 0.40em gray",
              }}
            >
              [ click ]
            </span>
          </label>
        </div>
      </div>
      <div id="notification" className="hide">
        <div className="content" id="notification-content" />
      </div>
      <audio id="audio">
        <source
          src="/y2mate.is - 7AM Slowed Reverb -YWlmovalqP0-192k-1691566370.mp3"
          type="audio/mpeg"
        />
      </audio>
      <div className="video-container">
        <video
          muted
          loop
          playsInline
          preload="auto"
          className="bg-video"
          id="video"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>

      <section className="fullscreen text-content">
        <div id="center">
          <h1
            style={{
              fontSize: 45,
              fontFamily: "Work Sans, sans-serif",
              textShadow: "0 0 0.15em gray",
            }}
          >
            suda
          </h1>
        </div>
        <div id="center">
          <br />
          <br />
          <br />
          <i
            className="fa-solid fa-gun"
            style={{ fontSize: 9, textShadow: "0 0 0.15em gray" }}
          />
          <i
            className="fa-solid fa-person"
            style={{ fontSize: 9, textShadow: "0 0 0.15em gray" }}
          />
          <i
            className="fa-solid fa-sack-dollar"
            style={{ fontSize: 9, textShadow: "0 0 0.15em gray" }}
          />
        </div>
        <div id="center">
          <br />
          <br />
          <br />
          <br />
          <br />
          <span
            id="typed"
            style={{
              fontSize: 15,
              fontFamily: '"Roboto Mono", monospace',
              textShadow: "0 0 0.15em gray",
            }}
          />
        </div>
        <div id="center">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1
            id="audio-info"
            style={{
              fontSize: 10,
              fontFamily: '"Roboto Mono", monospace',
              textShadow: "0 0 0.15em gray",
            }}
          >
            Playboi carti - 7AM Slowed+Reverb
          </h1>
        </div>
        <div id="center">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1
            id="audio-time"
            style={{
              fontSize: 9,
              fontFamily: '"Roboto Mono", monospace',
              textShadow: "0 0 0.15em gray",
            }}
          >
            *-–––––––––––––––––––––––––– 00:00
          </h1>
        </div>
        <div id="center">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <a
            href="https://www.instagram.com/suda_thegreat"
            className="hover-text"
            data-hover-text="@suda_thegreat"
            onClick={() => {
              setClipboard();
              notification();
            }}
          >
            <i
              className="fa-brands fa-instagram"
              style={{
                fontSize: 36,
                textShadow: "0 0 0.15em gray",
                color: "white",
              }}
            />
          </a>
          <a
            href="https://www.tiktok.com/@sudalovesae"
            className="hover-text"
            data-hover-text="@sudalovesae"
          >
            <i
              className="fa-brands fa-tiktok"
              style={{
                fontSize: 36,
                textShadow: "0 0 0.15em gray",
                color: "white",
              }}
            />
          </a>
          <a
            href="https://open.spotify.com/user/31qh4q2rgecbcabkfejwsnpaadgq"
            className="hover-text"
            data-hover-text="@sudalol"
          >
            <i
              className="fa-brands fa-spotify"
              style={{
                fontSize: 36,
                textShadow: "0 0 0.15em gray",
                color: "white",
              }}
            />
          </a>
          <a
            href="#"
            className="hover-text"
            data-hover-text="@sudalol"
            onClick={(e) => {
              e.preventDefault();
              setClipboard();
              notification();
            }}
          >
            <i
              className="fa-brands fa-discord"
              style={{
                fontSize: 36,
                textShadow: "0 0 0.15em gray",
                color: "white",
              }}
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default App;