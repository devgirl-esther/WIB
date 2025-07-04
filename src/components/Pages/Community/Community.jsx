import React from "react";
import "./Community.css";
import becomementor from "../../../assets/Mentorship.jpeg";
import community from "../../../assets/community.jpg";
import lead from "../../../assets/lead.jpg"

const Community = () => {
  return (
    <div>
      <section className="community">
        <div className="community-title">
          <h1>Connect and Thrive with Bitcoin Queens</h1>
        </div>
        <p>
          Come into a community where women take the lead in Bitcoin.
          Collaborate with others who share your passion, access resources, and
          play a key role in pioneering the future of digital finance.
        </p>
        <div className="member">
        <div className="chapter">
          <img className="communityimage" src={community} alt="community"/>
        </div>
          <a href="https://forms.gle/twbmnD71RxWiruAXA" target="_blank">
            <button id="becomemember">Become a Member</button>
          </a>
        </div>
      </section>
      <section className="becomementor">
        <div className="becomementor-title">
          <h2>Become a Mentor</h2>
          
        </div>
        <div className="chapter">
          <img className="becomementorimage" src={becomementor} alt="joinchapterimage"/>
        </div>
        <a href="https://forms.gle/bagp9eFLcaeskY6x5" target="_blank">

        <button classname="becomementor">Become a Mentor</button>
        </a>
      </section>
      <section className="leadchapter">
        <div className="leadchapter-title">
          <h2>
            Lead A <span>Chapter</span>
          </h2>
        </div>
        <div classname="chapter">
          <img className="leadimage" src={lead} alt="community"/>
        </div>
        <p className="startchapterp">
          If you’re passionate about Bitcoin and empowering women, now’s your
          chance to lead. Bring the WBC movement to your campus, inspire others,
          and make a lasting impact in the world of digital finance.
        </p>
        <a href="https://forms.gle/XLfBQT5tyGKQJw966" target="_blank">
            <button id="becomemember">Start Chapter</button>
          </a>
      </section>
    </div>
  );
};

export default Community;
