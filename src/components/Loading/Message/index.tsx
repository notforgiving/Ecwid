import Alert from "@material-ui/lab/Alert";
import { iMessageProps } from "./../../../types";

function Message({ string, severity }: iMessageProps) {
  return <Alert severity={severity}>{string}</Alert>;
}

export default Message;
