import React from 'react'
import "./ViewCitiesItem.css"

export interface IViewCitiesItemInterface {
    image: any,
    city: string,
    province: string
}

function ViewCitiesItem({ image, city, province }: IViewCitiesItemInterface) {
    return (
        <div className="view-cities-item-container">
            <div className="view-cities-item-image-div"><img src={image} className="view-cities-item-image"></img></div>
            <div className="view-cities-text-div">
                <div><span className="view-cities-text-span-title">{city}</span></div>
                <div><span className="view-cities-text-span-subtitle">{province}</span></div>
            </div>
        </div>
    )
}

export default ViewCitiesItem
