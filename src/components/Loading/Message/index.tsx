import Alert from "@material-ui/lab/Alert";
import { FC } from "react";
import { iMessageProps } from "./../../../types";

const Message: FC<iMessageProps> = ({ string, severity }) => (
  <Alert severity={severity}>{string}</Alert>
);

export default Message;
