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
import { useLocation } from 'react-router-dom';

interface LocationStates {
  value: {
    mover: string
  }
}

interface IMover {
  name: string;
  email: string;
  noOfReviews: string;
  rating: string;
  latitude: Number;
  longitude: Number;
  images: string[];
  location: string;
  address: string;
  subtitle_2: string;
  subtitle_3: string;
  profileType: string;
  about: string;
}

export default function ProfilePage({ mover }: IMover) {

  const { state } = useLocation<LocationStates>();
  const [name, setName] = useState("");
  const [numReviews, setNumReviews] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [subtitle_2, setSubtitle_2] = useState("");
  const [subtitle_3, setSubtitle_3] = useState("");
  const [profileType, setProfileType] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [about, setAbout] = useState("");

  useEffect(() => {
    const { mover } = state.value;
    async function fetchUser(email: string) {
      const response = await axios.get(`http://localhost:8000/movers?email=${email}`);
      const responseData: Partial<IMover[]> = response.data.mover;
      const data = responseData.find((d) => d?.email === email);
      console.log(data)

      setName(data!.name);
      setNumReviews(data!.noOfReviews);
      setRating(data!.rating);
      setLocation(data!.location);
      setAddress(data!.address);
      setSubtitle_2(data!.subtitle_2);
      setSubtitle_3(data!.subtitle_3);
      setProfileType(data!.profileType);
      setAbout(data!.about);
      setImages(data!.images)
      console.log(images);
    }

    fetchUser(mover);
  }, [state.value]);

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
      <Container maxWidth="lg" className="container">
        <div className="hallContainer">
          <ProfileHeader title={headerData.title} noOfReviews={headerData.noOfReviews} rating={headerData.rating} location={headerData.location} />

          <ProfileCollage profileImages={images} />
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
              {/* <Button variant="contained" color="secondary" className="modalButton" onClick={handleClick}>
                Accept
              </Button> */}
            </div>
          </div>


        </div>
      </Container>

    </div>

  );
}
