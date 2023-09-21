import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="text-center m-5">
      <p className="display-3 fw-bold me-3"></p>
      <p>
        <u>
          Copyright © <i>2023</i>{" "}
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/israrrashid/?originalSubdomain=pk"
          >
            Israr Rashid
          </Link>
          . All rights reserved. Produced under the sponsorship of{" "}
          <strong>
            <Link
              target="_blank"
              to="https://www.linkedin.com/showcase/techliftpk/?originalSubdomain=pk"
            >
              TechLift
            </Link>
          </strong>{" "}
          Incubator:{" "}
          <Link
            target="_blank"
            to="https://www.linkedin.com/school/game-train/"
          >
            Game Train{" "}
          </Link>
          Instructor:{" "}
          <Link
            target="_blank"
            to="https://pk.linkedin.com/in/imran-shabbir-394b97252?trk=people-guest_people_search-card"
          >
            Imran Shabbir{" "}
          </Link>
        </u>
      </p>
    </footer>
  );
};

export default Footer;
