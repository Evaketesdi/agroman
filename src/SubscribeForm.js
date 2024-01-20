import React, { useState } from "react";
import StarRating from "./StarRating";

export default function SubscribeForm() {
  const [userRating, setUserRating] = useState("");
  return (
    <div id="contact" className="row">
      <form className="col-lg-5 col-md-8 col-sm-12 text-color text-center container card my-5">
        <h4 className="card-body">
          <strong>STAY INFORMED AND INSPIRED - SUBSCRIBE NOW</strong>
        </h4>
        <p className="card-body">
          Our newsletter is a valuable resource for staying informed and
          inspired on your agricultural journey. Don't miss out – subscribe now
          and reap the benefits of being part of our growing family.
        </p>
        <div className="row card-body">
          <div className="col">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <button type="submit" className="btn btn-dark col cta-button">
            Subscribe
          </button>

          <div className="mt-5">
            {userRating > 0 ? (
              <>
                <p>Thank you for your review!</p>
                <StarRating
                  maxRating={5}
                  size={24}
                  onSetRating={setUserRating}
                />
              </>
            ) : (
              <>
                <p>Give us a review</p>
                <StarRating
                  maxRating={5}
                  size={24}
                  onSetRating={setUserRating}
                />
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
