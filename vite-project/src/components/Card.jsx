import React from 'react'
import "./Card.css"
const Card = (props) => {
    return (
        <div className='cards' style={{ overflow: "hidden" }}>
            <img src="data:image/jpeg;base64,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" alt=""  style={{ border: "2px solid black" }} />
            <h1>{props.title}</h1>
            <p>{props.descripion} </p>
        </div>
    )
}

export default Card