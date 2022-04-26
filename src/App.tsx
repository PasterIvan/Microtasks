import React/*, {useState}*/ from 'react';
import './App.css';
import {ComponentSite} from "./dz/site/ComponentSite";
import {TopCars} from "./dz/TopCars/TopCars";
import {Buttons} from "./dz/Buttons/Buttons";
import {Counter} from "./dz/Check/Counter";
import {Filter} from "./dz/Filter/Filter";
import {LessonInput} from "./dz/Input/LessonInput";

function App() {
    return (
        <>
            <ComponentSite/>
            <TopCars/>
            <Buttons/>
            <Counter startValue={0}
                     maxValue={5}/>
            <Filter/>
            <LessonInput />
        </>
    );
}

export default App;
