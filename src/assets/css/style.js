import { makeStyles } from "@material-ui/core/styles";
export const removeStyle = makeStyles(() => ({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 10px 10px 10px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0 20px",
  },
  button: {
    backgroundColor: "#FFD5D5",
    boder: "1px solid #FFD5D5",
    color: "#9A0000",
    height: "40px",
    width: "100px",
    borderRadius: "20px",
    marginLeft: "15px",
  },
  buttonCancel: {
    backgroundColor: "#F8F8F8",
    boder: "1px #F8F8F8 solid",
    color: "black",
    height: "40px",
    width: "100px",
    borderRadius: "20px",
  },
}));

export const detailStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    height: "40px",
    borderRadius: "20px",
    marginTop: "10px",
    cursor: "pointer",
  },
  card: {
    background: "#FFFFFF",
    border: "1px solid #C8C8CC",
    boxSizing: "border-box",
    borderRadius: "12px",
    paddingBottom: "15px",
  },
  hr: {
    height: "1px",
    backgroundColor: "#EFEEEE",
    border: "none",
    margin: "0 10px 0 10px",
  },
  info: {
    color: "#1A1A1A",
    fontSize: "14px",
    weight: "600",
    margin: "0 10px 0 10px",
  },
}));

export const homeStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 900,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    cursor: "pointer",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    height: "40px",
    borderRadius: "20px",
    marginTop: "10px",
  },
}));

export const formStyle = makeStyles(() => ({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  fields: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
  input: {
    width: "370px",
    height: "45px",
    borderRadius: "5px",
    backgroundColor: "#F8F8F8",
    paddingLeft: "5px",
    border: "1px #F8F8F8 solid",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0 20px",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    height: "40px",
    width: "100px",
    borderRadius: "20px",
    marginLeft: "15px",
    cursor: "pointer",
  },
  buttonCancel: {
    backgroundColor: "#F8F8F8",
    color: "black",
    height: "40px",
    width: "100px",
    borderRadius: "20px",
    cursor: "pointer",
  },
}));
