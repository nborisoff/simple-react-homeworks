import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    trash?: boolean
    filter?: boolean
    disabled?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        trash, filter, disabled, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = function() {
        if (trash) {
            return `${s.default} ${s["super-button__delete"]} ${className}`
        } else if (filter) {
            return `${s.default} ${s["super-button__filter"]} ${className}`
        } else if (disabled) {
            return `${s.default} ${s["super-button__disabled"]} ${className}`
        }
        return `${s.default} ${className}`;
    }();

    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
