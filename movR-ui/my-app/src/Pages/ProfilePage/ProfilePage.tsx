import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import photos from "./temp_assets/photos.png";
import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import { IProfileHeaderProps } from "../../components/profileHeader/ProfileHeader";
import "./ProfilePage.css"
import ProfileCollage from "../../components/collage/ProfileCollage";
import BookingReservation from "../../components/reserveBooking/BookingReservation";
import ProfileHighlights from "../../components/profileHighlights/ProfileHighlights";
import AboutProfile from "../../components/aboutProfile/AboutProfile";
import Dialog from '@material-ui/core/Dialog';
import { IProfileHighlightsItemProps } from "../../components/profileHighlights/profileHighlightsItem/ProfileHighlightsItem";
import { IProfileHighlightsProps } from "../../components/profileHighlights/ProfileHighlights";
import { IAboutProfileProps } from "../../components/aboutProfile/AboutProfile";
import { ClickAwayListener, IconButton, Button } from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import axios from "axios"
import Modal from '../../components/reviewModal';

export default function ProfilePage() {

  const [name, setName] = useState("");
  const [numReviews, setNumReviews] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [subtitle_2, setSubtitle_2] = useState("");
  const [subtitle_3, setSubtitle_3] = useState("");
  const [profileType, setProfileType] = useState("");
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get('http://localhost:8000/users/619958edc48cc5858911764a');
      const data = response.data;
      setName(data.name);
      setNumReviews(data.noOfReviews);
      setRating(data.rating);
      setLocation(data.location);
      setAddress(data.address);
      setSubtitle_2(data.subtitle_2);
      setSubtitle_3(data.subtitle_3);
      setProfileType(data.profileType);
    }

    fetchUser();
  }, []);

  let headerData: IProfileHeaderProps = {
    title: name,
    noOfReviews: numReviews,
    rating,
    location
  };

  let highlightItems: IProfileHighlightsItemProps[] = [
    {
      iconUrl: "https://image.flaticon.com/icons/png/512/484/484167.png",
      title: "Mover Location",
      subtitle: address
    },
    {
      iconUrl: "https://image.flaticon.com/icons/png/512/844/844198.png",
      title: "Moving Capacity",
      subtitle: subtitle_2
    },
    {
      iconUrl: "https://image.flaticon.com/icons/png/512/633/633991.png",
      title: "Highly Rated",
      subtitle: subtitle_3
    },
  ];

  let highlightsData: IProfileHighlightsProps = {
    profileType,
    profileIconUrl: "https://image.flaticon.com/icons/png/512/903/903426.png",
    highlightItems
  };

  const aboutBody = "Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum. " +
    "lorem Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum" +
    " Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem IspumLorem Ispum " +
    "Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum" +
    " Lorem Ispum Lorem Ispum Lorem IspumLorem IspumLorem Ispumv  v Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum" +
    "This is a 2 bedroom 2 bathroom cabin. The master bedroom is upstairs with a king sized bed & private bathroom." +
    " There is also a downstairs bathroom and bedroom with a queen sized bed." +

    "The living room sofa is a futon and can accommodate additional guests if needed." +
    " The upstairs loft also offers additional space." +
    "The hot tub is available for you to soak your cares away year round, day or night." +
    "Then you can come inside and enjoy the fireplace in the cozy living room.";

  const aboutData: IAboutProfileProps = {
    profileType: "Venue",
    aboutBody
  };


  const handleClose = () => setOpen(false);;
  const handleClick = () => setOpen(true);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="footer-reservation">
        <Button variant="contained" color="secondary" className="modalButton" onClick={handleClick}>
          Check Availability & Dates
        </Button>
        {open ? (
          <Dialog fullScreen open={open} onClose={handleClose}>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <HighlightOffIcon />
            </IconButton>
            <div className="reservation">
              <BookingReservation />
            </div>
          </Dialog>
        ) : undefined}
      </div>
      <button className="openModalbtn" onClick={() => {setOpenModal(true)}}>open</button>
              {openModal && <Modal closeModal={setOpenModal}/> } 
      <Container maxWidth="lg" className="container">
        <div className="hallContainer">
          <ProfileHeader title={headerData.title} noOfReviews={headerData.noOfReviews} rating={headerData.rating} location={headerData.location} />

          <ProfileCollage />
          <div className="temp">
            <div className="highlights-component">
              <ProfileHighlights
                profileType={highlightsData.profileType}
                profileIconUrl={highlightsData.profileIconUrl}
                highlightItems={highlightsData.highlightItems} />
              <AboutProfile profileType={aboutData.profileType} aboutBody={aboutData.aboutBody} />
             
              <hr></hr>
            </div>
          </div>


        </div>
      </Container>

    </div>

  );
}
