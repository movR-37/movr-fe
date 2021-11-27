import React from "react";
import "./GiveReview.css";
import ReactStars from "react-rating-stars-component";
import TextField from "@material-ui/core/TextField";
import Swal from "sweetalert2";
import { Button } from "semantic-ui-react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import fire from "../../config/firebase.config";

function GiveReview() {
  const { id } = useLocation().state;
  const [value, setValue] = React.useState(1);
  const [review, setReview] = React.useState("");
  const history = useHistory();
  const user = fire.auth().currentUser;

  const getTotalRatings = async () => {
    try {
      let response = await axios.get(`http://localhost:8000/trips/${id}`);
      const { mover } = response.data;

      response = await axios.get(`http://localhost:8000/trips/`);
      const moverData = Object.values(response.data).filter(
        (d) => d.mover === mover
      );
      const putObject = {
        noOfReviews: moverData.length,
      };
      response = await axios.put(
        `http://localhost:8000/movers/email/${mover}`,
        putObject
      );
      console.log(response.data);
    } catch (e) {
      console.log("ERROR!", e);
    }
  };

  const handleOnSubmit = async (e) => {
    console.log(id);
    e.preventDefault();
    console.log(value, review);
    const putObject = {
      rating: value,
      review,
      completed: true,
    };
    try {
      await axios.put(`http://localhost:8000/trips/${id}`, putObject);
      await getTotalRatings();
    } catch (e) {
      console.log("Error putting", e);
    }
    console.log("review" + [review]);
    Swal.fire({
      icon: "success",
      title: "Review Submitted Succesfully",
    });
    history.push(`/${user.uid}/home`);
  };

  return (
    <div className="GiveReviewMasterDiv">
      <div className="reviewCard">
        <div className="stars">
          <h1 className="GiveReview-txt">Leave a Rating</h1>
          <ReactStars
            className="starsDiv"
            count={5}
            onChange={setValue}
            value={value}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <div className="review">
          <br></br>
          <br></br>
          <br></br>
          <h1 className="GiveReview-txt">Please Write A Review</h1>
          <TextField
            id="outlined-multiline-static"
            fullWidth
            multiline
            rows={4}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className="SubmitDiv">
          <Button onClick={handleOnSubmit}>Submit </Button>
        </div>
      </div>
    </div>
  );
}

export default GiveReview;
