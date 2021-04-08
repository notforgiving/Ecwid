import Alert from "@material-ui/lab/Alert";

interface iMessageProps {
  string: string;
  severity: "success" | "info" | "warning" | "error";
}

function Message({ string, severity }: iMessageProps) {
  return <Alert severity={severity}>{string}</Alert>;
}

export default Message;
