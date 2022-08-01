import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/NavBar/Profile/Profile";
import Dialogs from "./Components/NavBar/Dialogs/Dialogs";
import NotFound from "./Components/NotFound/NotFound";
import News from "./Components/NavBar/News/News";
import Music from "./Components/NavBar/Music/Music";
import Settings from "./Components/NavBar/Settings/Settings";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>

            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dialogs" element={<Dialogs />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
