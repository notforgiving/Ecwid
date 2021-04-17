import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Miniatures from "./Miniatures";
import Message from "./Message";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  loadingPhotos,
  sendPhotos,
  cleanGallery,
} from "../../redux/actions/photos";
import { setMessage } from "./../../redux/actions/message";
import { PhotoType } from "./../../types";
import styles from "./style.module.css";

function index() {
  const dispatch = useDispatch();
  const { status, photos, message } = useSelector((state: any) => state);

  const [method, setMethod] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    switch (status) {
      case "ok": {
        setUrl("");
        dispatch(
          setMessage({
            text: "Фотография успешно загружена",
            error: false,
          })
        );
        setMethod(false);
        break;
      }
      default:
        break;
    }
  }, [status]);

  const showUrlInput = () => {
    setMethod(!method);
    dispatch(
      setMessage({
        text: "",
        error: false,
      })
    );
  };

  const onChangeUrl = (event: any) => {
    setUrl(event.target.value);
  };

  const onSubmit = () => {
    dispatch(loadingPhotos(url));
    reset();
  };

  const onCleanGallery = () => {
    dispatch(cleanGallery());
    dispatch(
      setMessage({
        text: "",
        error: false,
      })
    );
  };

  const reset = () => {
    setMethod(false);
    setUrl("");
  };

  const onChangeInputFile = (event: any) => {
    let file = event.nativeEvent.target.files[0];
    let reader = new FileReader();
    file && reader.readAsText(file);
    const data: Array<string> = [];
    reader.onload = function () {
      if (file && file.type === "application/json") {
        const json = JSON.parse(String(reader.result));
        Object.keys(json).forEach((key: string) => {
          json[key].map((photo: PhotoType) => {
            data.push(photo.url);
          });
        });
        dispatch(sendPhotos(data));
        reset();
      } else {
      }
    };
  };

  return (
    <div className={styles.loading}>
      {message.text != "" && (
        <Message
          string={message.text}
          severity={message.error ? "error" : "success"}
        />
      )}

      <div>
        <Typography color="primary" variant="h4">
          Создайте свою галерею изображений
        </Typography>
      </div>
      <div>
        <Typography color="primary" variant="h5">
          1. Загрузите url из интернета
        </Typography>
        <Typography color="primary" variant="h5">
          2. Или загрузите файл{" "}
          <a href="https://cloud.mail.ru/public/cT8g/XdJgGNLTA" target="_blank">
            JSON
          </a>
        </Typography>
      </div>
      <div className={styles.buttons}>
        <Button variant="contained" color="primary" onClick={showUrlInput}>
          Ввести URL
        </Button>
        <Button variant="contained" color="primary" onClick={onCleanGallery}>
          Удалить галерею
        </Button>
        <label htmlFor="contained-button-file" className={styles.buttonsLabel}>
          <Button variant="contained" color="primary" component="span">
            Загрузить файл JSON
          </Button>
        </label>
        <input
          accept="image/*"
          className={styles.fileInput}
          id="contained-button-file"
          multiple
          type="file"
          onChange={onChangeInputFile}
        />
      </div>
      {method && (
        <div className={styles.input}>
          <TextField
            id="outlined-basic"
            label="Введите URL:"
            variant="outlined"
            value={url}
            onChange={onChangeUrl}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={onSubmit}
            disabled={url.length === 0}
          >
            Загрузить в галлерею
          </Button>
        </div>
      )}
      {photos.length ? <Miniatures /> : null}
    </div>
  );
}

export default index;
