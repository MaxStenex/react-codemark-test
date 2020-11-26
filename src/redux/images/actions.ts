import { Image } from "./reducer";

export enum ImagesActionTypes {
  ADD_IMAGE = "ADD_IMAGE",
  CLEAR_IMAGE = "CLEAR_IMAGE",
}

export type ImagesActions = AddImageType | ClearImagesType;

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

interface ClearImagesType {
  type: ImagesActionTypes.CLEAR_IMAGE;
}

export const clearImages = (): ClearImagesType => {
  return {
    type: ImagesActionTypes.CLEAR_IMAGE,
  };
};
