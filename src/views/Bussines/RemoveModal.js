import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { useDispatch } from "react-redux";
import { removeStyle } from "../../assets/css/style";
import * as businessActions from "../../redux/actions/BusinessActions";

export default function RemoveModal(props) {
  const { handleClose, item } = props;
  const classes = removeStyle();
  const dispatch = useDispatch();
  const handleDelete = () => {
    const data = {
      businessId: item?.businessId,
    };
    dispatch(businessActions.deleteBusiness({ payload: data }));
    dispatch(businessActions.getBusiness());
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.modal}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={classes.content}>
          <h2>Are you sure to delete {item?.name} ?</h2>
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
