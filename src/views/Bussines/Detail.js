import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import ModalDetailForm from "./ModalDetailForm";
import ModalDelete from "./ModalDelete";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import { businessSelector } from "../../redux/selectors/BusinessSelectors";
import { peopleSelector } from "../../redux/selectors/PersonSelector";
import * as personActions from "../../redux/actions/PersonActions";
import * as businessActions from "../../redux/actions/BusinessActions";
import { detailStyle } from "../../assets/css/style";

export default function Detail() {
  const classes = detailStyle();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [listForm, setList] = useState(false);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(peopleSelector);
  const [person, setPerson] = useState({});
  const info = useSelector(businessSelector);
  const { id } = useParams();
  const handleClickOpen = (type, item) => () => {
    setPerson(item);
    setEdit(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickDelete = (item) => () => {
    setPerson(item);
    setModal(true);
  };

  const handleCloseDelete = () => {
    setModal(false);
  };

  useEffect(() => {
    const payload = { businessId: id };
    dispatch(businessActions.getBusiness({ payload }));
    dispatch(personActions.getPeople(payload));
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <IconButton onClick={() => navigate(-1)} edge="end" aria-label="view">
        <ArrowBackSharpIcon />
      </IconButton>
      <div className={classes.header}>
        <h2>{info?.name}</h2>
        <div>
          {listForm ? (
            <IconButton
              onClick={() => setList(false)}
              edge="end"
              aria-label="list"
            >
              <FormatListBulletedOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => setList(true)}
              edge="end"
              aria-label="view"
            >
              <AppsRoundedIcon />
            </IconButton>
          )}
          <button
            className={classes.button}
            onClick={handleClickOpen(false, {})}
          >
            Create Person
          </button>
        </div>
      </div>
      {!listForm ? (
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <div className={classes.demo}>
              <List>
                {data?.map((item, i) => (
                  <ListItem key={i}>
                    <ListItemText primary={item.name} secondary={item.role} />
                    <ListItemSecondaryAction>
                      <IconButton
                        onClick={handleClickOpen(true, item)}
                        edge="end"
                        aria-label="edit"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={handleClickDelete(item)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {data.map((item, i) => (
            <Grid item xs={12} sm={4} md={4} key={i}>
              <div className={classes.card}>
                <ListItem>
                  <ListItemText primary={item.name} secondary={item.role} />
                  <ListItemSecondaryAction>
                    <IconButton
                      onClick={handleClickOpen(true, item)}
                      edge="end"
                      aria-label="edit"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={handleClickDelete(item)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <hr className={classes.hr}></hr>
                <div className={classes.info}>{item.phone}</div>
                <div className={classes.info}>{item.email}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
      {open && (
        <ModalDetailForm
          open={open}
          handleClose={handleClose}
          edit={edit}
          person={person}
        />
      )}
      <ModalDelete
        open={modal}
        handleClose={handleCloseDelete}
        person={person}
      />
    </div>
  );
}
