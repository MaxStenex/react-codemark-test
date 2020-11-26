import { combineReducers } from "redux";
import imagesReducer, { ImagesStateType } from "./images/reducer";

export interface RootStateType {
  images: ImagesStateType;
}

const rootReducer = combineReducers({ images: imagesReducer });

export default rootReducer;
