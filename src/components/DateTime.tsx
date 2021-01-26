import React, { useState, useEffect } from "react";

function getNewTime() {
  const date = new Date();
  const timeState = date.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return timeState;
}

function getNewDate() {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateState = new Intl.DateTimeFormat("ru-RU", options).format(date);

  return dateState;
}

export const DateTime: React.FC = () => {
  console.log("Component Render");

  const [timeUse, setTimeUse] = useState(() => {
    return getNewTime();
  });

  const [dateUse, setDateUse] = useState(() => {
    return getNewDate();
  });

  function updateUse() {
    setTimeUse(getNewTime());
    setDateUse(getNewDate());
  }

  useEffect(() => {
    setInterval(updateUse, 1000);
  }, []);

  return (
    <li className="time">
      <h1 className="animated fadeInLeft">{timeUse}</h1>
      <p className="animated fadeInRight">{dateUse}</p>
    </li>
  );
};
