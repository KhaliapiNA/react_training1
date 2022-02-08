import s from './App.css';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import ContentProfile from "./components/ContentProfile/ContentProfile";
import Messages from './components/Dialogs/Messages';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";

const App = (props) => {

    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navigation/>

            <div  className='app-wrapper-content'>
                <Routes>
                    <Route path="/messages/*" element= {<Messages dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path="/profile" element= {<ContentProfile posts={props.posts}/>}/>
                    <Route path="/news" element= {<News/>}/>
                    <Route path="/music" element= {<Music />}/>
                    <Route path="/settings" element= {<Settings />}/>

                </Routes>
        </div>

        </div>
        </BrowserRouter>
    );
}

export default App;
