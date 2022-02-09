import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { useDispatch } from "react-redux";
import * as businessActions from "../../redux/actions/BusinessActions";
import { formStyle } from "../../assets/css/style";

export default function ModalForm({ handleClose, edit, business, open }) {
  const classes = formStyle();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: business?.name,
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (edit) {
      const data = {
        ...form,
        businessId: business?.businessId,
      };
      dispatch(businessActions.updateBusiness({ payload: data }));
    } else {
      dispatch(businessActions.createBusiness({ payload: form }));
    }
    dispatch(businessActions.getBusiness());
    handleClose();
  };
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={classes.content}>
          <h2>{edit ? "Edit Business" : "Create Business"}</h2>
          <DialogContent>
            <div className={classes.fields}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={classes.input}
              />
            </div>
          </DialogContent>
          <div className={classes.buttons}>
            <button onClick={handleClose} className={classes.buttonCancel}>
              Cancel
            </button>
            <button onClick={handleSubmit} className={classes.button}>
              Create
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
