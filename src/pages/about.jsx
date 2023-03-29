import React from "react";
import Header from "../header";
import portrait from "../images/barcelonaKirke.jpg";
import linkedIn from "../images/linkedin.png";
import github from "../images/github.png";
import mail from "../images/mail.png";
import "../styles/about.css";

export default function About() {
  return (
    <>
      <Header />

      <div id="about">
        <figure>
          <img src={portrait} id="portrait" alt="" te />
          <figcaption id="portraitText">Made by Arian Sharifi</figcaption>
        </figure>

        <p id="aboutText">
          Hi, I&apos;m Arian. I&apos;m a student at the University of Oslo,
          studying Computer Science. <br />
          This is a simple webapp that fetches articles from numerous norwegian
          news sources and displays them. The application is built with React
          and Firebase, and the articles are fetched using Puppeteer.
        </p>

        <nav id="contactInfo">
          <div>
            <a href="https://no.linkedin.com/in/arian-sharifi-09a349233?trk=people-guest_people_search-card">
              <img src={linkedIn} alt="" />
            </a>
            <a href="https://github.com/ArianSha">
              <img src={github} alt="" />
            </a>
            <a href="mailto:ariansharifi99@gmail.com">
              <img src={mail} alt="" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
