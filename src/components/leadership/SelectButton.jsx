import React from 'react'
import './portfolio.css';  
import { useState } from 'react';

const SelectButton = ({project, ptype}) => {

    const [activeSel, setActiveSel] = useState('web-app')

    return(
        <div onClick={()=>setActiveSel({ptype})} className={activeSel==={ptype}?'selection__button__active':'selection__button'}>
            {project}
        </div>
    )
}

export default SelectButton; 