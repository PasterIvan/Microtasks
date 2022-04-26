/*import React from "react";

type MonyFilterType = {
    name: string
    currentMony: Array<CurrentMonyType>
    callBack: () => void
}

type CurrentMonyType = {
    banknots: string
    value: number
    number: string
}

export const MonyFilter = (props: MonyFilterType) => {
    const onClickMonyFilter = () => {
        props.callBack()
    }
    return <button onClick={onClickMonyFilter}>{props.name}</button>
}*/
import React from "react";
import {FilterType} from "./Filter";

type MonyFilterType = {
    currentMony: Array<CurrentMonyType>
    callBack: (filter:FilterType) => void
}

type CurrentMonyType = {
    banknots: string
    value: number
    number: string
}

export const MonyFilter = (props: MonyFilterType ) => {
    return (
        <>
            <ul>{props.currentMony.map((objFromMoneyArr, index) => {
                return (
                    <li key={index}>
                        <span> {objFromMoneyArr.banknots} </span>
                        <span> {objFromMoneyArr.value} </span>
                        <span> {objFromMoneyArr.number} </span>
                    </li>
                )
            })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.callBack('all')}>ALL</button>
                <button onClick={() => props.callBack('Rubls')}>RUBLS</button>
                <button onClick={() => props.callBack('Dollars')}>DOLLARS</button>
            </div>
        </>)
}
