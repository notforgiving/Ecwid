import { useResizeDetector } from "react-resize-detector";
import { useDispatch, useSelector } from "react-redux";
import { setPhotoInRaw } from "./redux/actions/raws";
import Loading from "./components/Loading";
import { FC } from "react";
import { IInitialState } from "./types";

const App:FC = ()=> {
  const diapatch = useDispatch();
  const {raws} = useSelector((state: IInitialState) => state);

  const { ref, width } = useResizeDetector({
    onResize: () => {
      if (width && width < 1920 && width > 1400) {
        if (raws != 6) {
          diapatch(setPhotoInRaw(6));
        }
      }
      if (width && width < 1400 && width > 1024) {
        if (raws != 5) {
          diapatch(setPhotoInRaw(5));
        }
      }
      if (width && width < 1024 && width > 768) {
        if (raws != 3) {
          diapatch(setPhotoInRaw(3));
        }
      }
      if (width && width < 768 && width > 320) {
        if (raws != 2) {
          diapatch(setPhotoInRaw(2));
        }
      }
    },
  });
  return (
    <div ref={ref}>
      <Loading />
    </div>
  );
}

export default App;
