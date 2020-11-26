import { Image } from "./reducer";

export enum ImagesActionTypes {
  ADD_IMAGE = "ADD_IMAGE",
  CLEAR_IMAGES = "CLEAR_IMAGES",
  GROUP_IMAGES = "GROUP_IMAGES",
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
  type: ImagesActionTypes.CLEAR_IMAGES;
}

export const clearImages = (): ClearImagesType => {
  return {
    type: ImagesActionTypes.CLEAR_IMAGES,
  };
};

interface GroupImagesType {
  type: ImagesActionTypes.GROUP_IMAGES;
}

export const groupImages = () => {
  return {
    type: ImagesActionTypes.GROUP_IMAGES,
    payload: {},
  };
};
