import React from "react";
import {BsInfoCircleFill} from "react-icons/bs"
import PageHeader from "../../components/pageHeaderContent";
const Skills=()=>{
    return(
        <section id="skills" className="skills">
            <PageHeader headerText="My skills" item={<BsInfoCircleFill size={40}/>}/>
        </section>
    );
};
export default Skills;