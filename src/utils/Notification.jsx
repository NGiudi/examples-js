import React from "react";

const Notifications = () => {
  const createNotify = (message) => {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      console.warn("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      new Notification(message);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          new Notification(message);
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  };

  return (
    <div>
      <button
        onClick={() => createNotify("Esta es la mejor notificación del mundo")}
      >
        Notificar
      </button>
    </div>
  );
};

export default Notifications;
