import React from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../redux/rootReducer";
import GroupedImages from "./GroupedImages";
import UngroupedImages from "./UngroupedImages";

interface Props {
  setTagValue: React.Dispatch<React.SetStateAction<string>>;
}

const Images: React.FC<Props> = ({ setTagValue }) => {
  const images = useSelector((state: RootStateType) => state.images.allImages);
  const imagesGroups = useSelector((state: RootStateType) => state.images.imagesGroups);
  const isGrouped = useSelector((state: RootStateType) => state.groups.grouped);

  return (
    <section className="images">
      <div className="container">
        {isGrouped ? (
          <GroupedImages setTagValue={setTagValue} imagesGroups={imagesGroups} />
        ) : (
          <UngroupedImages setTagValue={setTagValue} images={images} />
        )}
      </div>
    </section>
  );
};

export default Images;
