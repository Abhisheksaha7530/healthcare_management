import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          I'm Abhishek Saha, a passionate MERN stack developer currently pursuing my B.Tech from Techno Main Salt Lake. I have a strong interest in building scalable web applications and constantly strive to enhance my skills in full-stack development. 🚀
          </p>
          <p>We are all in 2025!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
          The project is made by our group where backend and frontend all look over by different people
          
          </p>
          <p>Lorem ipsum dolor sit amet!</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
