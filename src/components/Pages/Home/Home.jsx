import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import './Home.css'; 
import homepicture1 from '../../../assets/heropicture1.jpeg'
import homepicture2 from '../../../assets/heropicture2.jpeg'
import homepicture3 from '../../../assets/heropicture3.jpeg'
import homepicture4 from '../../../assets/heropicture6.jpg'
import homepicture5 from '../../../assets/heropicture7.jpg'
import grace from '../../../assets/grace.jpeg'
import eky from '../../../assets/eky.jpeg'
import olajumoke from '../../../assets/olajumoke.jpeg'
import sekinat from '../../../assets/sekinat.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      &#10095; 
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      &#10094; 
    </div>
  );
};

const Home = () => {

  
  const reviews = [
    {
      id: 1,
      text: "WBC has been an eye opener for women to see the importance of bitcoin in their finances and security in their financial transactions and investments.",
      name: "Eky",
      img: eky 
    },
    {
      id: 2,
      text: "The impact of WBC is enormous,but I'd say It has increased my level of  financial literacy by providing  access to financial tools and resources, as well as opportunities to participate in the digital economy. It has also empowered me to take control of my own finances and investments.",
      name: "Grace",
      img: grace 
    },
    {
      id: 3,
      text: "Women in Bitcoin Club is an example of how passion and the right support system can open doors to success in the world of Bitcoin. This proves that with determination and the willingness to learn, anyone can thrive in this innovative space.",
      name: " Princess Keenah",
      img: sekinat 
    },
    {
      id: 4,
      text: "Women in bitcoin is all about enlightenment of women about the bitcoin community and how it works. It has also  made me understand that women can participate in the global economy without relying on male-dominated financial institutions",
      name: "Olajumoke Ajayi",
      img: olajumoke 
    }
  ];
  const homepictures =[
    {
      id:1,
      img: homepicture1
    },
    {
      id: 2,
      img: homepicture2
    },
    {id: 3,
      img: homepicture3
    },
    {
      id:4 ,
      img: homepicture4
    }
    ,
    {
      id:5 ,
      img: homepicture5
    }
  ]

  return (
    <div>
  <section className="hero">
        <div className="hero-content">
          <h1>Empowering more Women <br />In The Bitcoin Ecosystem</h1>
          <p>We’re dedicated to educating, equipping, and empowering more women to excel in the world of Bitcoin.</p>
        </div>
        <div className='swiperimages'>
        <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      delay={1000}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // navigation={true}
      
    >
      {homepictures.map((item)=> {
        return <SwiperSlide><div>
        <img src={item.img} alt={item.id} className="carousel-image"/>
      </div></SwiperSlide>
      } )}
    </Swiper>
        </div>
        

       
             
      </section>
      <section className="mission">
      <div className="mission-content">
        <h2>Our Mission</h2>
        <p>
          Our Mission is to Educate, Empower & Support women. We offer accessible and comprehensive education on Bitcoin and blockchain technology to women across Africa. Provide the tools and resources necessary for women to participate confidently in the bitcoin space & build a strong, inclusive community that fosters collaboration, mentorship, and shared success.
        </p>
      </div>
    </section>
    <section className="reviews">
      <h2>What People Say About Us</h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <p className="review-text">"{review.text}"</p>
            <div className="review-details">
              <img src={review.img} alt={review.name} className="review-img" />
              <h4 className="reviewer-name">{review.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="subscribe">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Join our newsletter for exclusive content, upcoming event announcements, and Bitcoin insights.</p>
      <MailchimpSubscribe
    url="https://gmail.us6.list-manage.com/subscribe/post?u=aa67a9e45af9a5be7319fdd47&amp;id=75a979e810&amp;f_id=00f0cbe1f0" // replace with your Mailchimp URL
    render={({ subscribe, status, message }) => {
      let email;
      const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.value.includes("@")) {
          subscribe({ EMAIL: email.value });
        }
      };

      return (
        <form onSubmit={handleSubmit} className="subscribe-form">
          <div className="form-row">
    <input
      type="email"
      placeholder="Your email address"
      ref={(node) => (email = node)}
      className="email-input"
    />
    <button type="submit" className="subscribe-button">Subscribe</button>
  </div>
  
  {/* Status message below the input/button row */}
  {status === "sending" && <p className="status-message">Sending...</p>}
  {status === "error" && (
    <p className="status-message" style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />
  )}
  {status === "success" && (
    <p className="status-message" style={{ color: "green" }}>Subscribed successfully!</p>
  )}
        </form>
      );
    }}
      />
    </section>
    </div>
    
    
  );
};

export default Home;
