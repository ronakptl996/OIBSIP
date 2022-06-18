import React from "react";
import "./intro.css";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="intro">
      <div className="quotes">
        <div className="quotes_txt">
          <p>
            <span className="quotes_logo">
              <FaQuoteLeft />
            </span>
            <br />
            You have to dream before your dreams can come true <br />
            <span className="quotes_logo">
              <FaQuoteRight />
            </span>
          </p>
        </div>
        <div className="quotes_img">
          <img src="/kalamimg.webp" alt="" />
        </div>
      </div>

      <div className="introduction">
        <div className="intro_inner">
          <h1 className="about">About him</h1>
          <div className="history">
            <p>
              A.P.J. Abdul Kalam, in full Avul Pakir Jainulabdeen Abdul Kalam,
              (born October 15, 1931, Rameswaram, India—died July 27, 2015,
              Shillong), Indian scientist and politician who played a leading
              role in the development of India’s missile and nuclear weapons
              programs. He was president of India from 2002 to 2007.
            </p>
            <p>
              He spent four decades of his life as a researcher and science
              head, primarily at the Defense Research and Development
              Organization (DRDO) and Indian Space Research Organization (ISRO)
              and was personally required in India's civilian space program and
              military rocket advancement efforts.
            </p>
          </div>

          <div className="facts">
            <h2>Some Interesting Facts About Dr. A. P. J. Abdul Kalam</h2>
            <div className="fact">
              <ul>
                <li>
                  APJ Kalam was born on October 15, 1931, into a poor family.
                  His father had only one boat to support his family.
                </li>
                <li>
                  At the tender age of five, he started selling newspapers to
                  help his father support the family.
                </li>
                <li>
                  He missed an opportunity to become a fighter pilot for the
                  Indian Air force as he managed to secure ninth spot on the
                  list and there were only eight openings for the post.
                </li>
                <li>
                  He was the project director for Satellite Launch Vehicles at
                  the Indian Space Research Organization (ISRO). Under the
                  guidance of Kalam, India was able to launch the Rohini
                  satellite series into Earth’s orbit
                </li>
                <li>
                  He was honored with many awards, including the highest
                  civilian award in the country, the Bharat Ratna (1997). His
                  other awards include Padma Bhushan in 1981) and Padma
                  Vibhushan (1990).
                </li>
                <li>
                  He was known as the ‘Missile Man’ of India due to his
                  continued, successful work with ballistic missiles and launch
                  vehicle technology.
                </li>
                <li>
                  He became the president of India, on July 25, 2002. He was
                  known as “the People’s President” because of his simple and
                  down-to-earth attitude.
                </li>
                <li>
                  APJ Kalam’s visit to Switzerland is commemorated as Science
                  Day in the country.
                </li>
                <li>
                  On the occasion of his birthday, the United Nations (UN) in
                  2015 had declared to observe it as World Student’s Day.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
