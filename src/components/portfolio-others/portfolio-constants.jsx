import img1 from '../../assets/portfolio-website.png'
import img2 from '../../assets/intouch-app.png'
import img3 from '../../assets/connectus-pizza.png'
import img4 from '../../assets/lemmatree-pocathon.png'
import img5 from '../../assets/messenger-app-project.png'
import img6 from '../../assets/open-diffusion.png'

import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3} from 'react-icons/bi'
import {BiLogoFirebase} from 'react-icons/bi'
import {BiLogoFlutter} from 'react-icons/bi'
import {BiLogoJavascript} from 'react-icons/bi'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {FaPhp} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaCcStripe} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiOpenai} from 'react-icons/si'
import {SiPrisma} from 'react-icons/si'
import {SiPusher} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'


export const data = [
    {
        id: 1,
        image: img6,
        title: 'OpenDiffusion',
        description: 'SaaS AI Platform that provides All-In-One AI tools which includes Conversation, Image Generation, Video Generation, Music Generation and Code Generation through OpenAI API and ReplicateAI API. The platform provides free testing and paid version according to the number of usages on the platform.',
        techstack: [ <TbBrandNextjs/>, <FaReact/>, <AiFillHtml5/> , <BiLogoTailwindCss/>, <SiPrisma/>, <FaCcStripe/>, <SiOpenai/> ],
        github: 'https://github.com/zhenyong25/sass-ai-platform',
        demo: 'https://sass-ai-platform-16bm-kqmxhe9o3-zhenyong25.vercel.app/'
    },
    {
        id: 2,
        image: img5,
        title: 'MessageMe',
        description: 'Application designed to facilitate real-time communication between users by allowing users to send and receive text messages, and images. The application also supports group creations and conversations among different users.',
        techstack: [ <TbBrandNextjs/>, <FaReact/>, <AiFillHtml5/> , <BiLogoTailwindCss/>, <SiPrisma/>, <SiMongodb/>, <SiPusher/> ],
        github: 'https://github.com/zhenyong25/real-time-messenger',
        demo: 'https://real-time-messenger-oiev4bwuw-zhenyong25.vercel.app/'
    },
    {
        id: 3,
        image: img1,
        title: 'Personal React Portfolio',
        description: 'A personal portfolio website to get to know more about me through my academic qualifications, technical skills, previous works, past experiences and contact information. Have fun browsing my profile! :) ',
        techstack: [ <FaReact/>, <AiFillHtml5/>, <BiLogoCss3/>, <BiLogoJavascript/>],
        github: 'https://github.com/zhenyong25/personal-react-portfolio',
        demo: 'https://zhenyong-react-portfolio.netlify.app/'
    },
    {
        id: 4,
        image: img2,
        title: 'InTouch',
        description: 'My final year project, InTouch, is a mobile application developed using Flutter and Firebase. The application was developed with the aim of crowdsourcing volunteers as psychological first aider and provides professional technical training to them , so that they are able to provide low-cost consultation sessions to people who requires mental health support. Our application also provides various activities tracker, such as meditation, text diary, video diary and drawing which aims to support our users from mental health issues ',
        techstack: [ <BiLogoFlutter/>, <BiLogoFirebase/>],
        github: 'https://github.com/zhenyong25',
        demo: 'https://github.com/zhenyong25'
    },
    {
        id: 5,
        image: img3,
        title: 'Pizza Delivery',
        description: 'My EEE Module Project (IE4717) which requires us to develop a web application from scratch within a period of 13 weeks without the use of any frameworks. The ideation, prototying and storyboarding were in the first few weeks, continuing with the development and testing stages. Our application aims to provide convenience to our users by viewing our menu and making purchase online.',
        techstack: [ <AiFillHtml5/>, <BiLogoCss3/> , <BiLogoJavascript/>, <SiMysql/>, <FaPhp/>],
        github: 'https://github.com/zhenyong25/IE4717-Connectus-',
        demo: 'https://connectus-pizza.netlify.app/'
    },
    {
        id: 6,
        image: img4,
        title: 'Lemmatree POCathon',
        description: 'The objective of the project to create a job search platform for everyone to apply for jobs and discover potential candidates securely, trustworthy and effectively through the application of trusted data (Verifiable Credentials) from Affinidi API and match job applicants with their verified skill sets by leveraging our machine learning algorithm.',
        techstack: [ <AiFillHtml5/> , <BiLogoCss3/>, <BiLogoJavascript/>, <SiMongodb/> ],
        github: 'https://github.com/zhenyong25/NTULemmaTreePOCathon-Finalist-Connectus',
        demo: ''
    },
]