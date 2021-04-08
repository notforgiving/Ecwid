import { all } from "redux-saga/effects";
import { watchLoadPhotos, watchPutPhotosArray } from "./photos";

export function* rootSaga() {
  yield all([watchLoadPhotos(), watchPutPhotosArray()]);
}
