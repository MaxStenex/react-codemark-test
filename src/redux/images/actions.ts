import { Image } from "./reducer";

export enum ImagesActionTypes {
  ADD_IMAGE = "ADD_IMAGE",
}

export type ImagesActions = AddImageType;

interface AddImageType {
  type: ImagesActionTypes.ADD_IMAGE;
  payload: {
    image: Image;
  };
}

export const addImage = (tags: Array<string>, imageURLs: Array<string>): AddImageType => {
  return {
    type: ImagesActionTypes.ADD_IMAGE,
    payload: {
      image: {
        tags,
        imageURLs,
      },
    },
  };
};
