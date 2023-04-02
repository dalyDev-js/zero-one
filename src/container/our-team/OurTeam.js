import React from "react";
import "./OurTeam.scss";
import { images } from "../../constants";

function OurTeam() {
  const handleImageClick = (e) => {
    e.preventDefault();
    // your code to handle the click event
  };
  const handleContextMenu = (e) => {
    e.preventDefault();
    // your code to handle the context menu event
  };
  return (
    <section className="containerOurteam" id="Our Team">
      <div className="meetH1">
        <h1>Meet Our Team</h1>
      </div>
      <div
        className="cardsContainer"
        onClick={handleImageClick}
        onContextMenu={handleContextMenu}>
        <div className="cardPerson">
          <div>
            <img src={images.ceo} alt="person1" />
          </div>
          <div className="names">
            <h2>Abdulrhman Al-Daly</h2>
            <p>CEO</p>
          </div>
        </div>
        <div className="cardPerson">
          <div>
            <img src={images.sumaia} alt="person1" />
          </div>
          <div className="names">
            <h2>Sumaia Al-Daly</h2>
            <p>Content Creator</p>
          </div>
        </div>
        <div className="cardPerson">
          <div>
            <img src={images.mariam} alt="person1" />
          </div>
          <div className="names">
            <h2>Marium Mahmoud</h2>
            <p>Digital Marketing Manager</p>
          </div>
        </div>

        <div className="cardPerson">
          <div>
            <img src={images.sherin} alt="person1" />
          </div>
          <div className="names">
            <h2>Sherin Helmy</h2>
            <p>Administrator</p>
          </div>
        </div>

        <div className="cardPerson">
          <div>
            <img src={images.mayada} alt="person1" />
          </div>
          <div className="names">
            <h2>Mayada Mostafa</h2>
            <p>Senior Instructor</p>
          </div>
        </div>
        <div className="cardPerson">
          <div>
            <img src={images.salma} alt="person1" />
          </div>
          <div className="names">
            <h2>Salma Ahmed</h2>
            <p>Senior Instructor</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
