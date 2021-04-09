import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Miniatures from "./Miniatures";
import Message from "./Message";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadingPhotos, sendPhotos } from "../../redux/actions/photos";
import { PhotoType } from "./../../types";
import styles from "./style.module.css";

function index() {
  const dispatch = useDispatch();
  const { status, photos } = useSelector((state: any) => state);

  const [method, setMethod] = useState(false);
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState({
    flag: false,
    text: "",
    error: false,
  });

  useEffect(() => {
    switch (status) {
      case "ok": {
        setUrl("");
        setMessage({
          ...message,
          flag: true,
          text: "Фотография успешно загружена",
        });
        setMethod(false);
        break;
      }
      case "none": {
        setMessage({
          ...message,
          flag: false,
          text: "",
        });
        break;
      }
      default:
        break;
    }
  }, [status]);

  const showUrlInput = () => {
    setMethod(!method);
  };

  const onChangeUrl = (event: any) => {
    setUrl(event.target.value);
  };

  const onSubmit = () => {
    dispatch(loadingPhotos(url));
    reset();
  };

  const reset = () => {
    setMessage({
      flag: false,
      text: "",
      error: false,
    });
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
        setMessage({
          flag: true,
          text: "Неверный тип файла",
          error: true,
        });
      }
    };
  };

  return (
    <div className={styles.loading}>
      {message.flag && (
        <Message
          string={message.text}
          severity={message.error ? "error" : "success"}
        />
      )}
      <div className={styles.buttons}>
        <Button variant="contained" color="primary" onClick={showUrlInput}>
          Ввести URL
        </Button>
        <label htmlFor="contained-button-file" className={styles.buttonsLabel}>
          <Button variant="contained" color="primary" component="span">
            Загрузить файл
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
