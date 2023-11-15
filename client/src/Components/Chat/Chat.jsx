import React from 'react'

import { Avatar } from '@mui/material'
import DoneAllIcon from '@mui/icons-material/DoneAll';

const Chat = () => {
    return (
        <div className="chat">
            <div>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className='nameAndLastMessage'>
                    <h3>Pranay Prajapati</h3>
                    <span>Hiii!</span>
                </div>
            </div>
            <div className='timeAndSeen'>
                <span>18:14</span>
                <DoneAllIcon color='#0f0' fontSize='14px' />
            </div>
        </div>
    )
}

export default Chat