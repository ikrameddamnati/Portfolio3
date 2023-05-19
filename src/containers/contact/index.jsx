import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeaderContent";

const Contact = () => {
  return (
    <section id="Contact" className="Contact">
      <PageHeader headerText="Contact" item={<BsInfoCircleFill size={40} />} />
    </section>
  );
};
export default Contact;