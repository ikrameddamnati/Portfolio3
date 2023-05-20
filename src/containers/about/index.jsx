import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import "./styles.scss";

const personalDetails = [
  {
    label: "Name",
    value: "ikram ed-damnati",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Address",
    value: "maroc",
  },
  {
    label: "Email",
    value: "eddmnatiikram123@gmail.com",
  },
  {
    label: "Contact No",
    value: "+212 629788586",
  },
  {
    label: "Facebook",
    value: "https://web.facebook.com/ikram.ed.98",
  },
  {
    label: "Linked IN",
    value: "https://www.linkedin.com/in/ikram-ed-damnati-4617a0261/",
  },
  {
    label: "Github",
    value: "https://github.com/ikrameddamnati",
  },
];

const jobSummary = "Hello! My name is Ikram Ed-Damnati, and I am a computer science student currently studying at ENSAJ (École Nationale des Sciences Appliquées de EL Jadida). I have a strong passion for technology and an eagerness to expand my knowledge and skills in the field of computer science.\n\nThroughout my academic journey, I have acquired a solid foundation in various aspects of computer science, including programming, algorithms, data structures, and software development. These studies have equipped me with the necessary theoretical knowledge to excel in my field.\n\nI am constantly seeking opportunities to apply my knowledge in practical settings. One of my notable achievements was working on a collaborative project where I developed a web application that streamlined notes managment . This experience allowed me to showcase my problem-solving abilities, attention to detail, and effective teamwork.\n\nAs a computer science student, I am particularly interested in areas such as data analysis, and software engineering. I stay up-to-date with the latest advancements in these fields and actively engage in projects and online courses to further enhance my skills.\n\nIn addition to my technical skills, I value effective communication and collaboration. I believe that working well in a team and effectively conveying ideas are crucial for successful project outcomes. I enjoy exchanging knowledge and perspectives with others, as it helps foster a dynamic and innovative environment.\n\nOverall, I am a dedicated and motivated individual passionate about computer science and its applications.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Computer science student</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
