import React from "react";
import { ourTeam, Button } from "./App";

export default function AboutUs() {
  const team = ourTeam;
  return (
    <div className="container text-color my-5">
      <h2>Our Team</h2>
      <br />
      <div className="row">
        {team.map((team) => (
          <Team team={team} key={team.id} />
        ))}
      </div>
    </div>
  );
}
function Team({ team }) {
  return (
    <div id="about" className="col-lg-4 col-md-12 col-sm-12 mb-4 ">
      <div className="card shadow p-3 mb-5 bg-body rounded">
        <img className="card-img-top" src={team.image} alt={team.name}></img>
        <div className="card-body text-color">
          <h2 className="card-title">{team.name}</h2>
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
