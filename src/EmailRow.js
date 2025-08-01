import { Checkbox, IconButton } from '@mui/material';
import React from 'react'
import './EmailRow.css'
import StarBorderOutLinedIcon from '@mui/icons-material/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined'

import { useNavigate } from 'react-router-dom'

function EmailRow({title, subject, description, time }) {
    const history = useNavigate();


  return (
    <div onClick={() => history("/mail")} className='emailRow'>
      <div className='emailRow__options'>
        <Checkbox />
        <IconButton>
            <StarBorderOutLinedIcon />
        </IconButton>
        <IconButton>
            <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className='emailRow__title'>
        {title}
      </h3>
      <div className='emailRow__message'>
        <h4>
            {subject}  {"   "}
            <span className="emailRow__description">-
                {description}</span>    
        </h4>
      </div>
      <p className='emailRow__time'>{time}</p>
    </div>
  )
}

export default EmailRow;
