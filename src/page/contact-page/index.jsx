import React from "react";
import "./index.scss";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <main>
      <div className="Container">
        <h1>Contact page</h1>
        <p>
          This is a Contact page and you can write and reach me using the
          following
        </p>
        <div className="contactContainer">
          <b>
            <CiMail />
          </b>
          <p>
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
              Atakisiyevelnur522@gmail.com
            </a>
          </p>
          <br />
          <b>
            <FaPhoneAlt />
          </b>
          <p>
            <a href="#" target="_blank">
              +994 77 328 94 05
            </a>
          </p>
          <br />
          <b>
            <FaApple />
          </b>
          <p>
            <a href="https://www.icloud.com/" target="_blank">
              elnur522@icloud.com
            </a>
          </p>
          <br />
          <b>
            <FaLinkedin />
          </b>
          <p>
            <a href="https://www.linkedin.com/in/the-elnur/" target="_blank">
              Elnur Atakishiyev
            </a>
          </p>
          <br />
          <b>
            <FaInstagram />
          </b>
          <p>
            <a
              href="https://www.instagram.com/_atakisiyev.elnur/"
              target="_blank"
            >
              _atakisiyev.elnur
            </a>
          </p>
          <br />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
