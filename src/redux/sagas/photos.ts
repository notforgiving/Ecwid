import { put, call } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import { DataAction } from "./../../types/";
import { actionsForGallery, addPhotos, putPhotos } from "./../actions/photos";
import { setOk, setNone } from "./../actions/status";
import { setMessage } from "./../actions/message";
import { PhotoType } from "./../../types";

function getFlexGrow(url: string) {
  return new Promise(function (resolve, reject) {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject(img);
    };
    img.src = url;
  });
}

function getFlexGrowAtArray(array: Array<string>) {
  const resultArray: Array<PhotoType> = [];
  const promises: any = [];
  array.forEach(function (url: string) {
    promises.push(
      getFlexGrow(url).then((img: any) => {
        const flexGrow = img.width / img.height;
        resultArray.push({
          url,
          flexGrow,
        });
      })
    );
  });

  return new Promise(function (resolve) {
    Promise.all(promises).then(() => {
      resolve(resultArray);
    });
  });
}

function* workerPutPhotos(action: DataAction) {
  const result: Array<PhotoType> = yield call(
    getFlexGrowAtArray,
    action.payload
  );
  yield put(putPhotos(result));
  yield put(setOk());
  yield put(setNone());
}

function* workerLoadPhotos(action: DataAction) {
  try {
    const result: HTMLFormElement = yield call(getFlexGrow, action.payload);
    const flexGrow = result.width / result.height;
    yield put(addPhotos(action.payload, flexGrow));
    yield put(setOk());
    yield put(setNone());
  } catch (error) {
    yield put(
      setMessage({
        text: "Неверный тип файла по ссылке",
        error: true,
      })
    );
  }
}

export function* watchLoadPhotos() {
  yield takeEvery(actionsForGallery.LOADING_PHOTOS, workerLoadPhotos);
}

export function* watchPutPhotosArray() {
  yield takeEvery(actionsForGallery.SEND_PHOTOS, workerPutPhotos);
}
