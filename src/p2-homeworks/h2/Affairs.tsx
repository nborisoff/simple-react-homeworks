import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>,
    setFilter: (filter: FilterType) => void,
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all");
    }
    const setHigh = () => {
        props.setFilter("high");
    }
    const setMiddle = () => {
        props.setFilter("middle");
    }
    const setLow = () => {
        props.setFilter("low");
    }

    return (
        <div>
            {mappedAffairs}
            <div className={s["filter-buttons"]}>
                <SuperButton onClick={setAll} filter>All</SuperButton>
                <SuperButton onClick={setHigh} filter>High</SuperButton>
                <SuperButton onClick={setMiddle} filter>Middle</SuperButton>
                <SuperButton onClick={setLow} filter>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
