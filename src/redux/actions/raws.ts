import {DataAction} from './../../types/';

export enum actionsForRaw {
  SET_PHOTO_IN_RAW ='SET_PHOTO_IN_RAW',
}

export const setPhotoInRaw = (value:number): DataAction => ({
  type: actionsForRaw.SET_PHOTO_IN_RAW,
  payload: value
});



