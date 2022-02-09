import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import ModalForm from "./ModalForm";
import RemoveModal from "./RemoveModal";
import { useDispatch, useSelector } from "react-redux";
import { businessesSelector } from "../../redux/selectors/BusinessSelectors";
import * as businessActions from "../../redux/actions/BusinessActions";
import { homeStyle } from "../../assets/css/style";

const Index = () => {
  const classes = homeStyle();
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [item, setItem] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(businessesSelector);
  const [modal, setModal] = useState(false);

  const handleClickOpen = (type, item) => {
    setItem(item);
    dispatch(businessActions.setBusiness(item));
    setEdit(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDetailBusiness = (item) => () => {
    navigate(`/${item?.businessId}`);
  };

  const handleClickDelete = (item) => () => {
    setItem(item);
    setModal(true);
  };

  const handleCloseDelete = () => {
    setModal(false);
  };

  useEffect(() => {
    dispatch(businessActions.getBusinesses());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2>Busines</h2>
        <button
          className={classes.button}
          onClick={() => handleClickOpen(true, {})}
        >
          Create Business
        </button>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <div className={classes.demo}>
            <List>
              {data !== null &&
                data?.map((item, i) => (
                  <ListItem key={i}>
                    <ListItemText
                      onClick={handleDetailBusiness(item)}
                      primary={item.name}
                      className={classes.title}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        onClick={() => handleClickOpen(true, item)}
                        edge="end"
                        aria-label="edit"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={handleClickDelete(item)}
                        edge="end"
                        aria-label="delete"
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
      {open && (
        <ModalForm
          open={open}
          handleClose={handleClose}
          edit={edit}
          business={item}
        />
      )}
      <RemoveModal modal={modal} item={item} handleClose={handleCloseDelete} />
    </div>
  );
};

export default Index;
