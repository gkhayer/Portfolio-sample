import React from 'react'

const Images = (props) => {
    return (
        <img src={props.imgSrc} alt="mypics" className="card__img" width="200px"/>
    )
}

export default Images