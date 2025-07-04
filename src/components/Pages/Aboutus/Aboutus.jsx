import React from 'react';
import './Aboutus.css'

const About = () => {
  return (
    <div>
    <section className="about">
        <div className="about-title">
        <h2>About<span className='pink'> Us</span></h2>
    </div>
      <p>
      We are a non-profit organization dedicated to educating and empowering African girls and women about Bitcoin. Our mission is to break down barriers, foster financial independence, and create a supportive community where women can learn, grow, and thrive in the world of bitcoin.
      </p>
      <p>
      At Women Bitcoin Club, we believe that financial literacy and access to  technology are essential tools for empowering women and driving social change. Through interactive workshops, webinars, and community events, we provide resources and knowledge to help women understand Bitcoin, navigate the bitcoin ecosystem, and explore the opportunities in the bitcoin space.
      </p>
    </section>
    <section className="who">
    <div className="who-title">
      <h2>Who<span className='pink'> Are We</span></h2>
  </div>
  <div className="who-grid">
  <div className='missiongrid'>
      <h3>Our Mission</h3>
      <p><span className='pink'>Educate:</span> Offering accessible and comprehensive education on Bitcoin and blockchain technology to women across Africa.</p>
      <p><span className='pink'>Empower:</span> Providing the tools and resources necessary for women to participate confidently in the bitcoin space.</p>
      <p><span className='pink'>Support:</span> Building a strong, inclusive community that fosters collaboration, mentorship, and shared success.</p>
  </div>
  <div className='visiongrid'>
      <h3>Our Vision</h3>
      <p>To be a leading platform that champions the inclusion of women in Bitcoin, inspiring a new generation of female leaders and innovators.</p>
  </div>
</div>


  </section>
  </div>
  );
};

export default About;
