import React from "react";
import { useSelector } from "react-redux";
import { Image } from "../redux/images/reducer";
import { RootStateType } from "../redux/rootReducer";
import "../styles/Images.scss";

const Images: React.FC = () => {
  const images = useSelector((state: RootStateType) => state.images.allImages);

  return (
    <section className="images">
      <div className="container">
        <div className="images__main">
          {images.map((image: Image, index) => {
            // Проходимся по массиву, и возвращаем картинку или составную картинку
            return (
              <div className="images__block" key={index}>
                {image.imageURLs.map((imageURL) => {
                  return (
                    <img key={imageURL} className="images__image" src={imageURL} alt="" />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Images;
