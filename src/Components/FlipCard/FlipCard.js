import React from 'react'
import './FlipCard.css'
const FlipCard = (item, back) => {
    return (
        <div className="flip-card" onClick={() => window.open(item.link, "mywindow")}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {item.img}
                </div>
                <div className="flip-card-back">
                    <h1>{item.heading}</h1>
                    <p>{item.desc}</p>
                </div>
            </div>
        </div>
    )
}
export default FlipCard;