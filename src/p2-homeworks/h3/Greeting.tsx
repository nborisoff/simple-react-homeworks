import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string,
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void,
    addUser: () => void,
    error: string,
    totalUsers: number,
    onKeyPressInputHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressInputHandler} // деструктуризация пропсов
) => {
    const inputClass = name === "" ? s.error : s["valid-input"]

    return (
        <div>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressInputHandler}/>
            <SuperButton onClick={addUser}>add</SuperButton>
            <span className={s["total-users"]}>Total users: {totalUsers}</span>
            <span className={s["error-msg"]}>{error}</span>
        </div>
    )
}

export default Greeting
