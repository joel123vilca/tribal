import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import PaymentRoundedIcon from "@material-ui/icons/PaymentRounded";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import AccountBalanceSharpIcon from "@material-ui/icons/AccountBalanceSharp";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBalanceSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Tribal Pay" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PaymentRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Tribal Credit" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="User" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AttachMoneyRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Payments" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NotificationsRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItem>
  </div>
);
