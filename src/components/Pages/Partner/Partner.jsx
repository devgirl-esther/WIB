import React, { useState } from "react";
import "./Partner.css";
import BtcModal from "./BtcModal";
import TransferModal from "./TransferModal";
import { IoClose, IoMenu } from "react-icons/io5";

const Partner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <section className="partner">
      <div className="partner-title">
        <h2>
          Partner<span className="pink"> With Us</span>
        </h2>
      </div>
      <p>
        Help sponsor our upcoming session focused on empowering women in Bitcoin
        through your generous donation. As a sponsor, you’ll increase awareness
        of your organization’s commitment to advancing women in digital finance,
        while directly supporting the logistics, materials, and expert
        facilitation of our session. Your contribution will help us provide
        accessible, high-quality education and networking opportunities to women
        across the region.
      </p>
      <div className="button-container">
        <button
          className="sendbtn"
          onClick={() =>
            window.open("mailto:Womenbitcoinclub@gmail.com", "_blank")
          }
        >
          Send an Email
        </button>
        <BtcModal isOpen={isModalOpen} onClose={toggleModal} />
        <button className="btn" onClick={toggleModal}>
          Donate
        </button>
      </div>
    </section>
  );
};

export default Partner;
