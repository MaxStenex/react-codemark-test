import React from "react";
import { Image } from "../redux/images/reducer";
import "../styles/UngroupedImages.scss";

interface Props {
  images: Array<Image>;
}

const UngroupedImages: React.FC<Props> = ({ images }) => {
  return (
    <div className="ungrouped-images">
      {images.map((image: Image, index) => {
        // Проходимся по массиву, и возвращаем картинку или составную картинку
        return (
          <div className="ungrouped-images__image" key={image.imageURLs[0]}>
            {image.imageURLs.map((imageURL) => {
              return (
                <img
                  key={imageURL}
                  className="ungrouped-images__part"
                  src={imageURL}
                  alt=""
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default UngroupedImages;
