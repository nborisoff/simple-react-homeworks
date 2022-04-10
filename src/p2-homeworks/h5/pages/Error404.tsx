import React from 'react'
import styles from '../Header.module.css'

function Error404() {
    return (
        <div className={styles["error-404"]}>
            <div className={styles["error-404__img"]}>
                <img src={require('../img/404.jpg')} alt={"404"}/>
            </div>
            <div className={styles["error-404__text"]}>
                <div>Произошла ошибка.</div>
                <br/>
                <div>Не удалось найти запрошенный URL.</div>
                <div>ฅ/ᐠ.̫ .ᐟ\ฅ</div>
            </div>
        </div>
    )
}

export default Error404
