import Raw from "./Raw";

import { useSelector } from "react-redux";

import { PhotoType } from "./../../../types";

function Miniatures() {
  const { photos, raws } = useSelector((state: any) => state);
  let rawsArray: Array<PhotoType> = [];
  const filtredArray: Array<Array<PhotoType>> = [];
  photos.forEach((photo: PhotoType, index: number) => {
    if ((index + 1) % raws > 0 && index < photos.length - 1) {
      rawsArray.push(photo);
    } else if ((index + 1) % raws === 0 || index === photos.length - 1) {
      rawsArray.push(photo);
      filtredArray.push(rawsArray);
      rawsArray = [];
    }
  });

  return (
    <>
      {filtredArray.map((PhotoType: Array<PhotoType>, index: number) => {
        return <Raw key={index} array={PhotoType} number={index} />;
      })}
    </>
  );
}

export default Miniatures;
