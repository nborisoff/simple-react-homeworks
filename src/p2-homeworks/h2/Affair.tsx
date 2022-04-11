import React from 'react'
import {AffairType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType,
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const priorityColor = function(): string {
        if (props.affair.priority === 'high') {
            return 'priority-high';
        } else if (props.affair.priority === 'middle') {
            return 'priority-middle';
        } else if (props.affair.priority === 'low') {
            return 'priority-low';
        }

        return '';
    }();

    return (
        <div className={s.affair}>
            <div className={s["affair-data"]}>
                <span>{props.affair._id}. {props.affair.name}   </span>
                <span className={s[priorityColor]}>({props.affair.priority})</span>
            </div>
            <SuperButton onClick={deleteCallback} trash>X</SuperButton>
        </div>
    )
}

export default Affair
