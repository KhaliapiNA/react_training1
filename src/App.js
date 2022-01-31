import s from './App.css';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import ContentProfile from "./components/ContentProfile/ContentProfile";
import Dialogs from './components/Dialogs/Dialogs';


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            {/*<ContentProfile />*/}
            <div  className='app-wrapper-content'>

                <Dialogs/>
        </div>

        </div>
    );
}

export default App;
