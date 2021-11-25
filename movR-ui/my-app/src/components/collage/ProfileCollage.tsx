import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./ProfileCollage.css"
import Modal from "./Modal";
import { IModalProps } from './Modal';


export default function ProfileCollage() {
    const [openModal, setOpenModal] = useState(false);
    const handleClick = () => setOpenModal(true);
    const images: IModalProps["images"] = [
        "1.jpeg",
        "2.jpeg",
        "3.jpeg",
        "4.jpeg",
    ]

    const bigImage = "1.jpeg";
    const smallUpperLeft = "3.jpeg";
    const smallUpperRight = "2.jpeg";
    const smallBottomLeft = "4.jpeg";
    const smallBottomRight = "6.jpeg";

    return (
        <div data-testid="collage-masterdiv">
            <Grid data-testid="collage-masterGrid" container className="gridContainer" onClick={handleClick} >

                <Grid item={true} xs={6}>
                    <div className="bigImage">
                        <img src={bigImage} className="leftImage" />
                    </div>
                </Grid>

                <Grid item={true} xs={6}>
                    <Grid container item xs={12}>

                        <Grid item={true} xs={6} className="smallRight-tl">
                            <div className="top-left">
                                <img src={smallUpperLeft} className="smallImage rightContainer" />
                            </div>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <div className="top-right">
                                <img src={smallUpperRight} className="smallImage" />
                            </div>
                        </Grid>

                        <Grid item={true} xs={6}>
                            <div className="bottom-left">
                                <img src={smallBottomLeft} className="smallImage" />
                            </div>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <div className="bottom-right">
                                <img src={smallBottomRight} className="smallImage" />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {openModal ? <Modal images={images} openModal={openModal} setOpenModal={setOpenModal} /> : undefined}
        </div>
    );
}
