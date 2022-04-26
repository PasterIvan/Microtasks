import React from "react";
import {TopCar} from "./TopCar";

export const TopCars = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (<TopCar arrTopCars={topCars}/>)
}