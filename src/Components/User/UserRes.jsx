import React from "react";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

import "./UserRes.css";

const UserRes = () => {
  return (
    <>
      <section id="user__output">
        <h1>Welcome To User Side</h1>
        <EmojiEmotionsIcon className="smile" />
      </section>
    </>
  );
};

export default UserRes;
