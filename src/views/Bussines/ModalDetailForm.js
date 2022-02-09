import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as personActions from "../../redux/actions/PersonActions";
import { formStyle } from "../../assets/css/style";

export default function ModalDetailForm(props) {
  const { handleClose, edit, person } = props;
  const classes = formStyle();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [form, setForm] = useState({
    email: person?.email,
    name: person?.name,
    phone: person?.phone,
    role: person?.role,
    join_date: person?.join_date,
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (edit) {
      const payload = {
        businessId: id,
        personId: person?.personId,
        ...form,
      };
      dispatch(personActions.updatePerson({ payload: payload }));
    } else {
      const data = {
        businessId: id,
        ...form,
      };
      dispatch(personActions.createPerson({ payload: data }));
    }
    let payload = { businessId: id };
    dispatch(personActions.getPeople(payload));
    handleClose();
  };

  return (
    <Dialog open={props.open} keepMounted onClose={handleClose}>
      <div className={classes.content}>
        <h2>{edit ? "Edit Person" : "Create Person"}</h2>
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
          <div className={classes.fields}>
            <label>Role</label>
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              className={classes.input}
            />
          </div>
          <div className={classes.fields}>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={classes.input}
            />
          </div>
          <div className={classes.fields}>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={classes.input}
            />
          </div>
          <div className={classes.fields}>
            <label>Join Date</label>
            <input
              type="date"
              name="join_date"
              value={form.join_date}
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
            {edit ? "Edit" : "Create"}
          </button>
        </div>
      </div>
    </Dialog>
  );
}
