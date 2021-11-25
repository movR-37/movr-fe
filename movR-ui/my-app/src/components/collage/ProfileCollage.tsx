import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import "./ProfileCollage.css"
import Modal from "./Modal";
import { IModalProps } from './Modal';
import axios from "axios";


export interface IMover {
    mover: string
}
export default function ProfileCollage({ mover }: IMover) {
    const [openModal, setOpenModal] = useState(false);
    const handleClick = () => setOpenModal(true);
    const [gotImages, setGotImages] = useState([]);

    const images: IModalProps["images"] = [
        "https://capstone-images-458.s3.ca-central-1.amazonaws.com/1.jpeg",
        "https://capstone-images-458.s3.ca-central-1.amazonaws.com/2.jpeg",
        "https://capstone-images-458.s3.ca-central-1.amazonaws.com/3.jpeg",
        "https://capstone-images-458.s3.ca-central-1.amazonaws.com/4.jpeg",
    ]

    const moverObj = {
        data: {
            email: mover
        }
    }

    useEffect(() => {
        const fetchImages = async () => {
            const response = await axios.get(`http://localhost:8000/movers`, moverObj);
            const { images } = response.data;
            setGotImages(images);
        }

        fetchImages();
    }, [images])

    const bigImage = gotImages[0];
    const smallUpperLeft = gotImages[1];
    const smallUpperRight = gotImages[2];
    const smallBottomLeft = gotImages[3];
    const smallBottomRight = gotImages[4];

    // const bigImage = "https://capstone-images-458.s3.ca-central-1.amazonaws.com/1.jpeg";
    // const smallUpperLeft = "https://capstone-images-458.s3.ca-central-1.amazonaws.com/3.jpeg";
    // const smallUpperRight = "https://capstone-images-458.s3.ca-central-1.amazonaws.com/2.jpeg";
    // const smallBottomLeft = "https://capstone-images-458.s3.ca-central-1.amazonaws.com/4.jpeg";
    // const smallBottomRight = "https://capstone-images-458.s3.ca-central-1.amazonaws.com/6.jpeg";

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
