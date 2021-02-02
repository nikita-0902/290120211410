import React from 'react'

import t from './Top.module.css';
import ava from '../images/ava.png';


function Top() {
    return (
        <>
            <div className={t.main__container}>
                <img src={ava} alt="" align="top" className={t.ava}/>
                <div className={t.text}>
                    <span className={t.prof}>Менеджер по продажам</span>
                    <span className={t.name}> Вероника Ростова </span>
                    <span className={t.m_text_bg}></span>
                    <span className={t.m_text}>Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны</span>
                    <span className={t.second}>Услуг</span>
                    <span className={t.line}></span>
                    <span className={t.line2}></span>
                    <span className={t.numb1}>11</span>
                    <span className={t.numb2}>3</span>
                    <span className={t.numb3}>1</span>
                    <span className={t.rect1}></span>
                    <span className={t.rect2}></span>
                    <span className={t.rect3}></span>
                    <span className={t.line1}></span>
                    <span className={t.title1}>Ручное бронирование</span>
                    <span className={t.title2}>Пакетные туры</span>
                    <span className={t.title3}>Отели</span>
                    <span className={t.any_text}>Всего</span>
                    <span className={t.numb4}>15</span>
                </div>

            </div>


        </>
    )
}

export default Top
