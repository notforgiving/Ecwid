import { useSelector } from "react-redux";

import Photo from "./Photo";

import { PhotoType } from "./../../../../types";
import { RawProps } from "./../../../../types";

import styles from "./style.module.css";

function index({ array, number }: RawProps) {
  const { raws } = useSelector((state: any) => state);

  return (
    <div className={styles.raw}>
      {array.map((photo: PhotoType, index: number) => {
        return (
          <Photo
            key={`block_photo_${photo.url}${index}`}
            photo={photo.url}
            flexGrow={photo.flexGrow}
            number={number * raws + index}
          />
        );
      })}
    </div>
  );
}

export default index;
