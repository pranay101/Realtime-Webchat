import './App.css';
import { connect, sendMessage } from "./api/index"
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import SettingsIcon from '@mui/icons-material/Settings';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';

import { Avatar, Icon, IconButton } from '@mui/material';
import Chat from './Components/Chat/Chat';
function App() {
    return (
        <div className="App">
            <section className="chatWindow">
                <header>
                    <span className="navigationButtons">
                        <button>File</button>
                        <button>Help</button>
                    </span>
                    <span className="title">RealTime Webchat</span>
                    <span className="actionButtons">
                        <button><RemoveIcon fontSize='16' /></button>
                        <button><CloseIcon fontSize='16' /></button>
                    </span>
                </header>
                <main className='main'>
                    <section className="tools">
                        <IconButton><MoveToInboxIcon /></IconButton>
                        <IconButton><SettingsIcon /></IconButton>
                    </section>
                    <section className='people'>
                        <Chat />
                        <Chat />
                        <Chat />
                        {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /> */}
                    </section>
                    
                    <section className="chatHistory">
                    <header className='chatHeader'>
                            <div>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <div className='nameAndLastMessage'>
                                    <h3>Pranay Prajapati</h3>
                                    <span>online</span>
                                </div>
                            </div>

                            <IconButton><MoreVertIcon /></IconButton>
                        </header>
                        
                        <div className='message'>
                            <div className='outgoing'>
                                hello
                            </div>
                        </div>
                        <div className='message'>
                            <div className='outgoing'>
                                How are you?
                            </div>
                        </div>
                        <div className='message incoming'>
                            <div className='incoming'>
                                hii, I am Fine what about you?
                            </div>
                        </div>
                        <div className='message'>
                            <div className='outgoing'>
                                Just wanted to talk to you about something... Are you up?
                            </div>
                        </div>
                        <div className='message'>
                            <div className='incoming'>
                                Yeah Sure what is it?
                            </div>
                        </div>
                        <div className='message'>
                            <div className='outgoing'>
                                Actually i have been thinking about making a realtime chat app. Would you like to contribute to it?
                            </div>
                        </div>
                        <div className='message'>
                            <div className='incoming'>
                                Dude i would love to. I have always wanted to make something like this.
                            </div>
                        </div>
                        <div className='message'>
                            <div className='incoming'>
                                I am Going to Handle the frontend for it you better make no compromise in backend... haha</div>
                        </div>
                        <div className='message'>
                            <div className='outgoing'>
                                That's awesome...</div>
                        </div>
                        <div className='message'>
                            <div className='outgoing'>
                                let me create a github repository for it.</div>
                        </div>
                        <div className='message'>
                            <div className='outgoing'>
                                Find it here : https://github.com/pranay101/Realtime-Webchat</div>
                        </div>
                        <div className='message'>
                            <div className='incoming'>
                                Sounds Great </div>
                        </div>
                        <div className='message'>
                            <div className='incoming'>
                                Let me have a look. </div>
                        </div>

                        <section className='inputBox'>
                            <input type="text" name="" id="" placeholder='Type your text here...' />
                            <div className='sendButton'>
                            <IconButton ><SendIcon fontSize='15px' color='primary'/></IconButton>
                            </div>
                        </section>
                    </section>
                </main>
            </section>
            {/* <button onClick={connect}>Connect</button>
     <button onClick={() => sendMessage("Hello")}>Send Hello</button> */}
        </div>
    );
}

export default App;
