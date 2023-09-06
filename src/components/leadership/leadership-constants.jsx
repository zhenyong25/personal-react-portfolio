import img1 from '../../assets/garage-eee.jpg'
import img2 from '../../assets/ies-singapore.png'
import img3 from '../../assets/rotaract-club.png'
import img4 from '../../assets/msa-ntu.png'

import garage1 from '../../assets/garage-1.jpg'
import garage2 from '../../assets/garage-2.jpg'
import garage3 from '../../assets/garage-3.jpg'
import garage4 from '../../assets/garage-4.jpg'

import ies1 from '../../assets/ies-1.jpg'
import ies2 from '../../assets/ies-2.jpg'
import ies3 from '../../assets/ies-3.jpg'

import rotaract1 from '../../assets/rotaract-1.jpg'

import msa1 from '../../assets/msa-1.jpg'

export const data = [
    {
        id: 1,
        image: img1,
        title: 'Garage@EEE',
        description: 'Garage@EEE is a student-led makerspace in the School of Electrical and Electronic Engineering. Garage@EEE provides the environment, materials, and funding for students to develop their ideas, alongside their technical skills. Furthermore, we run creative initiatives to provide opportunities for our ambassadors to enhance other holistic skills',
        activities: [garage1,garage2,garage3,garage4],
        role: {
            "VP Operations":{
                description:["Lead a team of 50 operations members in Garage@EEE",
                "Managed budget and reimbursement claims for Garage@EEE",
                "Built a Project Storage System for students to store their projects in Garage@EEE",
                "Built a Inventory Management System for students to search for dispensable/non-dispensable items quickly and borrow/return items efficiently",
                "Managed budget and reimbursement claims for Garage@EEE"],
                duration:"May 2022 - May2023"
            },
            "VP Logistics and Financial Controller, ENITIO":{
                description:["Managed budget and reimbursement for ENITIO 2021, a freshmen transition orientation programme with an intake of 144 freshmen",
                "Managed, planned and purchased welfare pack items for freshmen and committees",
                "Lead a team of 5 subcommittees on event planning for Logistics",
                "Planned and conducted Virtual Campus Tour and Food Hunt for the freshmen to familiarize and explore the school's surrounding virtually"],
                duration:"Feb 2021 - Aug 2021"
            },
            "Chief Tech, Escendo ":{
                description:["Organized Machine Learning and Data Analytics Workshop for ESCENDO, a makeathon organized by Garage@EEE to provide fundamental knowledge for students to work on their prototype"],
                duration:"Sep 2020 - Jan 2021"
            },

        },
    },
    {
        id: 2,
        image: img2,
        title: 'Institute of Engineers Singapore (IES) - NTU',
        description: 'IES is the premier engineering Institution in Singapore and is often called upon by the Government to provide feedback on professional engineering matters. Through close collaboration with the local universities and polytechnics, IES organises courses, seminars and talks for engineers and IES members to advance the continuous development of engineers.',
        activities: [ies1,ies2,ies3],
        role: {
            "President":{
                description:["Organized Welcome Week and Online Welcome Tea Session to attract freshmen to join IES-NTU",
                "Lead a team of 40 committees ( 5 EXCOs, 11 Management Committees, 24 Subcommittees ) on event planning and execution",
                "Oversee all the 9 event plannings ( Basic Python Workshop, Excel Workshop, Engineering Talk (JTC,SMF,A*), NTU Engineering Student's Sharing Session, Panel Discussion, Engineering V-Fest (Rolls Royce,Dyson,Chemtron,Green Radar), R Programming Workshop)",
                "Collaborated with Mathworks to organize Simulink Workshop for IES students"],
                duration:"Aug 2020 - Aug 2021"
            },
            "Project Manager of Professional Development":{
                description:[" Organized technical workshops such as Python and Excel workshop to enhance IES-NTU's members technical skills",
                "Lead 10 Subcommittees in the division on event planning"],
                duration:"Aug 2019-Aug 2020"
            },
        },
    },
    {
        id: 3,
        image: img3,
        title: 'Rotaract Club',
        description: 'Rotaract Club is a club that strives to engage members in the field of community service, with an added emphasis on personal growth and development.',
        activities: [rotaract1],
        role: {
            "Subcommittee (Community Service)":{
                description:["Helped in kitchen cleaning at Willing Hearts",
                "Packed and delivered gift bags door-to-door to elderlies",
                "Helped in Ah Gong Ah Ma (AGAM) to celebrate CNY with elderlies at Beo Crescent",
                "Helped in Janitor Appreciation Project (JAP) to show appreciation to our janitors"],
                duration:"Aug 2020 - Aug 2021"
            }
        },
    },
    {
        id: 4,
        image: img4,
        title: 'Malaysian Student Association (MSA)',
        description: 'NTU MSA represents Malaysian Student Association that serves all Malaysians in NTU and be their home away from home',
        activities: [msa1],
        role: {
            "VP Operations":{
                description:["","",""]
            },
            "Testing":{
                description:["","",""],
                duration:""
            },
        },
    },
]