import React from "react";
import Message from "styles/Message";
import P from "styles/P";

const Notification = ({ status, title, message, closeToast }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return (
          <img
            src="/assets/img/checkmark-green.svg"
            width="15"
            height="15"
          />
        );
      case "error":
        return (
          <img src="/assets/img/warning.svg" width="15" height="15" />
        );
      case "info":
        return (
          <img src="/assets/img/info.svg" width="15" height="15" />
        );
      case "warning":
        return (
          <img
            src="/assets/img/fair-warning.svg"
            width="15"
            height="15"
          />
        );
      default:
        return null;
    }
  };
  return (
    <Message.Container status={status}>
      <Message.Icon>{getStatusIcon(status)}</Message.Icon>
      <Message.Content>
        {title && (
          <P big semiBold>
            {title}
          </P>
        )}
        {message && <P medium>{message}</P>}
      </Message.Content>
      <Message.Close>
        <button onClick={closeToast}>
          <img src="/assets/img/close-icon.svg" />
        </button>
      </Message.Close>
    </Message.Container>
  );
};

export default Notification;
