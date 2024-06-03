import React from "react";
import "./index.scss";

const AboutPage = () => {
  return (
    <main>
      <div className="Container">
        <h1>About page</h1>
        <p>That is a About Page that is about myself</p>
        <div className="aboutSide">
          <div className="shortInformation">
            <b>Name</b> : <p>Elnur</p>
            <b>Surname</b> : <p>Atakişiyev</p>
            <b>Age</b> : <p>20</p>
            <b>Education</b> : <p>120 saylı tam orta məktəb | 2010-2021</p>
            <p>Azərbaycan Texniki Universiteti | 2021-2024</p>
            <b>Skills</b> :
            <p>
              HTML | Css | SaSS | JavaScript | Bootstrap | React | NodeJS |
              GitHub Actions | Python | Figma | JQuery |
            </p>
          </div>
          <div className="photo">
            <div className="empty">?</div>
            <b>I don't like put my photo to anywhere</b>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
