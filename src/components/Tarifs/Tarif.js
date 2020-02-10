import React from 'react'
import './Tarif.css'

export default function Tarif(props) {
    return (
        <div className="root">
            <article>
                <div><h2>{props.title}</h2></div>
                <div className="price">{props.price}
                    <div className="monthly">
                        <div className="money">₽</div>
                        <div className="month">/месяц</div>
                    </div>
                </div>
                <div className="limit">{props.text}</div>
                <div>{props.minutes} <span>мин.на остальные номера России</span></div>
                <div>{props.internet}</div>
            </article>
        </div>
    )
}
