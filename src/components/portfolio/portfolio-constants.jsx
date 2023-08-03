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
import {SiMysql} from 'react-icons/si'
import {SiOpenai} from 'react-icons/si'
import {SiPrisma} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'


export const data = [
    {
        id: 1,
        image: img6,
        title: 'OpenDiffusion',
        description: 'SaaS AI Platform that provides All-In-One AI tools which includes Conversation, Image Generation, Video Generation, Music Generation and Code Generation through OpenAI API and ReplicateAI API. The platform provides free and pro plan to suit different users.',
        techstack: [ <TbBrandNextjs/>, <FaReact/>, <AiFillHtml5/> , <BiLogoTailwindCss/>, <SiPrisma/>, <FaCcStripe/>, <SiOpenai/> ],
        github: 'https://github.com/zhenyong25/sass-ai-platform',
        demo: 'https://sass-ai-platform-16bm-kqmxhe9o3-zhenyong25.vercel.app/'
    },
    {
        id: 2,
        image: img5,
        title: 'Chat Application',
        description: 'Created my personal react portfolio using HTML, CSS, JavaScript and React.js',
        techstack: [ <TbBrandNextjs/>, <FaReact/>, <AiFillHtml5/> , <BiLogoTailwindCss/>, <SiPrisma/>],
        github: '',
        demo: ''
    },
    {
        id: 3,
        image: img1,
        title: 'Personal React Portfolio',
        description: 'Created my personal react portfolio using HTML, CSS, JavaScript and React.js',
        techstack: [ <FaReact/>, <AiFillHtml5/>, <BiLogoCss3/>, <BiLogoJavascript/>],
        github: 'https://github.com/zhenyong25/personal-react-portfolio',
        demo: 'https://zhenyong-react-portfolio.netlify.app/'
    },
    {
        id: 4,
        image: img2,
        title: 'InTouch - Final Year Project',
        description: '',
        techstack: [ <BiLogoFlutter/>, <BiLogoFirebase/>],
        github: 'https://github.com/zhenyong25',
        demo: 'https://github.com/zhenyong25'
    },
    {
        id: 5,
        image: img3,
        title: 'Pizza Delivery',
        description: '',
        techstack: [ <AiFillHtml5/>, <BiLogoCss3/> , <BiLogoJavascript/>, <SiMysql/>, <FaPhp/>],
        github: 'https://github.com/zhenyong25/IE4717-Connectus-',
        demo: 'https://connectus-pizza.netlify.app/'
    },
    {
        id: 6,
        image: img4,
        title: 'Lemmatree POCathon',
        description: '',
        techstack: [ <TbBrandNextjs/>, <AiFillHtml5/> , <BiLogoTailwindCss/> ],
        github: 'https://github.com/zhenyong25/NTULemmaTreePOCathon-Finalist-Connectus',
        demo: 'https://connectus-pizza.netlify.app/'
    },
]