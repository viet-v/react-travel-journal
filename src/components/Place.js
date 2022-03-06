import React from "react";

export default function Place(props) {
    return (
            <div className="place">
                <img src={props.item.imageUrl} className="place--img" alt={`${props.item.title}`} />
                <div className="place--info">
                    <p className="place--location">
                        <img src="/img/location.png" alt="location icon"/>
                        <span className="place--country">{props.item.location}</span>
                        <a href={props.item.googleMapsUrl} target="blank" className="place--map">View on Google Maps</a>
                    </p>
                    <h1 className="place--title">{props.item.title}</h1>
                    <p className="place--date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="place--description">{props.item.description}</p>
                </div>
            </div>
    )
}