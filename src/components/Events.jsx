import React from "react";
import { format } from "timeago.js";
import "./Events.css";

const Events = ({ events }) => {
  return (
    <>
      {events.map((ev, i) => (
        <div key={i} className="events-wrap ">
          <img src={ev.actor?.avatar_url} alt="" className="events-img" />
          <h6 className="events-title">
            {ev?.actor?.login} {ev?.type}
            <br />
            {ev?.repo?.name}
            <br />
            <span className="events-span">{format(ev?.created_at)}</span>
          </h6>
        </div>
      ))}
    </>
  );
};

export default Events;
