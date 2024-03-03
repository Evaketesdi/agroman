import React, { useState, useEffect } from "react";

export default function SubscribersCounter() {
  const [subscribersCount, setSubscribersCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (subscribersCount < 3000) {
        setSubscribersCount((prevCount) => prevCount + 10);
      } else {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [subscribersCount]);

  return (
    <div className=" container card text-color shadow p-3 mb-5 bg-body rounded container my-5 py-3">
      <h2>Subscribers: {subscribersCount}</h2>
    </div>
  );
}
