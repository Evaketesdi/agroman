import React from "react";
import { ourTeam, Button } from "./MainApp";

export default function AboutUs() {
  const team = ourTeam;
  return (
    <div id="about" className="container my-5 text-color">
      <h2>About us</h2>
      <br></br>
      <p>
        AGROMAN was born in 2013 with a grand yet simple vision – to solve the
        global food problem by changing the way food is produced and positively
        impact over a million people.
      </p>
      <br></br>
      <p>
        Farmers are the heroes who produce the food we eat. Pressured by many
        challenges and risks, from climate, pests, market prices – farmers have
        a hard time achieving profitability and secure decent livelihoods for
        their families. One billion people work in agriculture, improving their
        livelihood is our major goal.
      </p>
      <br></br>
      <h3>Our Team</h3>
      <br />
      <div className="team-card">
        {team.map((team) => (
          <Team team={team} key={team.id} />
        ))}
      </div>
    </div>
  );
}
function Team({ team }) {
  return (
    /*<div
      id="about"
      className="col-lg-4 col-md-12 col-sm-12 mb-4 d-flex align-items-stretch "
    >
      <div className="card shadow p-3 mb-5 bg-body rounded team-card">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card-body text-color">
              <h3 className="card-title">{team.name}</h3>
              <p className="card-text">{team.function}</p>
              <p className="card-text">{team.description}</p>
              <p className="card-text">{team.email}</p>
              <p>
                <Button>Contact</Button>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              className="card-img-top image-fluid"
              src={team.image}
              alt={team.name}
            ></img>
          </div>
        </div>
      </div>
    </div>*/
    <div className="row">
      <div className="card shadow p-3 m-5 bg-bod rounded col">
        <img
          className="card-img-top mx-auto"
          src={team.image}
          alt={team.name}
        ></img>
        <div className="card-body text-color">
          <h3 className="card-title">{team.name}</h3>
          <p className="card-text">{team.function}</p>
          <p className="card-text">{team.description}</p>
          <p className="card-text">{team.email}</p>
          <p>
            <Button>Contact</Button>
          </p>
        </div>
      </div>
    </div>
  );
}
