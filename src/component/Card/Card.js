import React from "react";
import "./card.css";
const Card = ({ data }) => {
    // console.log(data[1].imgUrl)
    const { name, price, imgUrl } = data
    return <div className="card">
        <div className="heading">
            <h4>{name}</h4>
            <div className="range">{price}</div>
        </div>
        <div className="img">
            <img src={imgUrl} alt="img" />
            </div>
    </div>;
};

export default Card;
