import React, {useState} from "react";
import {MonyFilter} from "./ButtonFilter";

export type FilterType = 'all' | 'Rubls' | 'Dollars'

export function Filter() {
    const [money] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Rubls', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Rubls', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Rubls', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('all')

    let currentMony = money

    if (filter === 'Rubls') {
        currentMony = money.filter((filteredMony) => filteredMony.banknots === 'Rubls')
    }
    if (filter === 'Dollars') {
        currentMony = money.filter((filteredMony) => filteredMony.banknots === 'Dollars')
    }
    const onClickFilterHandler = (nameBytton: FilterType) => {
        setFilter(nameBytton)
    }
    return (
        <>

          {/*  <ul>{currentMony.map((objFromMoneyArr, index) => {
                return (
                    <li key={index}>
                        <span> {objFromMoneyArr.banknots} </span>
                        <span> {objFromMoneyArr.value} </span>
                        <span> {objFromMoneyArr.number} </span>
                    </li>
                )
            })}
            </ul>
            <MonyFilter name={'ALL'} currentMony={currentMony} callBack={() => onClickFilterHandler('all')}/>
            <MonyFilter name={'RUBLS'} currentMony={currentMony} callBack={() => onClickFilterHandler('Rubls')}/>
            <MonyFilter name={'DOLLARS'} currentMony={currentMony} callBack={() => onClickFilterHandler('Dollars')}/>*/}
        <MonyFilter currentMony={currentMony} callBack={onClickFilterHandler}/>
        </>
    )
}