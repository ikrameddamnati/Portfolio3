import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeaderContent";

const Portfolio = () => {
  return (
    <section id="Portfolio" className="Portfolio">
      <PageHeader headerText="Portfolio" item={<BsInfoCircleFill size={40} />} />
    </section>
  );
};

export default Portfolio;
