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
import { useHistory } from "react-router-dom";
import fire from "../../config/firebase.config";
import Form from '../../components/Form.jsx';
import { SettingsBackupRestoreOutlined } from "@material-ui/icons";
import { IMover } from "../../components/collage/ProfileCollage";

export default function ProfilePage({ mover }: IMover) {

  const [name, setName] = useState("");
  const [numReviews, setNumReviews] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [subtitle_2, setSubtitle_2] = useState("");
  const [subtitle_3, setSubtitle_3] = useState("");
  const [profileType, setProfileType] = useState("");
  const [about, setAbout] = useState("");
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get('http://localhost:8000/users/619bef5149082a3546e3c00b');
      const data = response.data;
      setName(data.name);
      setNumReviews(data.noOfReviews);
      setRating(data.rating);
      setLocation(data.location);
      setAddress(data.address);
      setSubtitle_2(data.subtitle_2);
      setSubtitle_3(data.subtitle_3);
      setProfileType(data.profileType);
      setAbout(data.about);
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

  const aboutBody = about;

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
      <Container maxWidth="lg" className="container">
        <div className="hallContainer">
          <ProfileHeader title={headerData.title} noOfReviews={headerData.noOfReviews} rating={headerData.rating} location={headerData.location} />

          <ProfileCollage mover={mover} />
          <div className="temp">
            <div className="highlights-component">
              <ProfileHighlights
                profileType={highlightsData.profileType}
                profileIconUrl={highlightsData.profileIconUrl}
                highlightItems={highlightsData.highlightItems} />
              <AboutProfile profileType={aboutData.profileType} aboutBody={aboutData.aboutBody} />

              <hr></hr>
            </div>
            <div className="review-component">
              <Form />
            </div>
          </div>


        </div>
      </Container>

    </div>

  );
}
