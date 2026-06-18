import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import { prioritySort } from "../utils/prioritySort";

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getNotifications()
      .then(data => {
        console.log("RAW DATA:", data);

        const sorted = prioritySort(data);
        setNotifications(sorted);
      })
      .catch(err => {
        console.log(err);
        setError("Failed to load notifications");
      });
  }, []);

  return (
    <div>
      <h1>Priority Notifications</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {notifications.length === 0 && !error && (
        <p>Loading...</p>
      )}

      {notifications.map((item) => (
        <div key={item.ID}>
          <h3>{item.Type}</h3>
          <p>{item.Message}</p>
          <small>{item.Timestamp}</small>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PriorityNotifications;