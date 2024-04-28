import React, { useEffect, useRef, useState } from "react";
import "./chatSection.scss";
import classNames from "classnames";
import userImage from "../../Assests/dumy_user.jpg";
import EmojiPicker from "emoji-picker-react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { Transition } from "@headlessui/react";
import UploadFiles from "./uploadFiles";

const styles = {
  cont: "chat_message__cont",
  header: "chat_message__header",
  body: "chat_message__body",
  footer: "chat_message__footer",
  user_image: "user_image",
  user_name: "user_name",
  user_Lmessage: "user_Lmessage",
  isClick: "isClick",
};
const ChatSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [showPicker, setShowPicker] = useState(false);


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEmojiClick = (emojiObject) => {
    const { emoji } = emojiObject;
    setInputValue(inputValue + emoji);
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div
      className={classNames({
        [styles.cont]: true,
        ["w-full h-full"]: true,
      })}
    >
      <div
        className={classNames({
          [styles.header]: true,
        })}
      >
        <div className="flex items-center gap-4 ">
          <div
            className={classNames({
              [styles.user_image]: true,
            })}
            style={{ width: "4rem", height: "4rem", marginBottom: 0 }}
          >
            <img src={userImage} alt="user_image" />
          </div>

          <div className="flex flex-col justify-center gap-0   ">
            <div
              className={classNames({
                [styles.user_name]: true,
              })}
            >
              Atul kumar
            </div>
            <div
              className={classNames({
                [styles.user_Lmessage]: true,
              })}
            >
              Business Account
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames({
          [styles.body]: true,
        })}
      >
        Chat message{" "}
      </div>
      <div
        className={classNames({
          [styles.footer]: true,
        })}
      >
        {/* <AiOutlinePlus className="text-3xl" /> */}
        <UploadFiles />

       

        <BsEmojiSmile onClick={togglePicker} className="text-3xl" />
        {showPicker && (
          <EmojiPicker className="emojiCont" onEmojiClick={handleEmojiClick} />
        )}

        <input
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowPicker(false)}
        />
      </div>
    </div>
  );
};

export default ChatSection;
