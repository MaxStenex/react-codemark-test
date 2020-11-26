import React from "react";
import { Image, ImageGroup } from "../redux/images/reducer";
import "../styles/GroupedImages.scss";

interface Props {
  imagesGroups: Array<ImageGroup>;
  setTagValue: React.Dispatch<React.SetStateAction<string>>;
}

const GroupedImages: React.FC<Props> = ({ imagesGroups, setTagValue }) => {
  return (
    <div className="grouped-images">
      {imagesGroups.map((imageGroup: ImageGroup, index) => (
        <div className="grouped-images__wrapper" key={index}>
          <h2 className="grouped-images__title">{imageGroup.tag}</h2>
          <div className="grouped-images__main">
            {imageGroup.images.map((image: Image, index) => (
              <div
                className="grouped-images__image"
                key={index}
                onClick={() => setTagValue(image.tags.join(","))}
              >
                {image.imageURLs.map((imageURL: string) => (
                  <img
                    src={imageURL}
                    alt=""
                    className="grouped-images__part"
                    key={imageURL}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupedImages;
