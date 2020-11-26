import React from "react";
import "../styles/Images.scss";

const Images: React.FC = () => {
  return (
    <section className="images">
      <div className="container">
        <div className="images__main">
          <div className="images__block">
            <img
              className="images__image"
              src="https://www.cruzo.net/user/images/k/dbb025264e7d1a35772dfa4387514de9_172.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Images;
