import React from "react";

export default function Nav() {
    return (
        <div className="navbar">
            <img src={process.env.PUBLIC_URL + '/img/world.png'} alt="world icon" />
            <p>my travel journal.</p>
        </div>
    )
}