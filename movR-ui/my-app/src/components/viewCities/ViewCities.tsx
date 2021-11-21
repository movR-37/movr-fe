import React from 'react'
import ViewCitiesItem from './viewCitiesItem/ViewCitiesItem';
import Grid from "@material-ui/core/Grid";
import "./ViewCities.css";
import { IViewCitiesItemInterface } from "./viewCitiesItem/ViewCitiesItem";

import karachi from "./temp_assets/karachi.png"
import islamabad from "./temp_assets/islamabad.png"
import lahore from "./temp_assets/lahore.png"
import rawalpindi from "./temp_assets/rawalpindi.png"
import quetta from "./temp_assets/quetta.png"
import multan from "./temp_assets/multan.png"

function ViewCities() {

    const cities: IViewCitiesItemInterface[] = [
        {
            image: karachi,
            city: "Karachi",
            province: "Sindh"
        },
        {
            image: islamabad,
            city: "Islamabad",
            province: "ICT"
        },
        {
            image: lahore,
            city: "Lahore",
            province: "Punjab"
        },
        {
            image: rawalpindi,
            city: "Rawalpindi",
            province: "Punjab"
        },
        {
            image: quetta,
            city: "Quetta",
            province: "Baluchistan"
        },
        {
            image: multan,
            city: "Multan",
            province: "Punjab"
        },
    ]

    return (
        <div className="view-cities-master-container">
            <div className="view-cities-title">Explore Services by City</div>
            <Grid container className="view-cities-grid-container">

                {cities.map((item, idx) => (
                    <Grid item={true} sm={4} xs={6} key={idx}>
                        <ViewCitiesItem
                            image={item.image}
                            city={item.city}
                            province={item.province}
                        />
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}

export default ViewCities
