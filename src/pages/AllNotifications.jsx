import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";

function AllNotifications() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {

    getNotifications()
      .then(data => setNotifications(data))
      .catch(err => console.log(err));

  }, []);

  return (
    <div>
      <h1>All Notifications</h1>

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

export default AllNotifications;