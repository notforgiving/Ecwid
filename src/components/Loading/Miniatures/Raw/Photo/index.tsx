import { IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";

import { useDispatch } from "react-redux";

import { deletePhoto } from "./../../../../../redux/actions/photos";

import { PhotoProps } from "./../../../../../types";

import { blue } from "@material-ui/core/colors";
import styles from "./style.module.css";

function index({ photo, flexGrow, number }: PhotoProps) {
  const dispatch = useDispatch();
  const onDeletePhoto = () => {
    dispatch(deletePhoto(number));
  };

  return (
    <div style={{ flexGrow: flexGrow }} className={styles.photoBlock}>
      <div className={styles.photolink}>
        <img src={photo} alt="photo" className={styles.img} />
        <div className={styles.hoverAction}>
          <IconButton aria-label="delete">
            <a href={photo} target="_blank">
              <VisibilityIcon
                fontSize="inherit"
                style={{ color: blue[50], fontSize: 25 }}
              />
            </a>
          </IconButton>
          <IconButton aria-label="delete" onClick={onDeletePhoto}>
            <DeleteIcon
              fontSize="inherit"
              style={{ color: blue[50], fontSize: 25 }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default index;
