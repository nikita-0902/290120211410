import React from 'react';


import m from './Middle.module.css';
import like from '../images/like.svg'
import comment from '../images/comment.svg'
function Middle() {
    return (
        <>
            <div className={m.third}>
                <span className={m.text1}>
                    Последние отзывы
                </span>
                <a href="/" className={m.reviews}>Все отзывы</a>
                <span className={m.nb}> 131 </span>
                <img src={like} alt="" className={m.heart} />
                <img src={comment} alt="" className={m.comment} />
                <span className={m.nb1}> 14 </span>
            </div>

        </>
    )
}

export default Middle;
