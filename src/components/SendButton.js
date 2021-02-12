import React from "react";

const SendButton = ({ canNotBeSent = false }) => {
  const fn = () => {
    alert("Данные были отправлены!");
  };

  return (
    <div>
      <button
        onClick={fn}
        disabled={canNotBeSent}
        style={{ backgroundColor: canNotBeSent ? "red" : "green" }}
      >
        Send
      </button>
    </div>
  );
};

export default SendButton;
