import React from "react";
import {BsInfoCircleFill} from "react-icons/bs"
import PageHeader from "../../components/pageHeaderContent";
const Resume=()=>{
    return(
        <section id="resume" className="resume">
            <PageHeader headerText="Resume" item={<BsInfoCircleFill size={40}/>}/>
        </section>
    );
};
export default Resume;