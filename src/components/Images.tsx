import React from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../redux/rootReducer";
import GroupedImages from "./GroupedImages";
import UngroupedImages from "./UngroupedImages";

const Images: React.FC = () => {
  const images = useSelector((state: RootStateType) => state.images.allImages);
  const imagesGroups = useSelector((state: RootStateType) => state.images.imagesGroups);
  const isGrouped = useSelector((state: RootStateType) => state.groups.grouped);

  return (
    <section className="images">
      <div className="container">
        {isGrouped ? (
          <GroupedImages imagesGroups={imagesGroups} />
        ) : (
          <UngroupedImages images={images} />
        )}
      </div>
    </section>
  );
};

export default Images;
