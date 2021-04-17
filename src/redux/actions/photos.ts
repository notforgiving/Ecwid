import { BaseAction, DataAction, PhotoType } from "./../../types/";

export enum actionsForGallery {
  PUT_PHOTOS = "PUT_PHOTOS",
  ADD_PHOTOS = "ADD_PHOTOS",
  LOADING_PHOTOS = "LOADING_PHOTOS",
  SEND_PHOTOS = "SEND_PHOTOS",
  DELETE_PHOTO = "DELETE_PHOTO",
  CLEAN_GALLERY = "CLEAN_GALLERY",
}

export const cleanGallery = (): BaseAction => ({
  type: actionsForGallery.CLEAN_GALLERY,
});

export const putPhotos = (photosArray: Array<PhotoType>): DataAction => ({
  type: actionsForGallery.PUT_PHOTOS,
  payload: photosArray,
});

export const deletePhoto = (number: number): DataAction => ({
  type: actionsForGallery.DELETE_PHOTO,
  payload: number,
});

export const sendPhotos = (photosArray: Array<string>): DataAction => ({
  type: actionsForGallery.SEND_PHOTOS,
  payload: photosArray,
});

export const addPhotos = (url: string, flexGrow: number): DataAction => ({
  type: actionsForGallery.ADD_PHOTOS,
  payload: {
    url,
    flexGrow,
  },
});

export const loadingPhotos = (url: string): DataAction => ({
  type: actionsForGallery.LOADING_PHOTOS,
  payload: url,
});
