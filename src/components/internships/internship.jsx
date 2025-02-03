import React from "react";
import './internship.css';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {MdWork} from 'react-icons/md'
import {BsPinFill} from 'react-icons/bs'

 
const Internship = () => {
    return(
        <section id="internship">

            <h5>Past Experiences</h5>
            <h2>Work and Internships</h2>
        
            <VerticalTimeline 
                animate="true"
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Dec 2024"
                    icon={<MdWork/>}
                    contentStyle={{ background: 'var(--color-primary-variant)',color:'#fff'}}
                    contentArrowStyle={{ borderRight: '7px solid  var(--color-primary-variant)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    id="SMRT"
                >
                    <h4 className="vertical-timeline-element-title">UI/UX Developer</h4>
                    <h5 className="vertical-timeline-element-subtitle">SMRT, Singapore</h5>
                    <h5 className="content">
                    </h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan-May 2022"
                    icon={<MdWork/>}
                    contentStyle={{ background: 'var(--color-bg-variant)' }}
                    contentArrowStyle={{ borderRight: '7px solid  var(--color-bg-variant)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    id="makino"
                >
                    <h4 className="vertical-timeline-element-title">Software Engineer Intern</h4>
                    <h5 className="vertical-timeline-element-subtitle">Makino Asia, Singapore </h5>
                    <h5 className="content">
                        <li>
                            <ul className="work-done"><BsPinFill color="var(--color-primary)"/> Created 3D Model Web Viewer with HTML, CSS, Javascript, Angular and three.js for Job Manager </ul>
                            <ul className="work-done"><BsPinFill color="var(--color-primary)"/> Coordinated with software developers and QA to design and prototype UI/UX solutions for Web Applications </ul>
                            <ul className="work-done"><BsPinFill color="var(--color-primary)"/> Streamlined company's supplier, GS Precision production line with Zoller TMS (Tools Management System), a software to complete tools, individual components and manage tooling sheets </ul>
                        </li>
                    </h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan-June 2019"
                    icon={<MdWork/>}
                    contentStyle={{ background: 'var(--color-primary-variant)',color:'#fff'}}
                    contentArrowStyle={{ borderRight: '7px solid  var(--color-primary-variant)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    id="synagie"
                >
                    <h4 className="vertical-timeline-element-title">Business Development Intern</h4>
                    <h5 className="vertical-timeline-element-subtitle">Synagie, Malaysia</h5>
                    <h5 className="content">
                        <li>
                            <ul className="work-done"><BsPinFill color="var(--color-primary)"/> Organized Daily Sales Report to keep track on the performance of company and provided
                            statistical report on market pricing for further evaluation</ul>
                            <ul className="work-done"><BsPinFill color="var(--color-primary)"/> Created tracking system to reduce non-fulfillment and late shipment rate for company's production</ul>
                            <ul className="work-done"><BsPinFill color="var(--color-primary)"/> Pitched for business opportunities in Finlab, an Innovation Accelerator by UOB to assist businesses on their digitalisation journey</ul>
                        </li>
                    </h5>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    )
}

export default Internship; 