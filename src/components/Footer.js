import React, { useState } from "react";
import rulesImg from "../images/image-rules.svg";
import closeButton from "../images/icon-close.svg";

export default function Footer() {
  const [modal, setModal] = useState(false);

  function closeModal() {
    setModal(false);
  }

  function openModal() {
    setModal(true);
  }

  return (
    <>
      <footer>
        <button className="btnRules" onClick={openModal}>
          Rules
        </button>
        <div
          id="rules-modal"
          style={modal ? { visibility: "visible" } : { visibility: "hidden" }}
          className="modalBox"
        >
          <div className="rules-container">
            <h1 className="heading">rules</h1>
            <img className="img-rules" src={rulesImg} alt="game rules" />
            <button className="btnClose" onClick={closeModal}>
              <img src={closeButton} alt="game rules" />
            </button>
          </div>
        </div>
      </footer>
      <div class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/priyankalad"
          rel="noreferrer"
          target="_blank"
        >
          Priyanka Lad
        </a>
        .
      </div>
    </>
  );
}
