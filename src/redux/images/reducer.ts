export interface Image {
  tag: string;
  imageURL: string;
}

export interface ImagesStateType {
  allImages: Array<Image>;
}

const initialState: ImagesStateType = {
  allImages: [],
};

const imagesReducer = (state = initialState, action: any): ImagesStateType => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default imagesReducer;
