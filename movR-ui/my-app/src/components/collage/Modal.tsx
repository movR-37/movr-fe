import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Container, Grid, IconButton } from '@material-ui/core';
import Condition, { If, Else, ElseIf } from 'react-else-if';
import './Modal.css'

export interface IModalProps {
    id?: number;
    images: string[];
    setOpenModal: Function;
    openModal: boolean;
}

const Modal = (props: IModalProps) => {

    const images: IModalProps["images"] = props.images;
    const length: number = images.length;
    const isDivisibleBy3: boolean = length % 3 === 0;

    const handleClose = () => {
        props.setOpenModal(false);
    };

    return (
        <div>
            <Dialog fullScreen open={props.openModal} onClose={handleClose}>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <HighlightOffIcon />
                </IconButton>
                <ClickAwayListener onClickAway={handleClose}>
                    <Container maxWidth="md">
                        <div className="test">
                            <Condition>
                                {/* Start */}
                                <If is={isDivisibleBy3}>
                                    <Grid container spacing={3}>
                                        {images.map((img: string, idx: number) => {
                                            if (idx % 3 === 0) {
                                                return (
                                                    <Grid item={true} xs={12} key={idx}>
                                                        <div className="bigImage">
                                                            <img src={img} alt="igm" className="test" />
                                                        </div>
                                                    </Grid>
                                                )
                                            }
                                            else {
                                                return (
                                                    <Grid item={true} xs={12} md={6} key={idx}>
                                                        <div className="smallImage smallImage-left">
                                                            <img src={img} alt="igm" className="test" />
                                                        </div>
                                                    </Grid>
                                                )
                                            }
                                        })}

                                    </Grid>

                                </If>

                                {/* End */}

                                {/* Start */}
                                <ElseIf is={!isDivisibleBy3 && length > 3}>
                                    <Grid container spacing={3}>
                                        {images.slice(0, 4).map((img: string, idx: number) => {
                                            if (idx === 0) {
                                                return (
                                                    <Grid item={true} xs={12} key={idx}>
                                                        <div className="bigImage">
                                                            <img src={img} alt="igm" className="test" />
                                                        </div>
                                                    </Grid>
                                                )
                                            }
                                            else {
                                                return (
                                                    <Grid item={true} xs={12} md={4} key={idx}>
                                                        <div className="smallImage smallImage-left">
                                                            <img src={img} alt="igm" className="test" />
                                                        </div>
                                                    </Grid>
                                                )
                                            }
                                        })}
                                        {length > 4 && images.slice(4, length).map((img: string, idx: number) => {
                                            if (idx % 3 === 0) {
                                                return (
                                                    <Grid item={true} xs={12} key={idx}>
                                                        <div className="bigImage">
                                                            <img src={img} alt="igm" className="test" />
                                                        </div>
                                                    </Grid>
                                                )
                                            }
                                            else {
                                                return (
                                                    <Grid item={true} xs={12} md={6} key={idx}>
                                                        <div className="smallImage smallImage-left">
                                                            <img src={img} alt="igm" className="test" />
                                                        </div>
                                                    </Grid>
                                                )
                                            }
                                        })}

                                    </Grid>
                                </ElseIf>

                                <Else>
                                    <Grid container spacing={3}>
                                        {images.map((img: string, idx: number) => {
                                            return (
                                                <Grid item={true} xs={12} key={idx}>
                                                    <div className="bigImage" key={idx}>
                                                        <img src={img} alt="igm" className="test" />
                                                    </div>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </Else>
                            </Condition>
                            {/* End */}
                        </div>
                    </Container>
                </ClickAwayListener>
            </Dialog>
        </div >
    );
}

export default Modal;
