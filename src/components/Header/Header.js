import { AppBar, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { Add, Apps } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ children }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerWrapper}>
            <MenuIcon className={classes.appBar} />
            {children}
            <img
              src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
              alt="Classroom"
            />
            <Typography variant="h6" className={classes.title}>
              Classroom
            </Typography>
          </div>

          <div className={classes.header__wrapper__right}>
            <Add onClick={handleClick} className={classes.icon} />
            <Apps className={classes.icon} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>Crear una Clase</MenuItem>
              <MenuItem>Unirse a una Clase</MenuItem>
            </Menu>
            <div>
              <Avatar className={classes.icon} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
