import React from "react";
import telegram from "../media/telegram-original.svg";
import wechat from "../media/wechat.svg";

function Contact() {
  return (
    <div className="contactPage">
      <div className="contactPageIcon">
        <a
          className="contactPageIcon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/zhuanya/"
        >
          <i class="fa-brands fa-linkedin fa-2xl contactIcons"></i>
        </a>
      </div>
      <div className="contactPageIcon">
        <a
          className="contactPageIcon"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:zhuanya@nyu.edu"
        >
          <i class="fa-solid fa-envelope fa-2xl contactIcons"></i>
        </a>
      </div>
      <div className="contactPageIcon">
        <a
          className="contactPageIcon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/zhuanya14"
        >
         <i class="fa-solid fa-paper-plane fa-2xl contactIcons"></i>
        </a>
      </div>
      <div className="contactPageIcon">
        <a
          className="contactPageIcon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/11S9MyukDqzKQrzuQyfdxfIB1ePn0wm1s/view?usp=sharing"
        >
          <i class="fa-brands fa-weixin fa-2xl contactIcons"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
