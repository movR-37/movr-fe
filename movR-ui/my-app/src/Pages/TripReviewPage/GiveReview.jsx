import React from "react";
import "./GiveReview.css";
import ReactStars from "react-rating-stars-component";
import TextField from "@material-ui/core/TextField";
import Swal from "sweetalert2";
import { Button } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import axios from "axios";
function GiveReview() {
  const { id } = useLocation().state;
  const [value, setValue] = React.useState(1);
  const [review, setReview] = React.useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const putObject = {
      rating: value,
      review,
    };
    await axios.put(`http://localhost:8000/trips/${id}`, putObject);
    console.log("review" + [review]);
    Swal.fire({
      icon: "success",
      title: "Review Submitted Succesfully",
    });
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
            onChange={setReview}
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
