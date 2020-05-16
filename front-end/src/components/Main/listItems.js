import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MapIcon from '@material-ui/icons/Map';
import PlaceIcon from '@material-ui/icons/Place';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {NavLink} from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <NavLink to="/profile"> <ListItem button>
            <ListItemIcon>
               <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItem></NavLink>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved places</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <PlaceIcon />
            </ListItemIcon>
            <ListItemText primary="Foundations" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Routes" />
        </ListItem>

    </div>
);