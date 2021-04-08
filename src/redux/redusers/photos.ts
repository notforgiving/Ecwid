import { DataAction } from "./../../types";
import { actionsForGallery } from "./../actions/photos";

const photosReduser = (state = [], action: DataAction) => {
  switch (action.type) {
    case actionsForGallery.PUT_PHOTOS:
      return [...state, ...action.payload];
    case actionsForGallery.ADD_PHOTOS:
      return [...state, action.payload];
    case actionsForGallery.DELETE_PHOTO:
      const newState = state.filter((photo: any, index: number) => {
        if (index !== action.payload) {
          return photo;
        }
      });
      return newState;
    default:
      return state;
  }
};

export default photosReduser;
