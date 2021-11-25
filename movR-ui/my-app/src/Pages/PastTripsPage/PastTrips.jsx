import React, { useEffect, useState }  from 'react'
import fire from "../../config/firebase.config";
import axios from "axios"
import Card from "@material-ui/core/Card";
// import fire
// get currentUser from firebase auth
// get the email

// create a state for storing data

// in the useEffect
// fetch all the trips
// filter the trips which has user == firebase email
// set it in the stateobject

// in the jsx then map over the state trips and render them


function PastTrips() {
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    // const Card = props => <div>{props.value}</div>
    
    useEffect(() => {
        const email = fire.auth().currentUser ? fire.auth().currentUser.email: "";
        async function fetchUser(email) {
            const response = await axios.get('http://localhost:8000/trips');
            const data = response.data;
            console.log("email" +email)
            console.log(data)
            const updatedData = Object.values(data).filter((currentData) => currentData.user === email && currentData.mover)
            setUserData(updatedData);
            // console.log(updatedData)
            setIsLoading(false);
            
        }
    
        fetchUser(email);
        console.log(userData)
      }, []);
    // var elements=[];
    // for(var i=0;i<userData.length;i++){
    //   elements.push(<Card value={userData[i]} />);
    // }
    return isLoading ? (<div>loading...</div>):(<div>
            
            {userData.map(item => <div>{item}</div>)}
            
            hello
         </div>)
    

}

export default PastTrips

// import Form from '../../components/Form.jsx';
// import { SettingsBackupRestoreOutlined } from "@material-ui/icons";
// export default function ProfilePage() {

//   const [name, setName] = useState("");
//   const [numReviews, setNumReviews] = useState("");
//   const [rating, setRating] = useState("");
//   const [location, setLocation] = useState("");
//   const [address, setAddress] = useState("");
//   const [subtitle_2, setSubtitle_2] = useState("");
//   const [subtitle_3, setSubtitle_3] = useState("");
//   const [profileType, setProfileType] = useState("");
//   const [about, setAbout] = useState("");
//   const [openModal, setOpenModal] = useState(false);
//   const [userData, setUserData] = useState();

//   const { email } = fire.auth().currentUser;
//   useEffect(() => {
//     async function fetchUser() {
//       const response = await axios.get('http://localhost:8000/users/619bef5149082a3546e3c00b');
//       const data = response.data;
//       const updatedData = data.filter((currentData) => currentData.user === email)
//       setName(data.name);
//       setNumReviews(data.noOfReviews);
//       setRating(data.rating);
//       setLocation(data.location);
//       setAddress(data.address);
//       setSubtitle_2(data.subtitle_2);
//       setSubtitle_3(data.subtitle_3);
//       setProfileType(data.profileType);
//       setAbout(data.about);
//       setUserData(data);
//     }

//     fetchUser();
//   }, []);
