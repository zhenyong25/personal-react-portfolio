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
                description:["","",""]
            },
            "Testing":{
                description:["","",""]
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
            "VP Operations":{
                description:["","",""],
                duration:""
            },
            "Testing":{
                description:["","",""],
                duration:""
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
            "Sub-Committee":{
                description:["","",""],
                duration:""
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