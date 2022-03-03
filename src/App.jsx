import {useState, useEffect} from "react";
import React from "react";
import {Navigation} from "./components/navigation";
import {Header} from "./components/header";
import {Features} from "./components/features";
import {About} from "./components/about";
import {Services} from "./components/services";
import {Gallery} from "./components/gallery";
import {Testimonials} from "./components/testimonials";
import {Team} from "./components/Team";
import {Contact} from "./components/contact";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import i18n from './i18n.js';

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const App = () => {
    const [languageCode, setLanguageCode] = useState('en-us');

    return (
        <div>
            <Navigation switchLanguageCode={setLanguageCode} data={i18n.Nav[languageCode]}/>
            <Header data={i18n.Header[languageCode]}/>
            <Features data={i18n.Features[languageCode]}/>
            <About data={i18n.About[languageCode]}/>
            <Services data={i18n.Services[languageCode]}/>
            <Gallery data={i18n.Gallery[languageCode]}/>
            <Testimonials data={i18n.Testimonials}/>
            <Team data={i18n.Team}/>
            <Contact data={i18n.Contact}/>
        </div>
    );
};

export default App;
