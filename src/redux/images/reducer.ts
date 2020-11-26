import { ImagesActionTypes, ImagesActions } from "./actions";

export interface Image {
  tags: Array<string>;
  imageURLs: Array<string>;
}

export interface ImageGroup {
  tag: string;
  images: Array<Image>;
}

export interface ImagesStateType {
  allImages: Array<Image>;
  imagesGroups: Array<ImageGroup>;
}

const initialState: ImagesStateType = {
  allImages: [],
  imagesGroups: [],
};

const imagesReducer = (state = initialState, action: ImagesActions): ImagesStateType => {
  switch (action.type) {
    case ImagesActionTypes.ADD_IMAGE: {
      return { ...state, allImages: [...state.allImages, action.payload.image] };
    }
    case ImagesActionTypes.CLEAR_IMAGES: {
      return { ...state, allImages: [] };
    }
    case ImagesActionTypes.GROUP_IMAGES: {
      return { ...state, imagesGroups: action.payload.imagesGroups };
    }
    default: {
      return state;
    }
  }
};

export default imagesReducer;
