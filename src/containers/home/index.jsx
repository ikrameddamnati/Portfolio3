import React from "react";
import "./style.scss";
import {useNavigate} from "react-router-dom";
import {Animate} from 'react-simple-animate';
const Home = () => {
  const navigate=useNavigate();
  const handleNavigationToContactMePage=()=>{
    navigate("/contact")
  }
  return (
    <section className="home" id="home">
      <div className="home_text-wrapper">
        <h1>
          salut, je suis Ikram Ed-damnti <br/> Eleve ingénieur 
        </h1>
      </div>
      <Animate play duration={1.5} delay={1} start={{
        transform:"translateY(550px)",
      } }
        end={{
          transform:"translatex(0px)",
        }} >
          <div className="home_contact-me">
            <button onClick={handleNavigationToContactMePage}>contact-me</button>
          </div>

      </Animate>
    </section>
  );
};
export default Home;
