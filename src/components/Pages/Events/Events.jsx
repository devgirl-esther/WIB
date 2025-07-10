import React, { useState } from "react";
import "./Events.css";
import event from "../../../assets/WBC5.png";
import eventimage1 from '../../../assets/eventimage1.png'
import eventimage2 from '../../../assets/eventimage2.png'
import eventimage3 from '../../../assets/eventimage3.png'
import eventimage4 from '../../../assets/eventimage4.png'


const Event = () => {
  return (
    <section className="event">
      <div className="event-title">
        <h2>Upcoming Events</h2>
      </div>
      <div>
        <img className="noevent" src={event} alt="noevent" />
      </div>
      <h2 className="eventgallery">Images from Past Events</h2>
      <div className="image-container">
        <img src={eventimage1} alt="Image 1" />
        <img src={eventimage2} alt="Image 2" />
         <img src={eventimage3} alt="Image 3" />
        <img src={eventimage4} alt="Image 4" /> 
      </div>
    </section>
  );
};

export default Event;
