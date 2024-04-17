import React, { useState, useEffect } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

function Chat() {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");

  console.log(text);
  const handleEmoji = (event) => {
    setText((prev) => prev + event.emoji);
    setOpenEmoji(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jhon Doe</span>
            <p>Lorem input dolor</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus, libero sit amet luctus.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus, libero sit amet luctus.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus, libero sit amet luctus.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus, libero sit amet luctus.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus, libero sit amet luctus.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus, libero sit amet luctus.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus, libero sit amet luctus.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>{" "}
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus, libero sit amet luctus.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>{" "}
        <div className="message">
          <img src="./avatar" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus, libero sit amet luctus.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>{" "}
        <div className="message own">
          <img src="./avatar" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              luctus, libero sit amet luctus.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a messega..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpenEmoji((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton"> Send</button>
      </div>
    </div>
  );
}

export default Chat;
