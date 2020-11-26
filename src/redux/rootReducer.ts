import { combineReducers } from "redux";
import imagesReducer, { ImagesStateType } from "./images/reducer";
import groupsReducer, { GroupsStateType } from "./groups/reducer";

export interface RootStateType {
  images: ImagesStateType;
  groups: GroupsStateType;
}

const rootReducer = combineReducers<RootStateType>({
  images: imagesReducer,
  groups: groupsReducer,
});

export default rootReducer;
