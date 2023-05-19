import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeaderContent";

const About = () => {
  return (
    <section id="About" className="About">
      <PageHeader headerText="About" item={<BsInfoCircleFill size={40} />} />
    </section>
  );
};
export default About;