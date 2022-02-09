import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { removeStyle } from "../../assets/css/style";
import * as personActions from "../../redux/actions/PersonActions";

export default function ModalDelete(props) {
  const { handleClose, person } = props;
  const classes = removeStyle();
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleDelete = () => {
    const data = {
      businessId: id,
      personId: person?.personId,
    };
    dispatch(personActions.deletePerson({ payload: data }));
    let payload = { businessId: id };
    dispatch(personActions.getPeople(payload));
    handleClose();
  };
  return (
    <div>
      <Dialog
        open={props.open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={classes.content}>
          <h2>Are you sure to delete {person?.name} ?</h2>
          <div className={classes.buttons}>
            <button onClick={handleClose} className={classes.buttonCancel}>
              Cancel
            </button>
            <button onClick={handleDelete} className={classes.button}>
              Remove
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
