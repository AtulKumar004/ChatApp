import React from "react";
import "./cards.scss";
import classNames from "classnames";
import userImage from "../../Assests/dumy_user.jpg";

const styles = {
  cont: "card__cont",
  user_image: "user_image",
  user_name: "user_name",
  user_Lmessage: "user_Lmessage",
};

const UserCards = () => {
  return (
    <div
      className={classNames({
        [styles.cont]: true,
      })}
      
    >
      <div
        className={classNames({
          [styles.user_image]: true,
        })}
      >
        <img src={userImage} alt="user_image" />
      </div>
      <div className="flex flex-col justify-center gap-0.5 border-b flex-grow pb-4">
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
          Message sent
        </div>
      </div>
    </div>
  );
};

export { UserCards };
