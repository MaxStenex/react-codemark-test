import { ImagesActionTypes, ImagesActions } from "./actions";

export interface Image {
  tags: Array<string>;
  imageURLs: Array<string>;
}

export interface ImagesStateType {
  allImages: Array<Image>;
}

const initialState: ImagesStateType = {
  allImages: [],
};

const imagesReducer = (state = initialState, action: ImagesActions): ImagesStateType => {
  switch (action.type) {
    case ImagesActionTypes.ADD_IMAGE: {
      return { ...state, allImages: [...state.allImages, action.payload.image] };
    }
    default: {
      return state;
    }
  }
};

export default imagesReducer;
